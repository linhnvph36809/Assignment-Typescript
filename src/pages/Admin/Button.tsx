import { Link } from "react-router-dom";

const Button = ({ title }: { title: string }) => {
    return (
        <Link to="/admin" className="block text-center md:w-[200px] bg-black text-white py-3 rounded-xl my-5 text-base">{title}</Link>
    )
}

export default Button; 