import { Link } from "react-router-dom";
import Navbar from "./Navbar.tsx";

const Header = () => {
    return (
        <header className="flex items-center justify-between bg-red p-4">
            <div>
                <Link to="/">
                    <img className="w-36" src="https://storage.googleapis.com/fe-production/svgIcon/icon_vxr_full_2.svg" alt="" />
                </Link>
            </div>
            <div className="flex items-center gap-16">
                <div className="md:hidden lg:block [@media(max-width:431px)]:hidden">
                    <ul className="flex items-center gap-7">
                        <Navbar title="Quản lý đơn hàng" href="/order" />
                        <Navbar title="Mở bán vé trên Vexere" href="/" />
                        <Navbar title="Trở thành đối tác" href="#" />
                    </ul>
                </div>
                <div className="flex gap-4">
                    <Link
                        to=""
                        className="bg-white px-4 py-2 rounded-md text-sm font-medium [@media(max-width:431px)]:hidden"
                    >
                        Hotline 24/7
                    </Link>
                    <Link
                        to="/sign-in"
                        className="bg-white px-4 py-2 rounded-md text-sm font-medium [@media(max-width:431px)]:hidden"
                    >
                        Đăng nhập
                    </Link>
                    <button className="2xl:hidden xl:hidden lg:hidden p-2 bg-[#fff] rounded-md">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
