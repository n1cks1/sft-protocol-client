import { createBrowserRouter } from 'react-router-dom'
import ErrorElement from "./components/ui/ErrorElement.jsx";
import Home from "./pages/Home.jsx";
import MainLayouts from "./components/Layouts/MainLayouts.jsx";
import Task from "@pages/Task.jsx"
import Withdraw from "@pages/Withdraw.jsx"

const MainRoutes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts />,
        errorElement: <ErrorElement />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/task',
                element: <Task />
            },
            {
                path: '/withdraw',
                element: <Withdraw />
            }

        ]
    }
]);

export default MainRoutes;