import Place from './Place.tsx'
import Button from './Button.tsx';
import place1 from "../../assets/images/place-1.jpg" ; 
import place2 from "../../assets/images/place-2.jpg" ; 
import place3 from "../../assets/images/place-3.jpg" ; 
import place4 from "../../assets/images/place-4.jpg" ; 
import images from "../../Images.jsx" ; 

const Content = () => {
    return (
        <div className="lg:w-[980px] md:w-full mx-auto my-10 px-4">
            <h1 className="text-medium text-2xl pb-4 [@media(max-width:431px)]:text-[16px] [@media(max-width:431px)]:ps-2">Tuyến đường phổ biến</h1>
            <div className='flex gap-3 relative' >
                <Place 
                title="Sài Gòn - Nha Trang" 
                backgound="color-brown" 
                price="Từ 200.000đ" 
                sale="250.000đ" 
                img={place1}
                />
                <Place 
                title="Hà Nội - Hải Phòng" 
                backgound="color-purple" 
                price="Từ 80.000đ" 
                sale="110.000đ" 
                img={place2}
                />
                <Place 
                title="Sài Gòn - Đà Lạt" 
                backgound="color-red" 
                price="Từ 200.000đ" 
                img={place3}
                hidden={true}
                />
                <Place 
                title="Sài Gòn - Phan Thiết" 
                backgound="color-blue" 
                price="Từ 150.000đ" 
                img={place4}
                hidden={true}
                />

                <Button position="right-3 bg-white" icon={images.icon1} />
                <Button position="left-3 color-rgba"  icon={images.icon2}/>

            </div>
        </div>
    )
}

export default Content