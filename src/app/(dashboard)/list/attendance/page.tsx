import FormContainer from "@/components/FormContainer"
import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import prisma from "@/lib/prisma"
import { ITEM_PER_PAGE } from "@/lib/settings"
import { auth } from "@clerk/nextjs/server"
import { Attendance, Lesson, Prisma, Student } from "@prisma/client"
import Image from "next/image"

const { userId, sessionClaims } = auth();
export const role = (sessionClaims?.metadata as { role?: string })?.role;
export const currentUserId = userId;

type AttendanceList = Attendance & {
    student: Student,
    lesson: {
        name: string,
        subject: { name: string },
        class: { name: string }
    }
}

const columns = [
    {
        header: "Student",
        accessor: "student",
    },
    {
        header: "Lesson",
        accessor: "lesson",
        className: "hidden md:table-cell",
    },
    {
        header: "Class",
        accessor: "class",
        className: "hidden md:table-cell",
    },
    {
        header: "Date",
        accessor: "date",
        className: "hidden lg:table-cell",
    },
    {
        header: "Status",
        accessor: "status",
    },
    ...(role === "admin" || role === "teacher" ? [{
        header: "Actions",
        accessor: "actions",
    }] : []),
]

const renderRow = (item: AttendanceList) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-skyLight">
        <td className="flex items-center gap-4 p-4">
            <div className="flex flex-col">
                <h3 className="font-semibold">{item.student.name} {item.student.surname}</h3>
                <p className="text-xs text-gray-500">{item.student.username}</p>
            </div>
        </td>
        <td className="hidden md:table-cell">{item.lesson.subject.name}</td>
        <td className="hidden md:table-cell">{item.lesson.class.name}</td>
        <td className="hidden lg:table-cell">{new Intl.DateTimeFormat("en-UK").format(item.date)}</td>
        <td>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${item.present
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
                }`}>
                {item.present ? "Present" : "Absent"}
            </span>
        </td>
        <td>
            <div className="flex items-center gap-2">
                {(role === "admin" || role === "teacher") && (
                    <>
                        <FormContainer table="attendance" type="update" data={item} />
                        <FormContainer table="attendance" type="delete" id={item.id} />
                    </>
                )}
            </div>
        </td>
    </tr>
)

const AttendanceListPage = async ({ searchParams }: { searchParams: { [key: string]: string | undefined } }) => {
    const { page, ...queryParams } = searchParams;
    const p = page ? parseInt(page) : 1;

    const query: Prisma.AttendanceWhereInput = {}

    if (queryParams) {
        for (const [key, value] of Object.entries(queryParams)) {
            if (value !== undefined) {
                switch (key) {
                    case "classId":
                        query.lesson = {
                            classId: parseInt(value)
                        };
                        break;
                    case "studentId":
                        query.studentId = value;
                        break;
                    case "search":
                        query.student = {
                            name: { contains: value, mode: "insensitive" }
                        };
                        break;
                    default:
                        break;
                }
            }
        }
    }

    switch (role) {
        case "admin":
            break;
        case "teacher":
            query.lesson = {
                teacherId: currentUserId!
            };
            break;
        case "student":
            query.studentId = currentUserId!;
            break;
        case "parent":
            query.student = {
                parentId: currentUserId!
            };
            break;
        default:
            break;
    }

    const [data, count] = await prisma.$transaction([
        prisma.attendance.findMany({
            where: query,
            include: {
                student: {
                    select: { name: true, surname: true, username: true }
                },
                lesson: {
                    select: {
                        name: true,
                        subject: { select: { name: true } },
                        class: { select: { name: true } }
                    }
                }
            },
            orderBy: { date: "desc" },
            take: ITEM_PER_PAGE,
            skip: ITEM_PER_PAGE * (p - 1)
        }),
        prisma.attendance.count({ where: query })
    ]);

    return (
        <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
            <div className='flex items-center justify-between'>
                <h1 className='hidden md:block text-lg font-semibold'>Attendance Records</h1>
                <div className='flex flex-col md:flex-row items-center gap-4 w-full md:w-auto'>
                    <TableSearch />
                    <div className='flex items-center gap-4 self-end'>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow">
                            <Image src="/sort.png" alt="" width={14} height={14} />
                        </button>
                        {(role === "admin" || role === "teacher") && (
                            <FormContainer table="attendance" type="create" />
                        )}
                    </div>
                </div>
            </div>
            <Table columns={columns} renderRow={renderRow} data={data} />
            <Pagination page={p} count={count} />
        </div>
    )
}

export default AttendanceListPage