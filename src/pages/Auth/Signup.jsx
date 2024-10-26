import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { register } from "@/Redux/Auth/Action";
//import { register } from "@/Redux/Auth/Action";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
//import { useDispatch } from "react-redux";


const Signup = () => {
    const dispatch=useDispatch();
    const form=useForm({
        defaultValues:{
            email:"",
            password:"",
            fullName:"",
        },
    });
    const onSubmit=(data)=>{
        dispatch(register(data));
        console.log("Create Project data", data);
    };
  return (
    <div className="space-y-5">
        <h1>Register</h1>
        <Form {...form}>
            <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField control={form.control} name="fullName" render={({field})=><FormItem>
                    <FormControl>
                        <Input {...field}
                        type="text"
                        className="border w-full border-gray-700 py-5 px-5"
                        placeholder="Enter Full name."
                        />
                    </FormControl>
                    <FormMessage/>
                </FormItem>}/>
                <FormField control={form.control} name="email" render={({field})=><FormItem>
                    <FormControl>
                        <Input {...field}
                        type="email"
                        className="border w-full border-gray-700 py-5 px-5"
                        placeholder="Enter email."
                        />
                    </FormControl>
                    <FormMessage/>
                </FormItem>}/>
                <FormField control={form.control} name="password" render={({field})=><FormItem>
                    <FormControl>
                        <Input {...field}
                        type="password"
                        className="border w-full border-gray-700 py-5 px-5"
                        placeholder="Enter password."
                        />
                    </FormControl>
                    <FormMessage/>
                </FormItem>}/>
            
                 <Button type="submit" className="w-full my-5">
                            Register
                            </Button>
            </form>
            </Form>

    </div>
  )
}

export default Signup