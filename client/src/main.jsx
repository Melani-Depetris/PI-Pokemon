//Este es mi entrypoint
import React from 'react' // Permite crear a través de componentes interfaces de usuario interactivas y reutilizables
import ReactDOM from 'react-dom/client' //Toma los componentes de React y los "monta" en el DOM
import App from './App.jsx' //Componente principal
import './index.css' //Estilos
import {BrowserRouter} from 'react-router-dom' // Permite el enrutamiento dinámico de la SPA sin tener que cargar toda la pagina. Crea una experiencia de navegación más suave y rápida para los usuarios

// import store from './redux/store.js' //Es donde voy a almacenar mis estados globales
//import {Provider} from 'react-redux' //El provider va hacer la conexion entre React y Redux, es quien va a poveer la store


ReactDOM.createRoot(document.getElementById('root')).render(
  // <Provider store={store}>
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  {/* </Provider> */}
);
