const Navbar = (props:{title:string,href:string}) => {
    return (
        <li><a href={props.href} className="text-white text-sm font-medium block">{props.title}</a></li>
    )
}

export default Navbar ;