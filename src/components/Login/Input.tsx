const Input = ({title,type,register,children}:{title:string,type:string,register:any,children:any}) => {
    return (
        <div className="my-5">
            <label htmlFor="" className="block text-base pb-2 text-[#141414]">{title}</label>
            <input type={type} {...register} className="w-full h-[45px] rounded-md border-[1px] border-solid border-[#ccc] pl-4" />
            {children?.message && <p className="my-2 text-red-500 text-xs" >{children?.message}</p>}
        </div>
    )
}

export default Input