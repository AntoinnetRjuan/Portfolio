import me from '../images/github.png'
import { Link } from "react-router-dom";
export default function Menu(){
    return(
        <div className="Menu">
            <ul>
                <li className="menu"><Link to={"/"}>Home</Link></li>
                <li className="menu"><Link to={"/About"}>About</Link></li>
                <li className="menu"><Link to={"/Project"}>Projects</Link></li>
                <li className="menu"><Link to={"/Contact"}>Contact</Link></li>
                <li><Link><button className="btngit"><img className="imaGit" src={me}/></button></Link></li>
            </ul>
        </div>
    )
}
