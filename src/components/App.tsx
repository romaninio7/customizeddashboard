import React, {Suspense} from 'react';
import {useRoutes} from "routes";
import Loaders from "./Loaders/Loaders";

const App = () => {
    const routes = useRoutes()
    return (
        <Suspense fallback={<Loaders/>}>
            <div className='app'>
                {routes}
            </div>
        </Suspense>
    )
}

export default React.memo(App);
