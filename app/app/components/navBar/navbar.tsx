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

    const listOfLinks = links.map(link  => <li key={link.path}> {link.name} </li>);


    return (
        <nav className="flex justify-end ">
            <ul className="justify-center items-center flex gap-7">
                { listOfLinks }
            </ul>
        </nav>
    )


}