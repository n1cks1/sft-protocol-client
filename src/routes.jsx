import { createBrowserRouter } from 'react-router-dom'
import ErrorElement from "./components/ui/ErrorElement.jsx";
import Home from "./pages/Home.jsx";
import MainLayouts from "./components/Layouts/MainLayouts.jsx";

const MainRoutes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts />,
        errorElement: <ErrorElement />,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    }
]);

export default MainRoutes;