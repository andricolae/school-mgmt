import Announcements from '@/components/Announcements'
import BigCalendar from '@/components/BigCalendar'
import FormModal from '@/components/FormModal'
import Performance from '@/components/Performance'
import Image from 'next/image'
import Link from 'next/link'

const SingleStudentPage = () => {
  return (
    <div className='flex-1 p-4 flex flex-col gap-4 xl:flex-row'>
        <div className="w-full xl:w-2/3">
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="bg-sky py-6 px-4 rounded-md flex-1 flex gap-4">
                    <div className="w-1/3">
                        <Image 
                            src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                            alt="" 
                            width={144} 
                            height={144} 
                            className="w-36 h-36 rounded-full object-cover"
                        />
                    </div>
                    <div className="w-2/3 flex flex-col justify-between gap-4">
                        <div className='flex items-center gap-4'>
                            <h1 className='text-xl font-semibold'>Mark Cuban</h1>
                            <FormModal table="student" type="update" data={{
                                id: 1,
                                username: "markcuban",
                                firstName: "mark",
                                lastName: "Cuban",
                                email: "mark@cuban.com",
                                password: "password",
                                img:
                                "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
                                phone: "1234567890",
                                address: "123 Main St, Anytown, USA",
                                bloodType: "A+",
                                dateOfBirth: "1990-01-01",
                                gender: "male",
                            }} />
                        </div>
                        <p className='text-sm text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        <div className='flex items-center justify-between gap-2 flex-wrap text-xs font-medium'>
                            <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
                                <Image src='/date.png' alt='' width={14} height={14} />
                                <span>January, 2025</span>
                            </div>
                            <div className='w-full md:w-1/3 lg:w-full  flex items-center gap-2'>
                                <Image src='/mail.png' alt='' width={14} height={14} />
                                <span>user@gmail.com</span>
                            </div>
                            <div className='w-full md:w-1/3 lg:w-full  flex items-center gap-2'>
                                <Image src='/phone.png' alt='' width={14} height={14} />
                                <span>+40 712 345 678</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex gap-4 justify-between flex-wrap">
                    <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
                        <Image src='/singleAttendance.png' alt='' width={24} height={24} className='w-6 h-6' />
                        <div className=''>
                            <h1 className='text-xl font-semibold'>75%</h1>
                            <span className='text-sm text-gray-400'>Attendance</span>
                        </div>
                    </div>
                    <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
                        <Image src='/singleBranch.png' alt='' width={24} height={24} className='w-6 h-6' />
                        <div className=''>
                            <h1 className='text-xl font-semibold'>6th</h1>
                            <span className='text-sm text-gray-400'>Grade</span>
                        </div>
                    </div>
                    <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
                        <Image src='/singleLesson.png' alt='' width={24} height={24} className='w-6 h-6' />
                        <div className=''>
                            <h1 className='text-xl font-semibold'>18</h1>
                            <span className='text-sm text-gray-400'>Lessons</span>
                        </div>
                    </div>
                    <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
                        <Image src='/singleClass.png' alt='' width={24} height={24} className='w-6 h-6' />
                        <div className=''>
                            <h1 className='text-xl font-semibold'>6A</h1>
                            <span className='text-sm text-gray-400'>Class</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
                <h1>Student&apos;s Schedule</h1>
                <BigCalendar />
            </div>
        </div>

        <div className="w-full xl:w-1/3 flex flex-col gap-4">
            <div className='bg-white p-4 rounded-md'>
                <h1 className='text-xl font-semibold'>Shortcuts</h1>
                <div className='mt-4 flex gap-4 flex-wrap text-xs text-gray-500'>
                    <Link className='p-3 rounded-md bg-skyLight' href="/">Student&apos;s Lessons</Link>
                    <Link className='p-3 rounded-md bg-orangeLight' href="/">Student&apos;s Teachers</Link>
                    <Link className='p-3 rounded-md bg-yellowLight' href="/">Student&apos;s Results</Link>
                    <Link className='p-3 rounded-md bg-green-300' href="/">Student&apos;s Exams</Link>
                    <Link className='p-3 rounded-md bg-purple-200' href="/">Student&apos;s Assignments</Link>
                </div>
            </div>
            <Performance />
            <Announcements />
        </div>
    </div>
  )
}

export default SingleStudentPage