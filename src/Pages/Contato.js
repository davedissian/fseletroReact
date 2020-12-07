import '../midia/email.png'
import '../midia/whats.png'

export default () =>
    <>
    <br /><br /><br /><br /><br />
        <main className="container">
            <br />
            <div className="row">
                <div className="col text-center">
                    <h4><img src="../midia/email.png" /> contato@fullstackeletro.com.br</h4>
                </div>
                <div className="col text-center">
                    <h4><img src="../midia/whats.png" /> (11)99999-0000</h4>
                </div>
            </div>

            <form method="post" action="">
                <h4>Nome: </h4>
                <input type="text" name="nome" style={{width: '400px'}} />
                <h4>Email: </h4>
                <input type="email" name="email" style={{width: '400px'}} />
                <h4>Mensagem: </h4>
                <textarea name="msg" style={{width: '400px'}}></textarea><br />
                <input type="submit" name="enviar" value="Enviar" />
            </form>

        </main>
    </>

