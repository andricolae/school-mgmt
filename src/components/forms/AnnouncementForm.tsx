"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect } from "react";
import { AnnouncementSchema, announcementSchema } from "@/lib/formValidationSchemas";
import { useFormState } from "react-dom";
import { createAnnouncement, updateAnnouncement } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const AnnouncementForm = ({
    type,
    data,
    setOpen,
    relatedData,
}: {
    type: "create" | "update";
    data?: any;
    setOpen: Dispatch<SetStateAction<boolean>>;
    relatedData?: any;
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AnnouncementSchema>({
        resolver: zodResolver(announcementSchema),
    });

    const [state, formAction] = useFormState(type === "create"
        ? createAnnouncement : updateAnnouncement, { success: false, error: false })

    const onSubmit = handleSubmit(data => {
        const formattedData = {
            ...data,
            date: new Date(data.date)
        };
        formAction(formattedData);
    })

    const router = useRouter();

    useEffect(() => {
        if (state.success) {
            toast(`Announcement has been ${type === "create" ? "created" : "updated"} successfully!`);
            setOpen(false);
            router.refresh();
        }
    }, [state, router, type, setOpen]);

    const { classes } = relatedData || {};

    return (
        <form className="flex flex-col gap-8" onSubmit={onSubmit}>
            <h1 className="text-cl font-semibold">{type === "create" ? "Create a new announcement" : "Update the announcement"}</h1>

            <div className="flex justify-between flex-wrap gap-4">
                <InputField
                    label="Announcement Title"
                    name="title"
                    defaultValue={data?.title}
                    register={register}
                    error={errors?.title}
                />

                <div className="flex flex-col gap-2 w-full md:w-1/2">
                    <label className="text-xs text-gray-400">Description</label>
                    <textarea
                        className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full resize-vertical min-h-[80px]"
                        placeholder="Announcement description..."
                        defaultValue={data?.description}
                        {...register("description")}
                    />
                    {errors.description?.message && (
                        <p className="text-xs text-red-400">
                            {errors.description.message.toString()}
                        </p>
                    )}
                </div>

                <InputField
                    label="Date"
                    name="date"
                    defaultValue={data?.date ? new Date(data.date).toISOString().split('T')[0] : undefined}
                    register={register}
                    error={errors?.date}
                    type="date"
                />

                {data && (
                    <InputField
                        label="Id"
                        name="id"
                        defaultValue={data?.id}
                        register={register}
                        error={errors?.id}
                        hidden
                    />
                )}

                <div className="flex flex-col gap-2 w-full md:w-1/4">
                    <label className="text-xs text-gray-400">Class (Optional)</label>
                    <select
                        className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
                        {...register("classId")}
                        defaultValue={data?.classId || ""}
                    >
                        <option value="">School-wide announcement</option>
                        {classes?.map(
                            (classItem: { id: number; name: string; grade: { level: number } }) => (
                                <option value={classItem.id} key={classItem.id}>
                                    {classItem.name} - Grade {classItem.grade.level}
                                </option>
                            )
                        )}
                    </select>
                    {errors.classId?.message && (
                        <p className="text-xs text-red-400">
                            {errors.classId.message.toString()}
                        </p>
                    )}
                </div>
            </div>

            <div className="text-xs text-gray-500">
                Leave class empty to create a school-wide announcement visible to everyone.
            </div>

            {state.error && <span className="text-red-500">Something went wrong!</span>}
            <button className="bg-blue-500 text-white p-2 rounded-md">
                {type === "create" ? "Create" : "Update"}
            </button>
        </form>
    )
};

export default AnnouncementForm