"use client"


export default function CallOutComponent({
    children,
    title,
    description,
    isH1
}: Readonly<{
    children: React.ReactNode;
    title: string;
    description: string;
    isH1?: boolean;
}>) {




    return (


        <div className="sectionCallOut pt-20 pb-20 grid grid-rows-2 gap-16" >



            <div className="content flex flex-col justify-center items-center gap-2">

                {isH1 ? <h1 className="font-bold text-6xl text-center"> {title} </h1> : <h2 className="font-bold text-6xl text-center"> {title} </h2>}


                <h2 className="font-normal text-xl text-center  text-[#6B7280] max-w-[827px]">
                    {description}
                </h2>
            </div>

            <div className="form flex justify-center items-center max-w-[424px] mx-auto">

                {children}



            </div>



        </div>


    );
}