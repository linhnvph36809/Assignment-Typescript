import { Link } from "react-router-dom";
const Navbar = (props: { title: string, href: string }) => {
    return (
        <li><Link to={props.href} className="text-white text-sm font-medium block">{props.title}</Link></li>
    )
}

export default Navbar;