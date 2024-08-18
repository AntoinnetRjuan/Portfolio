export default function Project(){
    return(
        <>
        <div className="formProject">
            <form action="#">
                <input className="iptProject" type="text" placeholder="ProjectName" required name="Name"/><br />
                <input className="iptProject" type="text" placeholder="Description" required name="Email"/><br />
                <input className="iptProject" type="text" placeholder="Stack" required name="Subject"/><br />
                <button className="sbtIptProject" type="submit">
                    SAVE
                </button>
            </form>
        </div>
        
        <div className="Parent">
            <div className="child">
                <h2>Title of the project</h2>
                <hr/>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Rem, corporis voluptatem quasi eius dolor vero iste modi nisi. 
                    Facere voluptas et labore repellat, explicabo autem! Commodi nihil aliquam sequi rerum.
                </p>
                <hr />
                <div className="stacks">
                    <h3> Stacks:</h3>
                    <p>stacks with what the have been created</p>
                </div>
                <button>Demo</button>
            </div>
        </div>
        </>
    )
}