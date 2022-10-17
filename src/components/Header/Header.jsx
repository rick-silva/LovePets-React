import '../../assets/css/global.css'
import './header.css'

export const Header = () =>{
    return(
        <header id="menu">
            <li><a id="logo" href="#">Love<span>Pets</span></a>
            </li>
            <div id="div-elements">
                <li><a className="elements-menu" href="#sobre">Sobre</a></li>
                <li><a className="elements-menu" href="#servicos">Serviços</a></li>
                <li><a className="elements-menu" href="#contato">Contato</a></li>
            </div>
        </header>
    )
}