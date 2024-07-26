import Search from "../Searchs/index.tsx";
import Pod from "./Pod.tsx";
import { aboutCompanys } from "./datas.ts";

const Banner = ({title,type}: {title:string,type:string}) => {
    return (
        <div className="relative banner">
            <img src="https://static.vexere.com/production/banners/910/leaderboard.jpg" alt="" className="w-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-white py-5 text-[24px] font-semibold tracking-wider text-center [@media(max-width:431px)]:text-xs">
                    {title}
                </h1>
                <Search check="banner" type={type} />
            </div>
            <div className="absolute bottom-0 left-0 right-0 pod">
                <ul className="flex lg:justify-center lg:gap-16 lg:py-5 md:py-2 md:justify-around [@media(max-width:431px)]:justify-around">
                    {
                        aboutCompanys.map((aboutCompany, index) =>
                            <Pod key={index}
                                title={aboutCompany.title}
                                img={aboutCompany.imaeUrl}
                            />
                        )
                    }
                </ul>
            </div>
        </div>
    );
};

export default Banner;
