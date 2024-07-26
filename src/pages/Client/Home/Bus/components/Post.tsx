const Post = () => {
    return (
        <>
            <div
                className="w-full rounded-b-[6px] w-[300px] border 
                border-[#e0e0e0] rounded-t-[6px] cursor-pointer"
            >
                <img
                    src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/293/img_card.png?v=4"
                    alt=""
                    className="md:h-[157px] sm:h-[100px] rounded-t-[6px]"
                />
                <p
                    className="md:text-lg sm:text-xs font-semibold md:py-[16px]
                    md:px-[20px] sm:pt-2 sm:pb-4 sm:px-2"
                >
                    Tặng ngàn ưu đãi giảm 11% (tối đa 50K) khi đặt dịch vụ di
                    chuyển tại Vexere
                </p>
            </div>
        </>
    );
};

export default Post;
