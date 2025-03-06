
import Link from 'next/link';
import estilo from './Rodape.module.css';

export default function Rodape() {
    return (
            <footer className={estilo.rodape}>
                <p>&copy; Manhattan - Coffee House - Todos os direitos reservados</p>
                <p>Desenvolvido por <span className={estilo.desenvolvedor}>"Jader Alves"</span></p>
                <Link className={estilo.seta} href="#banner"></Link>
            </footer>
    );
}