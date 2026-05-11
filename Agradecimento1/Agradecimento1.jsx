import Titulo from "../Titulo/Titulo.jsx";
import Botao from "../Botao/Botao.jsx";
import css from './Agradecimento1.module.css'

export default function Agradecimento1() {
    return (
        <section className={css.container}>
            <div className={css.titulo}>
                <Titulo titulo={'Agradecemos a contribuição!'} cor={'rosa'} />
            </div>
            <div className={css.botoes}>
                <Botao texto={'Ir para o feed'} cor={'rosa'} pagina={'/feed'} />
                <Botao texto={'Ir para o dashboard'} cor={'vazadorosa'}  />
            </div>
        </section>
    )
}