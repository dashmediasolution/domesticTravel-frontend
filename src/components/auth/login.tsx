import { SubmitHandler, Controller, useForm } from "react-hook-form"
import { Button } from "../ui/button"
import { Field, } from "@/components/ui/field"
import { Mail, Lock } from "lucide-react"
import axios from "axios"

import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
    InputGroupText,
} from "@/components/ui/input-group"
export default function Login() {
    type Inputs = {

        email: string,
        password: string
    }
    const { handleSubmit, register } = useForm<Inputs>({
        defaultValues: {
            email: "",
            password: ""
        }
    })
    const onSubmit = async (data: Inputs) => {
        try {
            const response = await axios.post(
                "http://localhost:8000/auth/v1/login",
                data,
                {
                    withCredentials: true,
                }
            );

            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    return (

        <form onSubmit={handleSubmit(onSubmit)} className="flex gap-3 flex-col">
            <Field>
                <InputGroup className="input-group-focus h-10 ">

                    <InputGroupInput

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
                        placeholder="Enter Password"
                        {...register("password")}
                    />
                    <InputGroupAddon
                        align="inline-start"
                        className="border-0! bg-transparent! mr-1"
                    >
                        <Lock className="text-primary"/>
                    </InputGroupAddon>
                </InputGroup>
            </Field>
            <Button
                type="button"
                variant="link"
                className="m-0 h-auto self-end p-0 text-xs font-normal"
            >
                Forgot Password ?
            </Button>
            <Button type="submit" className="rounded-full py-5 cursor-pointer">
                Log In
            </Button>

        </form>
    )
}