
const classes = "md:w-[277px] h-[50px] rounded-lg border-[1px] border-solid border-black pl-5" ; 
const Input = ({title,type}:{title:string,type:string}) => {
    return (
        <div className="my-3">
        <label htmlFor="" className="block pb-2 text-xl font-normal">{title}</label>
        {type === "text" ? <input type="text" className={classes}/>
        : <select name="" id="" className={classes}>
            <option value="">12312</option>
        </select>}
        </div>
    )
}

export default Input ; 