const Navbar = (props:{title:string}) => {
    return (
        <li><a href="#" className="text-white text-sm font-medium block">{props.title}</a></li>
    )
}

export default Navbar