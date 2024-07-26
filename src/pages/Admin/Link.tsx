const Link = (props:{title:string}) =>{
    return (
        <>
        <button className="px-2 py-2 rounded-md text-xl font-medium [@media(max-width:431px)]:hidden">{props.title}</button>
        </>
    )
}

export default Link ;