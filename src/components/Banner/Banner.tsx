import Search from "../Search/Search.tsx";
import Pod from "./Pod.tsx";
import images from "../../Images.jsx";

const Banner = () => {
    return (
        <div className="relative banner">
            <img src="./src/assets/images/banner.jpg" alt="" />
            <div className="absolute top-2/4 left-2/4 -translate-x-1/2  -translate-y-1/2">
                <h1 className="text-white py-5 text-xl tracking-wider text-center [@media(max-width:431px)]:text-xs">Vexere - Cam kết hoàn 150% nếu nhà xe không giữ chỗ</h1>
                <Search check="banner"/> 
            </div>
            <div className="absolute bottom-0 left-0 right-0 pod">
                <ul className="flex lg:justify-center lg:gap-16 lg:py-5 md:py-2 md:justify-around [@media(max-width:431px)]:justify-around">
                    <Pod title="Chắc chắn có chỗ" img={images.pob1} />
                    <Pod title="Hỗ trợ 24/7" img={images.pob2} />
                    <Pod title="Nhiều ưu đãi" img={images.pob2} />
                    <Pod title="Thanh toán đa dạng" img={images.pob4} />
                </ul>
            </div>
        </div>
    )
}

export default Banner