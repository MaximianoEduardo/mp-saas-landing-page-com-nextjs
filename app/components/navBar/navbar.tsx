import Link from "next/link";

interface linkI {
    name: string;
    path: string;
}

export default function NavBar(){

    const links: linkI[]  = [
        {
            name: 'Funcionamento',
            path: 'func',
        },
        {
            name: 'Preco',
            path: 'price',
        },
        {
            name: 'Login',
            path: 'login',
        },
    ];

    const listOfLinks = links.map(link  => <Link key={link.path} href={link.path}> {link.name} </Link>);


    return (
        <nav className="lg:flex justify-end hidden">
            <ul className="justify-center items-center flex gap-7">
                { listOfLinks }
            </ul>
        </nav>
    )


}