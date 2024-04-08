import Place from './Place.tsx'
import Button from './Button.tsx';
import { COLOR } from '../../constants/constants.ts';
import place1 from "../../assets/images/place-1.jpg";
import place2 from "../../assets/images/place-2.jpg";
import place3 from "../../assets/images/place-3.jpg";
import place4 from "../../assets/images/place-4.jpg";
import images from "../../Images.jsx";
import { useEffect,useState } from 'react';
import { getTripsLimit } from '../../api/trips.api.ts';

const IMAGE = [place1,place2,place3,place4]
const Content = () => {
    const [trips, setTrips] = useState([{}]);

    useEffect(() => {
        (async function () {
            const { data } = await getTripsLimit();
            setTrips(data);
        })();

    }, []);
console.log(trips);

    return (
        <div className="lg:w-[980px] md:w-full mx-auto my-10 px-4">
            <h1 className="text-medium text-2xl pb-4 [@media(max-width:431px)]:text-[16px] [@media(max-width:431px)]:ps-2">Tuyến đường phổ biến</h1>
            <div className='flex gap-3 relative' >
                {
                    trips.map((trips,index) =>
                <div className={`md:w-3/12`}>
                    <img className="w-full" src={IMAGE[index]} alt="" />
                    <div className={`${COLOR[index]} px-3 pb-8 pt-3 rounded-b [@media(max-width:431px)]:h-[90px] md:h-[104px]`}>
                        <h3 className="text-lg font-semibold text-white [@media(max-width:431px)]:text-[13px] [@media(max-width:431px)]:leading-5">{trips.fromStation} - {trips.toStation}</h3>
                        <div className="flex items-center gap-2">
                            <p className="text-sm font-normal text-white [@media(max-width:431px)]:text-[10px] [@media(max-width:431px)]:leading-5">Từ : {trips.price}đ</p>
                            {/* {props.sale && <span className="text-xs font-normal text-white line-through [@media(max-width:431px)]:text-[8px]">{props.sale}</span>} */}
                        </div>
                    </div>
                </div>
                )}

                <Button position="right-3 bg-white" icon={images.icon1} />
                <Button position="left-3 color-rgba" icon={images.icon2} />

            </div>
        </div>
    )
}

export default Content