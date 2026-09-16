`use client`
import { SubmitHandler, useForm } from "react-hook-form"
import { Button } from "../ui/button"
import { Field } from "@/components/ui/field"
import { UserRound, Mail, Lock, Phone, Eye, EyeClosed } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { api } from "@/lib/api"
import { toast } from "@/components/ui/toast"
import { useMutation } from "@tanstack/react-query"

import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group"
type SignupProps = {
    onSuccessCallback: (isOpen: boolean) => void
}

export default function Signup({ onSuccessCallback }: SignupProps) {
    const [showPassword, setShowPassword] = useState(false)
    type Inputs = {
        username: string,
        email: string,
        phone: string,
        password: string
    }
    const { handleSubmit, register } = useForm<Inputs>({
        defaultValues: {
            username: "",
            email: "",
            phone: "",
            password: ""
        }
    })

    const mutation = useMutation({
        mutationFn: (data: Inputs) =>
            api.post("/auth/v1/create-user", data),

        onSuccess: (response) => {
            onSuccessCallback(false)

            console.log("User created:", response.data);
            toast.add({
                type: "success",
                description: "Account created succesfully.",
            })
        },

        onError: (error) => {
            console.error("Failed:", error);
        },
    });

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        mutation.mutate(data);
    };


    return (

        <form onSubmit={handleSubmit(onSubmit)} className="flex gap-3 flex-col">
            <Field>
                <InputGroup className="input-group-focus h-10">

                    <InputGroupInput
                        type="text"
                        placeholder="Enter Username"
                        {...register("username")}
                    />
                    <InputGroupAddon
                        align="inline-start"
                        className="border-0! bg-transparent! mr-1 "
                    >
                        <UserRound className="text-primary"/>
                    </InputGroupAddon>
                </InputGroup>
            </Field>

            <Field>
                <InputGroup className="input-group-focus h-10 ">

                    <InputGroupInput
                        type="email"
                        placeholder="Enter E-mail "
                        {...register("email")}
                    />
                    <InputGroupAddon
                        align="inline-start"
                        className="border-0! bg-transparent! mr-1"
                    >
                        <Mail className="text-primary"/>
                    </InputGroupAddon>
                </InputGroup>
            </Field>

            <Field>
                <InputGroup className="input-group-focus h-10">

                    <InputGroupInput

                        placeholder="Enter Phone"
                        {...register("phone")}
                    />
                    <InputGroupAddon
                        align="inline-start"
                        className="border-0! bg-transparent! mr-1"
                    >
                        <Phone className="text-primary"/>
                    </InputGroupAddon>
                </InputGroup>
            </Field>



            <Field>
                <InputGroup className="input-group-focus h-10">

                    <InputGroupInput
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter Password"
                        {...register("password")}
                    />
                    <InputGroupAddon
                        align="inline-start"
                        className="border-0! bg-transparent! mr-1"
                    >
                        <Lock className="text-primary" />           
                                 </InputGroupAddon>
                    <InputGroupAddon
                        align="inline-end"
                        className="border-0! bg-transparent! mr-1 cursor-pointer"
                        onClick={() => { setShowPassword(!showPassword) }}
                    >
                        {showPassword ? <Eye /> : <EyeClosed />}
                    </InputGroupAddon>
                </InputGroup>
            </Field>

            <Button type="submit" className="rounded-full py-5 cursor-pointer">
                Sign Up
            </Button>
            <Field>
                <Field orientation="horizontal">
                    <Checkbox id="terms-checkbox" name="terms-checkbox" />
                    <Label htmlFor="terms-checkbox">Accept terms and conditions</Label>
                </Field>
            </Field>
        </form>
    )
}