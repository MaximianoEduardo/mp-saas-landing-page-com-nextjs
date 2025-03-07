import Image from "next/image";

export default function FooterComponent (){
    return (

        <footer className=" pt-20 pb-10 gap-16">

            <div className="footer-wrapper flex flex-col gap-4 justify-center items-center">
                <Image src={'/Logo.svg'} alt="Logo Livro Sass" height={40} width={129}/>

                <span className="text-[#6B7280] text-xs font-light">
                    © 2025 LivroSaaS. Todos os direitos reservados.
                </span>

            </div>
            
            
        </footer>

    )
}