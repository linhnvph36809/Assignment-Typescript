const Button = ({title}:{title:string}) => {
    return (
        <button className="md:w-[250px] bg-black text-white py-3 rounded-xl my-5 text-lg">{title}</button>
    )
}

export default Button  ; 