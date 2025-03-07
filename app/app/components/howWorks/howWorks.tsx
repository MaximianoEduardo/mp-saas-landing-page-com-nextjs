import Image from "next/image";

export default function HowWorksComponent(){

    return (
        
        <section className="max-w-[1352px] mx-auto h-auto pt-9 pb-9">

            <div className="grid grid-cols-1">

                <div className="howWorksTitlle flex justify-center">
                    <h2 className="font-bold text-4xl"> Como funciona?  </h2>
                </div>


                <div className="content w-full max-w-[900px] mx-auto flex justify-between items-center">

                    <div className="content-image">
                        <Image width={392} height={392} alt=" Mulher Carregando Caixas " src={"/woman.png"} />
                    </div>

                    <div className="content-description lg:min-w-[400px] flex flex-col justify-center items-center gap-9">

                        <div className="w-full flex items-center justify-center gap-16 relative">
                            <h3 className="text-[#6B7280] text-3xl">Acesso a 1 ebook por mês </h3>
                            <i className="absolute -right-9">
                                <Image src={"/check.svg"} width={21} height={15} alt="icone de check" />
                            </i> 
                        </div>
                        
                        <div className="w-full flex items-center justify-center gap-16 relative">
                            <h3 className="text-[#6B7280] text-3xl">Curadoria especial </h3>
                            <i className="absolute -right-9">
                                <Image src={"/check.svg"} width={21} height={15} alt="icone de check" />
                            </i>
                        </div>
                        
                        <div className="w-full flex items-center justify-center gap-16 relative">
                            <h3 className="text-[#6B7280] text-3xl">Cancele quando quiser</h3>
                            <i className="absolute -right-9">
                                <Image src={"/check.svg"} width={21} height={15} alt="icone de check" />
                            </i> 
                        </div>
                        

                    </div>

                </div>

            </div>


        </section>

    );
}