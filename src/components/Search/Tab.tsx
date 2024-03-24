const Tab = (props:{title:string,img:string,deal:string,active:boolean}) => {
    return (
        <li 
        className={`md:w-3/12 md:text-xs md:block
        md:text-center md:py-1 lg:flex
        lg:w-auto lg:items-center
        lg:py-3 px-7 lg:gap-3
        relative text-black
        font-normal
        lg:text-base
        ${props.active && "search__active"} 
        [@media(max-width:431px)]:text-[10px]
        [@media(max-width:431px)]:p-0
        [@media(max-width:431px)]:w-3/12
        [@media(max-width:431px)]:text-center

        `}>
        <img src={props.img} alt="" className="mx-auto lg:m-0 lg:w-[24px] [@media(max-width:431px)]:w-[20px]"/>
        {props.title}
        {props.deal && <p className="absolute top-0 md:right-0 px-1 bg-red-500 rounded-2xl md:text-xs text-white font-semibold [@media(max-width:431px)]:text-[6px] [@media(max-width:431px)]:right-[16px]">{props.deal}</p> }
    </li>   
    )
}

export default Tab  