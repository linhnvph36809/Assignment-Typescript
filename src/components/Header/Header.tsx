import {Link} from "react-router-dom" ;
import Button from "./Button.tsx" ;
import Navbar from "./Navbar.tsx" ;

const Header = () =>{
    return (
        <header className="flex items-center justify-between bg-red p-4">
            <div>
                <Link to="/">
                <img className="w-36" src="./src/assets/images/logo.svg" alt="" />
                </Link>
            </div>
            <div className="flex items-center gap-16">
                <div className="md:hidden lg:block [@media(max-width:431px)]:hidden">
                <ul className="flex items-center gap-7">
                    <Navbar title="Quản lý đơn hàng" href="/order"/>
                    <Navbar title="Mở bán vé trên Vexere" href="/detail" />
                    <Navbar title="Trở thành đối tác" href="#"/>
                </ul>
                </div>
                <div className="flex gap-4">
                <Button title="Hotline 24/7" />
                <Button title="Đăng nhập" to="/sign-in" />
                <button className="2xl:hidden xl:hidden lg:hidden p-2 bg-[#fff] rounded-md"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                </button>
                </div>

            </div>
        </header>
    )
}

export default Header