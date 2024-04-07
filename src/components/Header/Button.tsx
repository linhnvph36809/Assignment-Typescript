import {Link} from "react-router-dom";
const Button = (props:{title:string,to:string}) =>{
    return (
        <>
        <Link to={props.to} className="bg-white px-4 py-2 rounded-md text-sm font-medium [@media(max-width:431px)]:hidden">{props.title}</Link>
        </>
    )
}

export default Button ;