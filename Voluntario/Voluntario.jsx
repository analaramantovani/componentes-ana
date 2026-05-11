import Titulo from "../Titulo/Titulo.jsx";
import css from './Voluntario.module.css'
import Input from "../Input/Input.jsx";
import Botao from "../Botao/Botao.jsx";

export default function Voluntario() {
    return (
        <section>
            <div>
                <div className={css.conteudo}>
                    <div className={css.mensagem}>
                        <div className={css.titulo}>
                            <Titulo titulo={'Voluntarie-se!'} cor={'rosa'}/>
                            <p>Mande uma mensagem para a ONG para se voluntariar</p>
                        </div>

                        <Input label={'Mensagem'} type={'text'} textarea={true} input={'Digite a mensagem para a ONG'}/>
                        <div className={css.botoes}>
                            <Botao texto={'Voltar'} cor={'vazadorosa'}/>
                            <Botao texto={'Enviar'} cor={'rosa'}/>
                        </div>

                    </div>
                    <img className={css.imagem} src={'voluntario.png'}/>
                </div>
            </div>


        </section>
    )
}