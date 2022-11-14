import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import routes from './routes';
import DefaultLayout from './components/Layout/DefaultLayout';
import PokemonList from './components/Pokemon';
function App() {
    return (
        <div>
            <PokemonList />
        </div>
        // <BrowserRouter>
        //     <Routes>
        //         {routes.map((route) => {
        //             let Layout = route.layout === null ? Fragment : route.layout || DefaultLayout;
        //             const Page = route.component;
        //             return (
        //                 <Route
        //                     path={route.path}
        //                     element={
        //                         <Layout>
        //                             <Page />
        //                         </Layout>
        //                     }
        //                 />
        //             );
        //         })}
        //     </Routes>
        // </BrowserRouter>
    );
}

export default App;
