const Pod = (props: {title:string,img:string}) => {
    return (
        <li className="flex items-center text-white gap-2 [@media(max-width:431px)]:text-[8px]">
        {props.img}
        {props.title}
        </li>
    )
}

export default Pod 