const Input = (props:{title:string}) => {
    return (
        <div className="pt-4">
        <label htmlFor="" className="block pb-2 md:text-sm font-medium text-[#484848] [@media(max-width:431px)]:text-xs">{props.title}</label>
        <input type="text" className="w-full h-[42px] rounded-md px-5 border-[1px] border-solid border-[#ccc]"/>
      </div>
    )
}

export default Input ; 