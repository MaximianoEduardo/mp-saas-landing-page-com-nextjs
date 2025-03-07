import Image from "next/image";

export default function HowWorksComponent(){

    return (
        
        <section className="w-full px-4 md:px-0 md:max-w-[1352px] mx-auto h-auto py-6 md:py-9">

            <div className="grid grid-cols-1">

                <div className="howWorksTitlle flex justify-center mb-8 md:mb-12">
                    <h2 className="font-bold text-2xl md:text-4xl text-center"> Como funciona? </h2>
                </div>


                <div className="content w-full md:max-w-[900px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0">

                    <div className="content-image w-full max-w-[300px] md:max-w-[392px]">
                        <Image 
                            width={392} 
                            height={392} 
                            alt="Mulher Carregando Caixas" 
                            src={"/woman.png"}
                            className="w-full h-auto" 
                        />
                    </div>

                    <div className="content-description w-full lg:min-w-[400px] flex flex-col justify-center items-center gap-6 md:gap-9">

                        <div className="w-full flex items-center justify-center gap-4 md:gap-16 relative">
                            <h3 className="text-[#6B7280] text-xl md:text-3xl text-center">Acesso a 1 ebook por mês </h3>
                            <i className="absolute -right-0 md:-right-9">
                                <Image src={"/check.svg"} width={21} height={15} alt="icone de check" />
                            </i> 
                        </div>
                        
                        <div className="w-full flex items-center justify-center gap-4 md:gap-16 relative">
                            <h3 className="text-[#6B7280] text-xl md:text-3xl text-center">Curadoria especial </h3>
                            <i className="absolute -right-0 md:-right-9">
                                <Image src={"/check.svg"} width={21} height={15} alt="icone de check" />
                            </i>
                        </div>
                        
                        <div className="w-full flex items-center justify-center gap-4 md:gap-16 relative">
                            <h3 className="text-[#6B7280] text-xl md:text-3xl text-center">Cancele quando quiser</h3>
                            <i className="absolute -right-0 md:-right-9">
                                <Image src={"/check.svg"} width={21} height={15} alt="icone de check" />
                            </i> 
                        </div>
                        
                    </div>

                </div>

            </div>

        </section>

    );
}