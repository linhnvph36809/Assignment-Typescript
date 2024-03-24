import Tab from "./Tab.tsx" ; 
import Place from "./Place.tsx" ; 

import search1 from '../../assets/images/search-1.jpg';
import search2 from '../../assets/images/search-2.jpg';
import search3 from '../../assets/images/search-3.jpg';
import tab1 from '../../assets/images/tab-1.jpg';
import tab2 from '../../assets/images/tab-2.jpg';
import tab3 from '../../assets/images/tab-3.jpg';
import tab4 from '../../assets/images/tab-4.jpg';

const Search = (props:{check:string}) =>{
    return (
        <div className={`
        mx-auto
        bg-white p-4 rounded-xl 
        search 
        xl:w-[1016px] 
        ${props.check === "banner" ? "lg:w-[900px] md:w-[700px]" : "lg:w-full md:w-full"}
        md:p-3
        [@media(max-width:431px)]:w-[380px]
        [@media(max-width:431px)]:p-3
        `}>
            <ul className="flex lg:justify-center border-b-2 border-solid border-[#E0E0E0]">
                <Tab title="Xe khách" img={tab1} active={true} />
                <Tab title="Máy bay" img={tab2} deal="-20K" />
                <Tab title="Tàu hỏa" img={tab3} deal="Mới" />
                {props.check == "banner" && <Tab title="Thuê xe" img={tab4} deal="Mới" />}

            </ul>
            <form action="">
                <div className="lg:flex items-center justify-between pt-4 gap-4">
                    <div className="lg:w-10/12 md:w-full lg:flex  justify-between items-center rounded-lg place">
                        <Place title="Nơi xuất phát" body="Hà Nội" img={search1} />
                        <Place title="Nơi xuất phát" body="Hà Nội" img={search2} />
                        <Place title="Nơi xuất phát" body="Hà Nội" img={search3} />
                        <div className="w-3/12 flex items-center gap-3 py-4 px-6 justify-center md:hidden lg:block [@media(max-width:431px)]:hidden">
                            <div className="flex gap-2 items-center">
                                {props.check == "detail" && <span className="text-sm font-normal text-[#2474E5]">add</span>}
                                <p className="text-base font-medium text-gray-400 text-sky-500">Thêm ngày về</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-2/12 md:w-full md:my-4 [@media(max-width:431px)]:my-2">
                        <button className="w-full lg:rounded-lg md:rounded-md [@media(max-width:431px)]:rounded text-center lg:py-4 lg:text-lg md:text-sm md:py-2 font-medium">Tìm kiếm</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Search ; 