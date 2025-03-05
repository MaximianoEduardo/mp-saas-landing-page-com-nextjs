"use client"

import EmailFormComponent from "../form/form";


export default function CallOutComponent() {

    return (

        
        <div className="sectionCallOut pt-20 grid grid-rows-2 gap-16" >

            

            <div className="content flex flex-col justify-center items-center gap-2">
                <h1 className="font-bold text-6xl text-center">Simplifique Seus Estudos </h1>
                <h2 className="font-normal text-xl text-center  text-[#6B7280] max-w-[827px]">
                    Deixe que nós fazemos a curadoria para você. Assine nossa plataforma e receba todos os meses um ebook novo de programação.
                </h2>
            </div>

            <div className="form flex justify-center items-center max-w-[424px] mx-auto">


                <EmailFormComponent />


            </div>
            

            
        </div>

        
    );
}