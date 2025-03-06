import estilo from './Banner.module.css';

export default function Banner({ titulo, imagemFundo, altura, tipo = "h3" }) {
    const estiloBanner = {
        backgroundImage: `url(${imagemFundo})`,
        height: altura || '50vh',
    };

    return (
        <div className={estilo.container} style={estiloBanner}>
            {tipo === "h1" ? (
                <h1 className={estilo.titulo}>{titulo}</h1>
            ) : (
                <h3 className="banner-titulo">{titulo}</h3>
            )}
        </div>
    );
}



