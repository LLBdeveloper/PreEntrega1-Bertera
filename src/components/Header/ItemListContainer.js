import React from 'react'
import "./ItemListContainer.css";
import img from "../logoFondoBlanco.png"

const ItemListContainer = ({title}) => {
    return (
        <div className="contenedorHeader">
            <img src={img} alt="logo" className="logo"/>
            
            <h3 className="titulo" > {title}</h3>
        </div>
    )
};

export default ItemListContainer




// import React from 'react'
// import "./Header.css";
// import img from "../logoFondoBlanco.png"

// const Header = (greeting) => {
//     return (
//         <div className="contenedorHeader">
//             <img src={img} alt="logo" className="logo"/>
            
//             <h3 className="titulo" > {greeting.title}</h3>
//         </div>
//     )
// };

// export default Header