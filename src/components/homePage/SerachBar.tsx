'use client'
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import {
    Field,
    FieldDescription,
    FieldLabel,
} from "@/components/ui/field"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { MapPin, Briefcase, Calendar, CircleDollarSign, UsersRound, ChevronDown, Search } from "lucide-react"
import { Button } from "../ui/button"
interface SearchBarProps {
    bottomPosition?: string;
}
export default function SearachBar({
    bottomPosition,
}: SearchBarProps) {
    const form = useForm({
        defaultValues: {
            destination: "",
            packageType: "",
            travelMonth: "",
            travellers: "",
            budget: ""
        }
    })
    return (
        <div
            className="w-full flex justify-center items-center h-19 relative z-10"
            style={{
                bottom: `${bottomPosition}rem`,
            }}
        >                <form className="w-[90%] p-2 flex gap-2   h-full justify-between items-center  bg-white    rounded-3xl  shadow-md">
                <div className="flex gap-3 items-center">

                    <MapPin className="text-primary" size={30} />
                    <Controller
                        name="destination"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field className="gap-y-0">
                                <FieldLabel className="text-lg ">Destination</FieldLabel>
                                <Input
                                    {...field}
                                    placeholder="Go Anywhere"
                                    className="text-lg! border-none p-0   shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                                />
                            </Field>
                        )}
                    />
                </div>
                <Separator orientation="vertical" className="mx-4" />
                <div className="flex gap-3 items-center">
                    <Briefcase className="text-primary" size={30} />
                    <Controller
                        name="packageType"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field className="gap-0">
                                <FieldLabel className="text-lg">Package Type</FieldLabel>
                                <Input
                                    {...field}
                                    placeholder="Select package"
                                    className="text-lg!  border-none p-0  shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                                />
                            </Field>
                        )}
                    />
                </div>
                <Separator orientation="vertical" className="mx-4" />
                <div className="flex gap-3 items-center">
                    <Calendar className="text-primary" size={30} />

                    <Controller
                        name="travelMonth"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field className="gap-0">
                                <FieldLabel className="text-lg">Travel Month</FieldLabel>
                                <Input
                                    {...field}
                                    placeholder="Select month"
                                    className="border-none p-0 text-lg!  shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                                />
                            </Field>
                        )}
                    />
                </div>
                <Separator orientation="vertical" className="mx-4" />
                <div className="flex gap-3 items-center">
                    <UsersRound className="text-primary" size={30} />

                    <Controller
                        name="travellers"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field className="gap-0">
                                <FieldLabel className="text-lg">Travellers</FieldLabel>
                                <Input
                                    {...field}
                                    placeholder="2 Adults - 1 Child"
                                    className="border-none p-0 text-lg! shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                                />
                            </Field>
                        )}
                    />
                </div>
                <Separator orientation="vertical" className="mx-4" />
                <div className="flex gap-3 items-center">
                    <CircleDollarSign className="text-primary" size={32} />

                    <Controller
                        name="budget"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field className="gap-0">
                                <FieldLabel className="text-lg">Budget</FieldLabel>
                                <Input
                                    {...field}
                                    placeholder="Budget"
                                    className="border-none p-0 text-lg! shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                                />
                            </Field>
                        )}
                    />
                </div>
                <Separator orientation="vertical" className="mx-4" />
                <Button className="cursor-pointer rounded-full px-5 py-6 text-lg font-semibold">
                    <Search strokeWidth={3} className="h-4.5! w-4.5!" />
                    Search
                </Button>
            </form>





        </div>
    )
}