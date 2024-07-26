const classes = 'md:w-[277px] h-[50px] rounded-lg border-[1px] border-solid border-black pl-5';
const Input = ({
    title,
    type,
    datas, 
    register,
    children,
}: {
    title: any;
    type: any;
    datas: any;
    register: any;
    children: any;
}) => {
    return (
        <div className="my-3">
            <label htmlFor="" className="block pb-2 text-xl font-normal">
                {title}
            </label>
            {type ? (
                <input type={type} className={classes} {...register} />
            ) : (
                <select name="" id="" className={classes} {...register}>
                    {datas?.map((data: any, index: number, datas: any) => (
                        <option
                            value={
                                datas[0].name == 'An Giang'
                                    ? data.name
                                    : data._id
                            }
                            key={index}
                        >
                            {data.name}
                        </option>
                    ))}
                </select>
            )}
            {children?.message && (
                <p className="my-2 text-red-500 text-base">
                    {children?.message}
                </p>
            )}
        </div>
    );
};

export default Input;
