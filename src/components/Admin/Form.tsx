import Heading from "./Heading";
import Input from "./Input";
import Button from "./Button"
const Form = () => {
    return (
        <>
            <Heading title="Thêm mới chuyến xe" />
            <Button title="Thêm mới nhà xe" />
            <div className="bg-[#F2F2F2] px-10 py-5 rounded-xl">
                <form action="">
                    <Input title="Nhà xe" type="" />
                    <div className="flex flex-wrap justify-between">
                        <Input title="Thời gian bắt đầu" type="text" />
                        <Input title="Số ghế" type="text" />
                        <Input title="Giá" type="text" />
                        <Input title="Bến xe" type="" />
                        <Input title="Điểm đi" type="" />
                        <Input title="Điểm đến" type="" />
                    </div>
                    <div className="text-end" >
                        <button className="md:w-[265px] py-3 rounded-xl text-lg font-bold bg-black text-white mt-5">Thêm mới</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form