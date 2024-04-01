const Text = ({title,text}:{title:string,text:string}) => {
    return (    
        <div className="flex gap-2 items-center">
        <h3 className="text-2xl font-bold">{title}</h3>
        <span className="text-2xl font-normal">{text}</span>
        </div>
    )
}

export default Text