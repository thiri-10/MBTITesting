"use client";
import { Button, FormControl, FormGroup, FormLabel, Input } from "@mui/material";
import { useRouter } from "next/navigation";

export default function page() {
    const router = useRouter();



const UseInfo = {
    name: 'user',
    email: 'user@gmail.com',
    password: '1234'
}

const initialValue = { 
    name: '',
    email: '',
    password: ''
};



const loginHandler = ()=>{
    router.push('/');
    

}


    return (
        <div className="flex item-center justify-center p-4 m-6">


            <FormControl className="w-[260px] flex flex-col items-center bg-purple-300 rounded-md shadow-md md:mt-20">
                <h1 className="font-semibold text-xl py-4">Register</h1>
                <FormControl>
                    <FormGroup className="mb-4">
                        <FormLabel>Name:</FormLabel>
                        <Input type="text"></Input>
                    </FormGroup>
                    <FormGroup className="mb-4">

                        <FormLabel>Email:</FormLabel>
                        <Input type="text"></Input>
                    </FormGroup>
                    <FormGroup className="mb-8">

                        <FormLabel>Password</FormLabel>
                        <Input type="password"></Input>
                    </FormGroup>

                    <FormGroup>
                        <Button className="text-gray-400 m-4  bg-purple-700 hover:text-white rounded-lg" 
                        onClick={loginHandler}>submit</Button>

                    </FormGroup>


                </FormControl>



           </FormControl>




        </div>
    )
}