const Garage = (props: {datas: string[]}) => {
    return (
        <div className="lg:w-3/12 md:w-3/12">
            {props.datas.map((link,i) => <a href="#" key={i} className="font-semibold lg:text-[12px] [@media(max-width:431px)]:text-[8px] text-[#141414] md:text-[10px] underline block py-2">{link}</a>)}
        </div>
    )
}

export default Garage ; 