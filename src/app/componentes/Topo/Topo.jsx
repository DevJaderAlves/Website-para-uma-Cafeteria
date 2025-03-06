'use client';
import { useState } from "react";
import Image from "next/image";
import Logo from '/public/logo.png';
import estilo from "./Topo.module.css";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";


export default function Topo() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    };
    return (
    <div className={estilo.container_topo}>
        <div className={estilo.logo}>
            <Image src={Logo} alt="Logo da Manhattan"/>
        </div>

        <button className={estilo.menu_btn} onClick={toggleMenu}>
            <CiMenuBurger size={40} />
        </button>

        <nav className={`${estilo.links} ${menuOpen ? estilo.active : ""}`}>
                <ul className={estilo.lista}>
                    <li className={estilo.link}>
                        <Link className={estilo.link} href="#informacoes">INFORMAÇÕES</Link>
                    </li>
                    <li className={estilo.link}>
                        <Link className={estilo.link} href="#contatos">CONTATOS</Link>
                    </li>
                    <li className={estilo.link}>
                        <Link className={estilo.link} href="#horarios">HORÁRIOS</Link>
                    </li>
                </ul>
            </nav>           
    </div>
    );
}