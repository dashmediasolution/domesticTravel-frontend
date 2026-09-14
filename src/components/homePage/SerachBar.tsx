"use client"

import { useForm, Controller } from "react-hook-form"
import { useState } from "react"
import {
    MapPin,
    Briefcase,
    Calendar,
    CircleDollarSign,
    UsersRound,
    Search,
    X,
} from "lucide-react"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Button } from "../ui/button"

interface SearchBarProps {
    bottomPosition?: string
}

export default function SearachBar({
    bottomPosition,
}: SearchBarProps) {

    const [open, setOpen] = useState(false)

    const form = useForm({
        defaultValues: {
            destination: "",
            packageType: "",
            travelMonth: "",
            travellers: "",
            budget: "",
        },
    })

    const onSubmit = (data: any) => {
        console.log(data)
        setOpen(false)
    }

    return (
        <>
            <div
                className="
                    relative
                    z-20
                    flex
                    w-full
                    justify-center
                    px-3
                    sm:px-5
                    lg:px-8
                "
                style={{
                    bottom: `${bottomPosition}rem`,
                }}
            >

                {/* ================= MOBILE SEARCH ================= */}

                <button
                    type="button"
                    onClick={() => setOpen(true)}
                    className="
                        flex
                        h-14
                        w-full
                        items-center
                        gap-3
                        rounded-full
                        bg-white
                        px-5
                        text-left
                        shadow-[0_8px_30px_rgba(0,0,0,0.15)]
                        md:hidden
                    "
                >
                    <Search
                        className="h-5 w-5 shrink-0 text-primary"
                    />

                    <span className="text-[15px] text-gray-500">
                        Where do you want to go?
                    </span>
                </button>


                {/* ================= DESKTOP SEARCH ================= */}

               <form
    onSubmit={form.handleSubmit(onSubmit)}
    className="
        hidden
        h-16
        w-full
        max-w-[1400px]
        items-center
        justify-between
        gap-1
        rounded-3xl
        bg-white
        p-1.5
        shadow-md
        md:flex
        md:gap-1.5
        lg:h-19
        lg:gap-2
        lg:p-2
    "
>
    {/* Destination */}
    <div className="flex min-w-0 flex-1 items-center gap-2 md:gap-2 lg:gap-3">
        <MapPin
            className="shrink-0 text-primary md:h-5 md:w-5 lg:h-[30px] lg:w-[30px]"
        />

        <Controller
            name="destination"
            control={form.control}
            render={({ field }) => (
                <Field className="gap-y-0">
                    <FieldLabel className="text-sm md:text-xs lg:text-lg">
                        Destination
                    </FieldLabel>

                    <Input
                        {...field}
                        placeholder="Go Anywhere"
                        className="
                            h-auto
                            border-none
                            p-0
                            text-sm!
                            shadow-none
                            focus-visible:ring-0
                            focus-visible:ring-offset-0
                            lg:text-lg!
                        "
                    />
                </Field>
            )}
        />
    </div>

    <Separator orientation="vertical" />

    {/* Package */}
    <div className="flex min-w-0 flex-1 items-center gap-2 md:gap-2 lg:gap-3">
        <Briefcase
            className="shrink-0 text-primary md:h-5 md:w-5 lg:h-[30px] lg:w-[30px]"
        />

        <Controller
            name="packageType"
            control={form.control}
            render={({ field }) => (
                <Field className="gap-0">
                    <FieldLabel className="text-sm md:text-xs lg:text-lg">
                        Package Type
                    </FieldLabel>

                    <Input
                        {...field}
                        placeholder="Select package"
                        className="
                            h-auto
                            border-none
                            p-0
                            text-sm!
                            shadow-none
                            focus-visible:ring-0
                            focus-visible:ring-offset-0
                            lg:text-lg!
                        "
                    />
                </Field>
            )}
        />
    </div>

    <Separator orientation="vertical" />

    {/* Month */}
    <div className="flex min-w-0 flex-1 items-center gap-2 md:gap-2 lg:gap-3">
        <Calendar
            className="shrink-0 text-primary md:h-5 md:w-5 lg:h-[30px] lg:w-[30px]"
        />

        <Controller
            name="travelMonth"
            control={form.control}
            render={({ field }) => (
                <Field className="gap-0">
                    <FieldLabel className="text-sm md:text-xs lg:text-lg">
                        Travel Month
                    </FieldLabel>

                    <Input
                        {...field}
                        placeholder="Select month"
                        className="
                            h-auto
                            border-none
                            p-0
                            text-sm!
                            shadow-none
                            focus-visible:ring-0
                            focus-visible:ring-offset-0
                            lg:text-lg!
                        "
                    />
                </Field>
            )}
        />
    </div>

    <Separator orientation="vertical" />

    {/* Travellers */}
    <div className="flex min-w-0 flex-1 items-center gap-2 md:gap-2 lg:gap-3">
        <UsersRound
            className="shrink-0 text-primary md:h-5 md:w-5 lg:h-[30px] lg:w-[30px]"
        />

        <Controller
            name="travellers"
            control={form.control}
            render={({ field }) => (
                <Field className="gap-0">
                    <FieldLabel className="text-sm md:text-xs lg:text-lg">
                        Travellers
                    </FieldLabel>

                    <Input
                        {...field}
                        placeholder="2 Adults - 1 Child"
                        className="
                            h-auto
                            border-none
                            p-0
                            text-sm!
                            shadow-none
                            focus-visible:ring-0
                            focus-visible:ring-offset-0
                            lg:text-lg!
                        "
                    />
                </Field>
            )}
        />
    </div>

    <Separator orientation="vertical" />

    {/* Budget */}
    <div className="flex min-w-0 flex-1 items-center gap-2 md:gap-2 lg:gap-3">
        <CircleDollarSign
            className="shrink-0 text-primary md:h-5 md:w-5 lg:h-8 lg:w-8"
        />

        <Controller
            name="budget"
            control={form.control}
            render={({ field }) => (
                <Field className="gap-0">
                    <FieldLabel className="text-sm md:text-xs lg:text-lg">
                        Budget
                    </FieldLabel>

                    <Input
                        {...field}
                        placeholder="Budget"
                        className="
                            h-auto
                            border-none
                            p-0
                            text-sm!
                            shadow-none
                            focus-visible:ring-0
                            focus-visible:ring-offset-0
                            lg:text-lg!
                        "
                    />
                </Field>
            )}
        />
    </div>

    <Separator orientation="vertical" />

    <Button
        type="submit"
        className="
            h-10
            shrink-0
            cursor-pointer
            rounded-full
            px-3
            text-sm
            font-semibold

            md:h-10
            md:px-3
            md:text-xs

            lg:h-13
            lg:px-5
            lg:text-lg
        "
    >
        <Search
            strokeWidth={3}
            className="
                h-4!
                w-4!
                md:h-3.5!
                md:w-3.5!
                lg:h-4.5!
                lg:w-4.5!
            "
        />
        Search
    </Button>
</form>
            </div>


            {/* ================= MOBILE MODAL ================= */}

            <Dialog open={open} onOpenChange={setOpen}>

                <DialogContent
                    className="
                        h-screen
                        w-screen
                        overflow-y-auto
                        rounded-[28px]
                        p-5
                        sm:max-w-md
                        lg:hidden
                    "
                >

                    <DialogHeader>
                        <DialogTitle className="text-xl font-semibold">
                            Plan your trip
                        </DialogTitle>
                    </DialogHeader>

                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="mt-2 space-y-2"
                    >

                        {/* Destination */}
                        <div className="flex items-center gap-3 rounded-2xl border border-gray-100 p-3">
                            <MapPin
                                className="shrink-0 text-primary"
                                size={23}
                            />

                            <Controller
                                name="destination"
                                control={form.control}
                                render={({ field }) => (
                                    <Field className="w-full gap-0">
                                        <FieldLabel className="text-sm">
                                            Destination
                                        </FieldLabel>

                                        <Input
                                            {...field}
                                            placeholder="Go Anywhere"
                                            className="
                                                border-none
                                                p-0
                                                text-base!
                                                shadow-none
                                                focus-visible:ring-0
                                            "
                                        />
                                    </Field>
                                )}
                            />
                        </div>


                        {/* Package */}
                        <div className="flex items-center gap-3 rounded-2xl border border-gray-100 p-3">
                            <Briefcase
                                className="shrink-0 text-primary"
                                size={23}
                            />

                            <Controller
                                name="packageType"
                                control={form.control}
                                render={({ field }) => (
                                    <Field className="w-full gap-0">
                                        <FieldLabel className="text-sm">
                                            Package Type
                                        </FieldLabel>

                                        <Input
                                            {...field}
                                            placeholder="Select package"
                                            className="
                                                border-none
                                                p-0
                                                text-base!
                                                shadow-none
                                                focus-visible:ring-0
                                            "
                                        />
                                    </Field>
                                )}
                            />
                        </div>


                        {/* Travel Month */}
                        <div className="flex items-center gap-3 rounded-2xl border border-gray-100 p-3">
                            <Calendar
                                className="shrink-0 text-primary"
                                size={23}
                            />

                            <Controller
                                name="travelMonth"
                                control={form.control}
                                render={({ field }) => (
                                    <Field className="w-full gap-0">
                                        <FieldLabel className="text-sm">
                                            Travel Month
                                        </FieldLabel>

                                        <Input
                                            {...field}
                                            placeholder="Select month"
                                            className="
                                                border-none
                                                p-0
                                                text-base!
                                                shadow-none
                                                focus-visible:ring-0
                                            "
                                        />
                                    </Field>
                                )}
                            />
                        </div>


                        {/* Travellers */}
                        <div className="flex items-center gap-3 rounded-2xl border border-gray-100 p-3">
                            <UsersRound
                                className="shrink-0 text-primary"
                                size={23}
                            />

                            <Controller
                                name="travellers"
                                control={form.control}
                                render={({ field }) => (
                                    <Field className="w-full gap-0">
                                        <FieldLabel className="text-sm">
                                            Travellers
                                        </FieldLabel>

                                        <Input
                                            {...field}
                                            placeholder="2 Adults - 1 Child"
                                            className="
                                                border-none
                                                p-0
                                                text-base!
                                                shadow-none
                                                focus-visible:ring-0
                                            "
                                        />
                                    </Field>
                                )}
                            />
                        </div>


                        {/* Budget */}
                        <div className="flex items-center gap-3 rounded-2xl border border-gray-100 p-3">
                            <CircleDollarSign
                                className="shrink-0 text-primary"
                                size={24}
                            />

                            <Controller
                                name="budget"
                                control={form.control}
                                render={({ field }) => (
                                    <Field className="w-full gap-0">
                                        <FieldLabel className="text-sm">
                                            Budget
                                        </FieldLabel>

                                        <Input
                                            {...field}
                                            placeholder="Budget"
                                            className="
                                                border-none
                                                p-0
                                                text-base!
                                                shadow-none
                                                focus-visible:ring-0
                                            "
                                        />
                                    </Field>
                                )}
                            />
                        </div>


                        {/* Search */}
                        <Button
                            type="submit"
                            className="
                                mt-3
                                h-13
                                w-full
                                rounded-full
                                text-base
                                font-semibold
                            "
                        >
                            <Search
                                strokeWidth={3}
                                className="h-5 w-5"
                            />
                            Search
                        </Button>

                    </form>

                </DialogContent>

            </Dialog>
        </>
    )
}