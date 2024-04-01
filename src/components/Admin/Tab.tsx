const Tab = ({title,active}:{title:string,active:boolean}) => {
    return(
        <li 
        className=
        {`
        ${active ? "bg-[#B8B8B8] border-[1px] border-solid border-black" 
        : "bg-[#DADADA]"} text-start py-3 text-xl font-semibold my-3 pl-8`
        }>
        {title}
        </li>
    )
}

export default Tab ; 