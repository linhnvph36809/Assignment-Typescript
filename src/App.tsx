import { RouterProvider } from 'react-router-dom';
import routers from './routers';
import GlobalContext from './contexts/GlobalContext';
function App() {
    return (
        <GlobalContext>
            <RouterProvider router={routers} />
        </GlobalContext>
    );
}

export default App;
