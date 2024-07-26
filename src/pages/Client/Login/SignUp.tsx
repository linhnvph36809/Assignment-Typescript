import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { signUp } from '../../../api/login.api';

type registerForm = {
    name: string;
    email: string;
    password: string;
    phone: string;
    repassword: string;
};

const SignUp = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<registerForm>();
    const onSubmit: SubmitHandler<registerForm> = async ({
        name,
        email,
        password,
        phone,
    }) => {
        try {
            const respone = await signUp({
                name,
                email,
                password,
                phone,
            });

            if (respone.data.message) {
                alert(respone.data.message);
            } else {
                alert('Đăng ký thành công !');
                navigate('/sign-in');
            }
        } catch (error) {
            alert('Đăng ký thất bại !');
        }
    };

    return (
        <>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg">
                    <h1 className="text-center text-2xl font-bold text-[#2474E5] sm:text-3xl">
                        Đăng ký
                    </h1>
                    <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Obcaecati sunt dolores deleniti inventore quaerat
                        mollitia?
                    </p>
                    <form
                        action="#"
                        className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div>
                            <label htmlFor="email" className="sr-only">
                                Tên người dùng
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Nhập tên người dùng"
                                    {...register('name', {
                                        required: 'Dữ liệu bắt buộc',
                                    })}
                                />
                                {errors.name?.message && (
                                    <p className="my-2 text-red-500 text-xs">
                                        {errors.name?.message}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">
                                Số điện thoại
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Nhập số điện thoại"
                                    {...register('phone', {
                                        required: 'Dữ liệu bắt buộc',
                                    })}
                                />
                                {errors.phone?.message && (
                                    <p className="my-2 text-red-500 text-xs">
                                        {errors.phone?.message}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">
                                Email
                            </label>
                            <div className="relative">
                                <input
                                    type="email"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Nhập email"
                                    {...register('email', {
                                        required: 'Dữ liệu bắt buộc',
                                    })}
                                />
                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                        />
                                    </svg>
                                </span>
                                {errors.email?.message && (
                                    <p className="my-2 text-red-500 text-xs">
                                        {errors.email?.message}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Mật khẩu
                            </label>
                            <div className="relative">
                                <input
                                    type="password"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Nhập mật khẩu"
                                    {...register('password', {
                                        required: 'Dữ liệu bắt buộc',
                                    })}
                                />
                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                    </svg>
                                </span>
                                {errors.password?.message && (
                                    <p className="my-2 text-red-500 text-xs">
                                        {errors.password?.message}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Nhập lại mật khẩu
                            </label>
                            <div className="relative">
                                <input
                                    type="password"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Nhập lại mật khẩu"
                                    {...register('repassword', {
                                        required: 'Dữ liệu bắt buộc',
                                    })}
                                />
                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                    </svg>
                                </span>
                                {errors.repassword?.message && (
                                    <p className="my-2 text-red-500 text-xs">
                                        {errors.repassword?.message}
                                    </p>
                                )}
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="block w-full rounded-lg bg-[#2474E5] px-5 py-3 text-sm font-medium text-white"
                        >
                            Đăng ký
                        </button>
                        <p className="text-center text-sm text-gray-500">
                            Bạn đã có tài khoản?
                            <Link className="underline" to="/sign-up">
                                Đăng nhập
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignUp;
