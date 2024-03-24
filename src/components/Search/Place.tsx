const Search = (props: {title:string,body:string,img:string}) =>{
    return (
        <div 
        className={`
        lg:w-3/12 md:w-full flex items-center
        gap-3 lg:py-1 px-6 md:py-1
        md:border-b-2 md:border-solid
        md:border-[#E0E0E0]
        lg:border-none
        `}>
        <img src={props.img} alt="" className="md:w-[24px] [@media(max-width:431px)]:w-[18px]" />
        <div>
            <span className="text-xs font-normal text-gray-400 [@media(max-width:431px)]:text-[8px]">{props.title}</span>
            <p className="lg:text-[15px] md:text-xs font-medium [@media(max-width:431px)]:text-[10px]">{props.body}</p>
        </div>
        </div>
    )
}

export default Search 