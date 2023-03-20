// import './App.css';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           INFLACION 
//         </p>
//         <a
//           className="App-link"
//           href="https://www.instagram.com/inflacion.billeterasdepapel/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           IG
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";
import "./App.css";
// COMPONENTS
import ItemListContainer from "./components/Header/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import CardUser from "./components/CardUser/CardUser";
import Footer from "./components/Footer/Footer";


class App extends React.Component {
  render(){
    return(
      <div class>
        <NavBar />
        <ItemListContainer title="BILLETERAS DE PAPEL" />
        <div className="UserSection">
          <CardUser name="Billetera" date="Ecologicas de papel" description="Las billeteras de papel son una alternativa ecológica y amigable con el medio ambiente, ya que son biodegradables y reciclables." img="https://i.imgur.com/wBihA3u.png" 
          />
          <CardUser name="Billetera" date="Ecologicas de papel" description="¡son muy resistentes y duraderas! ¡No sacrifiques el estilo por el medio ambiente, elige una billetera de papel!" img="https://i.imgur.com/bPUMKwe.png" 
          />
          <CardUser name="Billetera" date="Ecologicas de papel" description="#ecológicas #sostenibilidad #cuidaelplaneta #alternativasustentable" img="https://i.imgur.com/ucFSOFb.png" 
          />
          <CardUser name="Billetera" date="Ecologicas de papel" description="Somos conscientes de la importancia de cuidar nuestro planeta y queremos contribuir a hacerlo de manera sostenible y responsable." img="https://i.imgur.com/KzU9AvR.png" 
          />
        </div>
        <Footer />
      </div>
    )
  }
}
export default App;




//   http://placekitten.com/200/300