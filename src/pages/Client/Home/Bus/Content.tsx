import BusStations from './BusStations';
import SliderPosts from './SliderPosts';
import SliderTicket from './SliderTicket';
import Heading from './components/Heading';
import { listMedia } from './datas';

const Content = () => {
    return (
        <div className="lg:w-[980px] md:w-full mx-auto my-10 px-4">
            <Heading title="Tuyến đường phổ biến" />
            <div className="flex gap-3 relative"></div>
            <SliderTicket />
            <div className="mt-12">
                <Heading title="Ưu đãi nổi bật" />
                <div className="flex md:justify-between">
                    <SliderPosts />
                </div>
            </div>
            <div className="pt-12">
                <Heading title="Vexere đã được nhắc đến trên" />
                <div className="grid sm:grid-cols-[repeat(3,auto)] md:grid-cols-[repeat(6,auto)] justify-between items-center gap-4">
                    {listMedia.map(
                        (url: { imageUrl: string; name: string }) => (
                            <div key={url.name}>
                                <img
                                    src={url.imageUrl}  
                                    alt={url.name}
                                    className="md:h-[44px] sm:h-[25px]"
                                />
                            </div>
                        ),
                    )}
                </div>
            </div>
            <div className="mt-[50px]">
                <Heading title="Bến Xe Khách" />
                <BusStations />
            </div>
        </div>
    );
};

export default Content;
