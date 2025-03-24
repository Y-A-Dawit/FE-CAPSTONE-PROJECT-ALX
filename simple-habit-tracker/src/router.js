// this file isn't a requirement but useful to manage routes separately instead of defining them inside App.jsx

import { createBrowserRouter } from 'react-router-dom'; // here "createBrowserRouter" is built-in method/way to create a router object which provides a routing configuration
import App from './App';

const router = createBrowserRouter([
    {
        path: "/", // here the path is the home directory which renders the App component
        Component: App,
    },
    {
        path: "/about",
        Component: About,
    }
]);

export default router;