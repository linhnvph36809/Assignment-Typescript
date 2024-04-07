import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Input from "./Input";
import { signUp } from "../../api/login.api";

type registerForm = {
    name: string,
    email: string,
    password: string,
    phone: string,
    repassword: string
}


const SignUp = () => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<registerForm>()
    const onSubmit: SubmitHandler<registerForm> = async ({ name, email, password, phone }) => {
        try {
            // const obj = {
            //     name,
            //     email,
            //     password,
            //     phone
            // }
            // console.log(obj);

            const respone = await signUp({
                name,
                email,
                password,
                phone
            });

            if (respone.data.message) {
                alert(respone.data.message)
            } else {
                alert("Đăng ký thành công !");
                navigate("/sign-in");
            }

        } catch (error) {
            alert("Đăng ký thất bại !");
        }
    }

    return (
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="w-[480px] mx-auto my-20 bg-[#F2F2F2] rounded-xl px-8 pb-20">
                <h1 className="text-center text-4xl font-semibold py-8 border-b-[1px] border-solid border-[#ccc]">Đăng ký</h1>
                <Input
                    title="Tên người dùng"
                    type="text"
                    register={{
                        ...register("name",
                            { required: "Dữ liệu bắt buộc" })
                    }} >
                    {errors.name}
                </Input>

                <Input
                    title="Email"
                    type="text"
                    register={{
                        ...register("email",
                            { required: "Dữ liệu bắt buộc" })
                    }} >
                    {errors.email}
                </Input>

                <Input
                    title="Số điện thoại"
                    type="number"
                    register={{
                        ...register("phone",
                            { required: "Dữ liệu bắt buộc" })
                    }}>
                    {errors.phone}
                </Input>

                <Input title="Password" type="password"
                    register={{
                        ...register("password",
                            { required: "Dữ liệu bắt buộc" })
                    }}
                >
                    {errors.password}

                </Input>

                <Input
                    title="Re-Password"
                    type="password"
                    register={{
                        ...register("repassword",
                            { required: "Dữ liệu bắt buộc" })
                    }}
                >
                    {errors.repassword}
                </Input>

                <div >
                    <Link to="/sign-in" className="text-end block pb-5 text-base text-[#2474E5] underline">Đăng Nhập</Link>
                </div>
                <button className="w-full text-white rounded-md py-3 bg-[#2474E5]">Đăng Ký</button>
            </div>
        </form>
    )
}

export default SignUp; 