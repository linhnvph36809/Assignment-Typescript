import { memo } from 'react';
import { ticketTypes } from './datas';
import { Link, useLocation } from 'react-router-dom';

const Tab = memo(({ type }: { type: string }) => {
    const location = useLocation();
    let path;
    if(location.pathname == '/' || location.pathname == "/plane"){
        path = ""
    }else{
        path = "/detail"
    }

    return (
        <ul className="flex justify-center items-center border-b-2 border-solid border-[#E0E0E0]">
            {ticketTypes.map((ticketType, index) => (
                <li key={index}>
                    <Link
                        to={`${path+ticketType.path }`}
                        className={`md:w-3/12 md:text-base
                        md:text-center md:py-1 sm:flex
                        md:w-auto
                        md:py-3 px-7 md:gap-3 sm: gap-1
                        relative text-black
                        font-normal
                        md:text-base
                        items-center
                        [@media(max-width:431px)]:text-[10px]
                        [@media(max-width:431px)]:p-0
                        [@media(max-width:431px)]:w-3/12
                        [@media(max-width:431px)]:text-center
                        cursor-pointer ${
                            ticketType.type == type ? 'search__active' : ''
                        }`}
                    >
                        {ticketType.image}
                        {ticketType.title}
                        {ticketType.deal && (
                            <p className="absolute top-0 md:right-0 px-1 bg-red-500 rounded-2xl md:text-xs text-white font-semibold [@media(max-width:431px)]:text-[6px] [@media(max-width:431px)]:right-[16px]">
                                {ticketType.deal}
                            </p>
                        )}
                    </Link>
                </li>
            ))}
        </ul>
    );
});

export default Tab;
