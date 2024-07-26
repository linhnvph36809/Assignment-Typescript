export const ticketTypes = [
    {
        title: "Xe khách",
        type: "bus",
        path: "/",
        image: (
            <svg viewBox="0 0 24 24" width="25" className="sm:w-[16px] md:w-[25px] icon-search">
                <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"></path>
            </svg>
        ),
        deal: null,
    },
    {
        title: "Máy bay",
        type: "plane",  
        path: "/plane",
        image: (
            <svg
                width="25"
                height="24"
                className="sm:w-[16px] md:w-[25px] icon-search"
                viewBox="0 0 25 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.5 2a4 4 0 0 0-4 4v11a1 1 0 0 0 1 1h1l-2 4h2l.6-1.2h10.8l.6 1.2h2l-2-4h1a1 1 0 0 0 1-1V6a4 4 0 0 0-4-4h-8zm8 16h-8L8 19h9l-.5-1zm-8-14a2 2 0 0 0-2 2v5h5V4h-3zm10 7h-5V4h3a2 2 0 0 1 2 2v5zm-9 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM17 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                ></path>
            </svg>
        ),
        deal: "-20K",
    },
    {
        title: "Tàu hỏa",
        type: "train",
        path: "/train",
        image: (
            <svg
                width="25"
                height="24"
                className="sm:w-[16px] md:w-[25px] icon-search"
                viewBox="0 0 25 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.5 2a4 4 0 0 0-4 4v11a1 1 0 0 0 1 1h1l-2 4h2l.6-1.2h10.8l.6 1.2h2l-2-4h1a1 1 0 0 0 1-1V6a4 4 0 0 0-4-4h-8zm8 16h-8L8 19h9l-.5-1zm-8-14a2 2 0 0 0-2 2v5h5V4h-3zm10 7h-5V4h3a2 2 0 0 1 2 2v5zm-9 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM17 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                ></path>
            </svg>
        ),
        deal: "Mới",
    },
];
