import Links from './Links.js';
import Garage from './Garage.tsx';
import Heading from './Heading.tsx';
import footerLinks from './datas.ts';
import FooterEnd from './FooterEnd.tsx';
const Footter = () => {
    return (
        <footer className='mt-[80px]'>
            <div className="xl:py-[64px] md:px-3 bg-[#F2F2F2] [@media(max-width:431px)]:px-2 [@media(max-width:431px)]:py-10 md:py-10">
                <div className="xl:w-[980px] mx-auto flex items-start flex-wrap gap-y-10 md:gap-x-8 xl:gap-x-0 md:w-full [@media(max-width:431px)]:gap-x-2">
                    <div className="xl:w-3/12 2xl:w-3/12 [@media(max-width:431px)]:w-5/12">
                        <Links datas={footerLinks.road} />
                    </div>
                    <div className="xl:w-4/12 [@media(max-width:431px)]:w-5/12">
                        <Links datas={footerLinks.limousine} />
                    </div>
                    <div className="xl:w-5/12 lg:pe-20 [@media(max-width:431px)]:w-5/12">
                        <Links datas={footerLinks.news} />
                    </div>
                    <div className="xl:w-3/12 md:w-2/12 [@media(max-width:431px)]:hidden">
                        <Links datas={footerLinks.busStation} />
                    </div>
                    <div className="xl:w-9/12 md:w-9/12 [@media(max-width:431px)]:hidden">
                        <Heading title={footerLinks.garage.title} />
                        <div className="flex justify-between flex-wrap">
                            <Garage datas={footerLinks.garage.links_col1} />
                            <Garage datas={footerLinks.garage.links_col2} />
                            <Garage datas={footerLinks.garage.links_col3} />
                            <Garage datas={footerLinks.garage.link__col4} />
                        </div>
                    </div>
                    <div className="xl:w-3/12">
                        <Links datas={footerLinks.suport} />
                    </div>
                    <div className="xl:w-9/12 flex justify-between md:gap-10 md:gap-8 [@media(max-width:431px)]:gap-3">
                        <div>
                            <Links datas={footerLinks.about} />
                            <Heading title="Chứng nhận" />
                        </div>
                        <Heading title="Đối tác thanh toán" />
                        <div>
                            <Heading title="Tải ứng dụng Vexere" />
                            <img
                                className="md:w-[146px] [@media(max-width:431px)]:w-[80px]"
                                src="./src/assets/images/otp.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <FooterEnd />
        </footer>
    );
};

export default Footter;
