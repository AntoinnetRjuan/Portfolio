export default function About(){
    return(
        <div className="aboutcss">
            <h1>RATSARAFARA Jean Antoinnet</h1>
            <hr className="firstHr"/>
            <div className="AboutMyself">
                <p>
                    My name is RATSARAFARA Jean Antoinnet. I am 22 years old.I am a student at Institut Superieur Politique de Madagascar.
                    I am passionning by learning new technologies.My major at ISPM is Informatique de gestion, genie logiciel et Intelligence Artificielle.
                    Now ,I am in my Third year.
                </p>
            </div>
            <div className="Skills">
                <h2>Stacks:</h2>
                <hr className="secondHr"/>

                <div className="ThreeFirstDiv">
                    <div className="frst">
                        <h3>React js</h3>
                        <div className="Logo">
                            <img src="" alt="logo React Js" />
                        </div> 
                        <progress className="progress" max={100} value={5}></progress>
                    </div>
                    <div className="frst">
                        <h3>Html & Css</h3>
                        <div className="Logo1">
                        <img src="" alt="Logo Html" />
                        <img src="" alt="Logo Css"/>
                        </div>
                        <progress className="progress" max={100} value={60}></progress>
                    </div>
                    <div className="frst">
                        <h3>JavaScript</h3>
                        <div className="Logo">
                        <img src="" alt="Logo Js" />
                        </div>
                        <progress className="progress" max={100} value={10}></progress>
                    </div>
                </div> 

                <div className="ThreeSecondDiv">
                    <div className="scd">
                        <h3>PHP</h3>
                        <div className="Logo">
                            <img src="" alt="Logo php" />
                        </div>
                        <progress className="progress" max={100} value={20}></progress>
                    </div>
                    <div className="scd">
                        <h3>Wpf</h3>
                        <div className="Logo">
                            <img src="" alt="Logo Wpf" />
                        </div>
                        <progress className="progress" max={100} value={50}></progress>
                    </div>
                    <div className="scd">
                        <h3>Java</h3>
                        <div className="Logo">
                            <img src="" alt="Logo Java" />
                        </div>
                        <progress className="progress" max={100} value={20}></progress>
                    </div>
                </div>
                <div className="ForC">
                    <h3>C#</h3>
                    <div className="Logo">
                        <img src="" alt="Logo C#" />
                    </div>
                    <progress className="progress" max={100} value={20}></progress>
                </div>
            </div>
            <div className="Tools">
                <h2>Tools:</h2>
                <hr className="secondHr"/>
                <h3>Visual Studio Code</h3>
                <div className="Logo"><img src="" alt="Logo VsCode" /></div>
                <h3>Visual Studio Microsoft</h3>
                <div className="Logo"><img src="" alt="Logo VS" /></div>
                <h3>Android Studio</h3>
                <div className="Logo"><img src="" alt="Logo Android Studio" /></div>
                <h3>Lunacy</h3>
                <div className="Logo"><img src="" alt="Logo Lunacy" /></div>
            </div>
        </div>
    )
}