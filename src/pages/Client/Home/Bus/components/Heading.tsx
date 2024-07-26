const Heading = ({title}:{title:string}) => {
    return (
        <>
            <h1
                className="text-medium text-2xl text-[#484848] pb-5
                    sm:text-lg md:text-2xl sm:pb-3 md:pb-5 font-semibold"
            >
                {title}
            </h1>
        </>
    );
};

export default Heading;
