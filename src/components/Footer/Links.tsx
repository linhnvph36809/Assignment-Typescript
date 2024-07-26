import Heading from "./Heading.tsx" ; 
const Links = (props: {datas:{title:string,links:string[]},row?:string}) => {
    return (
        <>
        <Heading title={props.datas.title} /> 
        <ul className={`${props.row && "flex flex-wrap"}`}>
            {props.datas.links.map((link,i) => <li key={i}><a href="#" className="font-semibold lg:text-[12px] [@media(max-width:431px)]:text-[8px] lg:text-[#141414] md:text-[10px] underline block py-2">{link}</a></li>)}
        </ul>
        </>
    )
}

export default Links