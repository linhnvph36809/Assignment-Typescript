const Button = (props: {position:string,icon:string}) => {
    return (
        <button 
        className={`lg:w-8 lg:h-8 [@media(max-width:431px)]:w-4 [@media(max-width:431px)]:h-4 flex justify-center items-center absolute rounded-full top-20 ${props.position}`}>
            {props.icon}
        </button>
    )
}

export default Button