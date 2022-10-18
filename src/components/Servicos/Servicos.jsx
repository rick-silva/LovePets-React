
import '../../assets/css/global.css'
import './servicos.css'
import ImgDog from '../../assets/img/dog.jpg'
import ImgCat from '../../assets/img/cat.jpg'
import ImgVeterinarian from '../../assets/img/veterinarian.jpg'

export const Servicos = () =>{
    return(
        <div id="servicos">

            <div id="div-titulo-servico">
                <h2>Serviços</h2>
            </div>

            <div id="div-subtitulo">
                <h3>A <span>Love</span>Pets atualmente conta com vários serviços de higiene <br/> e saúde para o seu pet, como:</h3>
            </div>

            <div className="div-servico">
                <img src={ImgDog}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br/> do eiusmod tempor incididunt ut labore et dolore magna <br/> aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br/> ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/> Duis aute irure dolor in reprehenderit in voluptate velit esse <br/>cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat <br/> cupidatat non proident, sunt in culpa qui officia deserunt <br/> mollit anim id est laborum.</p>
            </div>

            <div class="div-servico">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br/> do eiusmod tempor incididunt ut labore et dolore magna <br/> aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br/> ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/> Duis aute irure dolor in reprehenderit in voluptate velit esse <br/>cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat <br/> cupidatat non proident, sunt in culpa qui officia deserunt <br/> mollit anim id est laborum.</p>
                <img src={ImgCat}/>
            </div>
/
            <div className="div-servico">
                <img src={ImgVeterinarian}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br/> do eiusmod tempor incididunt ut labore et dolore magna <br/> aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br/> ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/> Duis aute irure dolor in reprehenderit in voluptate velit esse <br/>cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat <br/> cupidatat non proident, sunt in culpa qui officia deserunt <br/> mollit anim id est laborum.</p>
            </div>

        </div>
    )
}

    