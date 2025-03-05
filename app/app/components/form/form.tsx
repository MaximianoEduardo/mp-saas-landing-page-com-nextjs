"use client"

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { FormField, FormItem, FormControl, FormDescription, FormMessage, Form } from "@/app/components/ui/form";
import { useForm } from "react-hook-form";


const formSchema = z.object({
    email: z.string().email({ message: 'Adicionar Email valido' }),
});


export default function EmailFormComponent() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=" flex flex-col w-full">
                <div className=" flex gap-3">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="m-0">
                                
                                <FormControl>
                                    <Input className="lg:min-w-[279px]" placeholder="Coloque seu email" {...field} />
                                </FormControl>
                                
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    
                    <Button type="submit">Assine Agora</Button>
                </div>
                <FormDescription className="pt-1.5">
                    Comece sua assinatura agora mesmo. Cancele quando quiser. 
                </FormDescription>
            </form>
        </Form>
    )
}