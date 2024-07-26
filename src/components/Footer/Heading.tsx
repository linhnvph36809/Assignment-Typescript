const Heading = (props: { title: string }) => {
    return (
        <h1 className="lg:text-2xl md:text-[16px] [@media(max-width:431px)]:text-[14px] font-semibold pb-3">{props.title}</h1>
    )
}

export default Heading 