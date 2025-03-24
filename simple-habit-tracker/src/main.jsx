import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App.jsx' = since <App /> is being used by the router provider it is not needed here
import { RouterProvider } from 'react-router-dom'; // here 'routerProvider' is built-in which renders the entire application using the router object which contains all routes

import router from './router.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} /> {/* <App /> would've been used here if router provider was not used*/}
      {/* <RouterProvide can be used as a self closing tag*/}
      {/*app.jsx not needed b/c routerProvider already handles navigation*/}
      {/* router.js file contains teh route configuration, replacing <BrowserRouter> feature*/}
  </StrictMode>
)
