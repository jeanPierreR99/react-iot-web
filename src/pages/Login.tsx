import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import useStoreLogin from "@/store/useStoreLogin";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const FormSchema = z.object({
    username: z.string().nonempty("Campo requerido."),
    password: z.string().nonempty("Campo requerido."),
});

const Login = () => {
    const { setIsActive } = useStoreLogin();
    const [visible, setVisible] = useState(false);
    const [error, setError] = useState("");



    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    });

    function onSubmit(user: z.infer<typeof FormSchema>) {
        setVisible(true)
        setError("")
        setTimeout(() => {
            console.log(user)
            setVisible(false)
            // setError("Credenciales incorrectas")
            setIsActive()
        }, 3000);
    }

    return (
        <div className="md:grid grid-cols-3 h-screen">
            <div className="hidden md:block left col-span-2">
                <img className="w-auto h-full m-auto" src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg" alt="" />
            </div>
            <div className="right h-screen md:h-auto px-10 flex bg-gray-100 relative col-span-1 flex-col justify-center">
                {visible && <div className="absolute left-0 w-full h-full bg-gray-100/70 z-10 flex justify-center items-center"><Loader2 className="animate-spin text-blue-500" /></div>}
                <h2 className="text-center text-3xl font-bold text-blue-600">Inicio de Sesión</h2>
                <FormProvider {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Usuario" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Contraseña</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="Contraseña" {...field} />
                                    </FormControl>
                                    {error && <span className="text-red-500 text-sm">{error}</span>}
                                </FormItem>
                            )}
                        />
                        <Button className="w-full bg-blue-500 hover:bg-blue-400" type="submit">Enviar</Button>
                    </form>
                </FormProvider>
            </div>
        </div>
    );
};

export default Login;
