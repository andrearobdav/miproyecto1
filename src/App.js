import imagen1 from './img/img-1-mario.png';
import imagen2 from './img/img-2-yoshi.png';
import imagen3 from './img/img-3-luigi.png';
import './App.css';

function App() {
  let nombres=["Mario" , "Yoshi" , "Luigi"];
  return (
    <div className="contenedor">
      <div className="caja">
        <img src={imagen1}/>
        <div className="texto">{nombres[0]}</div>
      </div>

      <div className="caja">
        <img src={imagen2}/>
        <div className="texto">{nombres[1]}</div>
      </div>

      <div className="caja">
        <img src={imagen3}/>
        <div className="texto">{nombres[2]}</div>
      </div>
    </div>
  );
}

export default App;
