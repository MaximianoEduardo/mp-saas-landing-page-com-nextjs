import Image from "next/image";
import NavBar from "../navBar/navbar";

export default function HeaderComponent() {

    return (

        <div className="">
            <div className="w-full grid grid-cols-2 pt-[46px] px-11">

                <div className="logo-wrapper">

                    <Image src={'/Logo.svg'} alt="Logo Livro Sass" width={129} height={40} />

                </div>


                <NavBar />

            </div>
        </div>
    )

}