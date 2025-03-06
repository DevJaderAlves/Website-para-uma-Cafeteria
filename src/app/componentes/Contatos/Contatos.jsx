import estilo from './Contatos.module.css';

export default function Contatos() {
    return (
        <div id="contatos" className={estilo.container}>
        <h2 className={estilo.subtitulo}>Contatos & Endereço</h2>
        <div className={estilo.iframe}>
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.116814396121!2d-43.36308168443389!3d-22.982731546364604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda2ed54ec2e1%3A0x4431d262cad1d163!2sAv.%20Ayrton%20Senna%2C%203000%20-%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022775-904!5e0!3m2!1spt-BR!2sbr!4v1673618057703!5m2!1spt-BR!2sbr"
            width="100%"
            height="400"
            style={{ border: "0" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"  >               
            </iframe>
        </div>
        <div className={estilo.contatos}>
          <p className={estilo.paragrafo}>Telefone & Whatsapp: (21) 99999-5555</p>
          <p className={estilo.paragrafo}>E-mail: contato@manhattan.com.br</p>
          <p className={estilo.paragrafo}>
            Endereço: Av Ayrton Senna, 3000 - Barra da Tijuca - Rio de Janeiro
          </p>
        </div>
      </div>  
    );
}