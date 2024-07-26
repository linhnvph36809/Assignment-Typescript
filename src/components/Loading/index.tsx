const Loading = ({ isShow }: { isShow: boolean }) => {
    return (
        <div
            className={`fixed inset-0 z-10 bg-[#ffffffb3] 
            transition-all duration-300 ease-linear flex justify-center items-center ${isShow ? "" : "invisible opacity-0"}`}
        >
            <div className="rounded-md h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin absolute"></div>
        </div>
    );
};

export default Loading;
