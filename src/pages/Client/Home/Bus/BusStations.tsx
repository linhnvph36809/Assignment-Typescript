import { useEffect, useState } from 'react';
import { IStation } from '../../../../interfaces/station';
import { getStation } from '../../../../api/station.api';

const BusStations = () => {
    const [stations, setStations] = useState<IStation[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await getStation();
                setStations(data);
            } catch (error) {
                console.log(error);
            }
        })();
    },[]);

    return (
        <div className="grid sm:grid-cols-[repeat(2,1fr)] md:grid-cols-[repeat(4,auto)]
         md:justify-between  items-center gap-4">
            {stations.map((station: IStation) => (
                <div key={station._id} className="relative">
                    <img
                        src="https://229a2c9fe669f7b.cmccloud.com.vn/images/bx-mien-dong.jpg"
                        alt=""
                        className="md:h-[161px] rounded-[3px]"
                    />
                    <div
                        className="absolute bottom-0 left-0 right-0 h-[80px] rounded-b-[3px]"
                        style={{
                            background:
                                'linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0, 0.5)) 0% 0% no-repeat padding-box padding-box transparent',
                        }}
                    >
                        <h3
                            className="absolute bottom-3 text-center
                            w-full md:text-lg sm:text-sm font-semibold text-white"
                        >
                            {station.name}
                        </h3>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BusStations;
