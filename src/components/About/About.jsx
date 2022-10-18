// import '../../assets/css/global.css'
import './about.css'
import ImgFamily from '../../assets/img/family.jpg'

export const About = () => {
    return(
        <div id="sobre">
            <div id="div-sobre">
                <div id="img-sobre">
                    <img id="img-family" src={ImgFamily}/>
                </div>
                

                <div id="info-sobre">
                    <h2>Sobre a <span>Love</span>Pets</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua. Ut <br/> enim ad minim veniam, quis nostrud <br/> exercitation ullamco laboris nisi ut aliquip ex <br/> ea commodo consequat. Duis aute irure dolor <br/> in reprehenderit in voluptate velit esse cillum <br/> dolore eu fugiat nulla pariatur. Excepteur sint <br/> occaecat cupidatat non proident, sunt in culpa <br/> qui officia deserunt mollit anim id est laborum.</p>

                    <div id="btn-whatsapp">
                        <a href="https://api.whatsapp.com/send?phone=+5511000000000&text=Oi! Gostaria de agendar um horário" target="_blank" name="">Agende um Horário </a>
                    </div>
                </div>
            </div>
        </div>
    )
}