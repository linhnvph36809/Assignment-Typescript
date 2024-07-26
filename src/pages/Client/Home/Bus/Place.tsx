const Place = (props: {title:string,price:string,sale:string,backgound:string,img:string,hidden:boolean}) => {
    return (
        <div className={`md:w-3/12 ${props.hidden && "[@media(max-width:431px)]:hidden"}`}>
        <img className="w-full" src={props.img} alt="" />
        <div className={`${props.backgound} px-3 pb-8 pt-3 rounded-b [@media(max-width:431px)]:h-[90px] md:h-[104px]`}>
            <h3 className="text-lg font-semibold text-white [@media(max-width:431px)]:text-[13px] [@media(max-width:431px)]:leading-5">{props.title}</h3>
            <div className="flex items-center gap-2">
            <p className="text-sm font-normal text-white [@media(max-width:431px)]:text-[10px] [@media(max-width:431px)]:leading-5">{props.price}</p>
            {props.sale && <span className="text-xs font-normal text-white line-through [@media(max-width:431px)]:text-[8px]">{props.sale}</span> }
            </div>
        </div>
    </div>
    )
}

export default Place