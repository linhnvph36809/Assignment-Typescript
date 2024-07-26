const Time = (props: {time:string,place:string}) => {
    return (
        <h3
        className="flex gap-2 lg:text-sm font-semibold text-[#484848] items-center [@media(max-width:431px)]:text-[12px]">{props.time}
        <p className="lg:text-xs font-normal text-[#707070] [@media(max-width:431px)]:text-[10px]">• {props.place}</p>
      </h3>
    )
}

export default Time ; 