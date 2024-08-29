import me from '../images/profil.jpg'
export default function Home(){
    return(
        <>
            <div className="homecss">
                <h1>welcome in my little Portfolio</h1>
                <div className="Propos">
                    <h2>I am RATSARAFARA Jean Antoinnet</h2>
                    <h3>Developer</h3>
                    <img src={me}/>
                </div>
                
            </div>
            <p className="creator">Copyright 2024 By Antoinnet</p>
        </>
        
    )
}
