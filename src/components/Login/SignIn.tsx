import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import { signIn } from "../../api/login.api";

type loginForm = {
    email: string,
    password: string,
}

const SignIn = () => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<loginForm>()
    const onSubmit: SubmitHandler<loginForm> = async (data) => {
        try {
            const {data: user} = await signIn(data);
            if (user.message) {
                    user.user && user.token && sessionStorage.setItem('user', JSON.stringify({role : user.user.role, token: user.token}))
                    user.user.role === true ? navigate("/admin") : navigate("/")
                    alert(user.message)
            }

        } catch (error) {
            alert("Đăng nhập không thành công !");
        }
    }

    return (
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="w-[480px] mx-auto my-20 bg-[#F2F2F2] rounded-xl px-8 pb-20">
                <h1 className="text-center text-4xl font-semibold py-8 border-b-[1px] border-solid border-[#ccc]">Đăng Nhập</h1>
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
                title="Password" 
                type="password" 
                register={{
                    ...register("password",
                        { required: "Dữ liệu bắt buộc" })
                }}
                >
                    {errors.password}
                </Input>
                <div >
                    <Link to="/sign-up" className="text-end block pb-5 text-base text-[#2474E5] underline">Đăng Ký</Link>
                </div>
                <button className="w-full text-white rounded-md py-3 bg-[#2474E5]">Đăng Nhập</button>
            </div>
        </form>
    )
}

export default SignIn; 