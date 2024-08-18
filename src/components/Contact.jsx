export default function Contact(){
    return(
        <div className="contactcss">
            <h1>Vous pouvez me contacter avec:</h1>
            <div className="MyContacts">
                <table>
                    <tr>
                        <td><img src="" alt="logo Phone" /></td>
                        <td><p>Phone number:</p></td>
                        <td>0349884262</td>
                    </tr>
                    <tr>
                        <td><img src="" alt="logo Mail" /></td>
                        <td><p>e-mail:</p></td>
                        <td><p>antoinnetrajean@gmail.com</p></td>
                    </tr>
                    <tr>
                        <td><img src="" alt="logo facebook" /></td>
                        <td><p>Facebook:</p></td>
                        <td><p>AntoinnetRjuan</p></td>
                    </tr>
                    <tr>
                        <td><img src="" alt="domicile" /></td>
                        <td><p>Address:</p></td>
                        <td><p>VS 52 AID Avaratra Ankatso</p></td>
                    </tr>
                </table>
            </div>
            <div className='SendMessage'>
                <h3>Lets get in touch. Send me a message:</h3>

                <form action="#">
                    <input className="ipt" type="text" placeholder="Name" required name="Name"/><br />
                    <input className="ipt" type="text" placeholder="Email" required name="Email"/><br />
                    <input className="ipt" type="text" placeholder="Subject" required name="Subject"/><br />
                    <input className="ipt" type="text" placeholder="Message" required name="Message"/><br />
                        <button className="sbtIpt" type="submit">
                        SEND MESSAGE
                        </button>
                </form>
            </div>        
        </div>
    )
}