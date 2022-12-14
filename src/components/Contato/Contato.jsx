
import '../../assets/css/global.css'
import './contato.css'
import facebookIcon from '../../assets/icons/PNG/facebook.png'
import instagramIcon from '../../assets/icons/PNG/instagram.png'
import twitterIcon from '../../assets/icons/PNG/twitter.png'
import whatsappIcon from '../../assets/icons/PNG/whatsapp.png' 
import Dogmeme from '../../assets/img/meme.jpg'

export const Contato = () =>{
    return(
        <div id="contato">
            <div id="div-titulo-contato">
                <h2>Contato</h2>
            </div>

            <div id="div-main">
                <div id="div-redes">
                    <div id="forms-titulo-contato">
                        <h3>Tem alguma duvida sobre a <br/><span>Love</span>Pets?<br/> Manda pra gente!</h3>
                    </div>
                    <div id="div-icons-contato">
                        <a href="https://www.facebook.com/" target="_blank"><img className="icons-contato" src={facebookIcon}/> </a>
                        <a href="https://www.instagram.com/" target="_blank"><img className="icons-contato" src={instagramIcon}/> </a>
                        <a href="https://twitter.com/login?lang=pt" target="_blank"><img className="icons-contato" src={twitterIcon}/> </a>
                        <a href="" ><img className="icons-contato" src={whatsappIcon}/> </a>
                    </div>
                    <div id="div-img-meme">
                        <img id="img-meme" src={Dogmeme} width="250px"/>
                    </div>
                </div>

                <div id="div-form">
                    <div id="div-titulo">
                        <h3>Manda um e-mail pra <br/>gente!</h3>
                    </div>
                    <form>
                        <label>Nome</label>
                        <input className="input-lovepets" type="text" name="nome" placeholder=""/>
                        <br/>
                        <label>E-mail</label>
                        <input className="input-lovepets" type="e-mail" name="email" placeholder=""/>
                        <br/>
                        <label>Assunto</label><br/>
                        <input className="input-lovepets" type="text" name="assunto"/>
                        <br/>
                        <textarea></textarea>
                        <br/>
                        <input className="input-lovepets" type="button" name="enviar" value="Enviar"/>
                    </form>
                </div>
            </div>

        </div>
    )
}