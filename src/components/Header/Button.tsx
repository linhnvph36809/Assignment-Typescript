const Button = (props:{title:string}) =>{
    return (
        <>
        <button className="bg-white px-4 py-2 rounded-md text-sm font-medium [@media(max-width:431px)]:hidden">{props.title}</button>
        </>
    )
}

export default Button ;