export default function Informacoes({ titulo, texto }) {
    const partes = texto.split(/("[^"]*")/g);

    return (
        <div id="informacoes" className="informacoes-container">
            <h2 className="informacoes-subtitulo">{titulo}</h2>
            <p className="informacoes-paragrafo">
                {partes.map((parte, index) =>
                    parte.startsWith('"') && parte.endsWith('"') ? (
                        <strong key={index}>{parte.replace(/"/g, '')}</strong>
                    ) : (
                        <span key={index}>{parte}</span>
                    )
                )}
            </p>
        </div>
    );
}

