import "./page.css";
import Topo from "./componentes/Topo/Topo";
import Banner from "./componentes/Banner/Banner";
import Informacoes from "./componentes/Informacoes/Informacoes";
import Contatos from "./componentes/Contatos/Contatos";
import HorariosFuncionamento from "./componentes/Horarios/Horarios";
import Rodape from "./componentes/Rodape/Rodape";
import dadosInformacoes from "./dados";

export default function Home() {
    return (
        <div className="container">
            <header>
                <Topo />
            </header>
            <section>
                <Banner
                    titulo="MANHATTAN - COFFEE HOUSE" 
                    imagemFundo="/parallax-imagem1.png"
                    altura="100vh"
                    tipo="h1"
                />
                {dadosInformacoes.map((item, index) => (
                    <div key={index}>
                        <Informacoes titulo={item.titulo} texto={item.texto} />
                        {index < dadosInformacoes.length - 1 && (
                            <Banner 
                                titulo={index === 0 ? "Um bom café é motivo de alegria!" : "A vida só começa depois do café!"} 
                                imagemFundo={`/parallax-imagem${index + 2}.jpg`} 
                            />
                        )}
                    </div>
                ))}
                <Contatos />
                <HorariosFuncionamento />
            </section>
            <footer>
                <Rodape />
            </footer>
        </div>
    );
}


