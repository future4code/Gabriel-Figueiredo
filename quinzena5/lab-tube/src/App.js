import img from './youtube.png';
import imagem2 from './lupa-de-detetive.png';
import './App.css';

function App() {
  const titulo = "Título de vídeo"
  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
}
  return (
    <div>
       <div className="tela-inteira">
          <header>
              <img src={img}/>
              <h1>LabeTube</h1>
              <input type="text" placeholder="Busca" id="campoDeBusca" /> 
              <button type = "submit">&#128269;</button>  
          </header>
          <div className = "linha"> 

          </div>
          <main>
              <nav className="menu-vertical">
                  <ul>
                      <li className="botoes-meunu-vertical1">
                          <a className ="nav-link1" href ="#">Inicio</a>
                      </li>
                      <li className="botoes-meunu-vertical">
                          <a className = "nav-link" href="#">Explorar</a>
                      </li>
                      <li className="botoes-meunu-vertical">
                          <a className = "nav-link" href="#">Inscrições</a>
                      </li>
                        <hr/>
                      <li className="botoes-meunu-vertical">
                          <a className = "nav-link" href="#">Biblioteca</a>
                      </li>
                      <li className="botoes-meunu-vertical">
                          <a className = "nav-link" href="#">Histórico</a>
                      </li>
                  </ul>
              </nav>
              
              <section className="painel-de-videos">
                  <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                      <img src="https://picsum.photos/400/400?a=1 " alt="" />
                      <h4>{titulo}</h4>
                  </div>
                  <div className="box-pagina-principal media2" onClick={reproduzVideo}>
                      <img src="https://picsum.photos/400/400?a=2 " alt="" />
                      <h4>{titulo}</h4>
                  </div>
                  <div className="box-pagina-principal media3" onClick={reproduzVideo}>
                      <img src="https://picsum.photos/400/400?a=3 " alt="" />
                      <h4>{titulo}</h4>
                  </div>
                  <div className="box-pagina-principal media4" onClick={reproduzVideo}>
                      <img src="https://picsum.photos/400/400?a=4 " alt="" />
                      <h4>{titulo}</h4>
                  </div>
                  <div className="box-pagina-principal media5" onClick={reproduzVideo}>
                      <img src="https://picsum.photos/400/400?a=5 " alt="" />
                      <h4>{titulo}</h4>
                  </div>
                  <div className="box-pagina-principal media6" onClick={reproduzVideo}>
                      <img src="https://picsum.photos/400/400?a=6 " alt="" />
                      <h4>{titulo}</h4>
                  </div>
                  <div className="box-pagina-principal media7" onClick={reproduzVideo}>
                      <img src="https://picsum.photos/400/400?a=7 " alt="" />
                      <h4>{titulo}</h4>
                  </div>
                  <div className="box-pagina-principal media8" onClick={reproduzVideo}>
                      <img src="https://picsum.photos/400/400?a=8 " alt="" />
                      <h4>{titulo}</h4>
                  </div>
              </section>
          </main>

          <footer>
              <h4>Oi! Eu moro no footer!</h4>
          </footer>
        </div>
      </div>
  )
}

export default App;
