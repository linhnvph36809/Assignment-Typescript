const InputRadio = (props: {title: string}) => {
    return (
        <div className="flex items-center gap-2 lg:text-[14px] font-normal my-3">
        <input type="radio" className="lg:w-[18px] lg:h-[18px]"/>
        <label htmlFor="" className="md:text-[12px] lg:text-[14px]">{props.title}</label>
        </div>
    )
}

export default InputRadio ;