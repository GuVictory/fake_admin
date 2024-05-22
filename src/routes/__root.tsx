import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Header } from '../components/Header/Header';
import { StoreSetup } from '../components/StoreSetup';

export const Route = createRootRoute({
    component: () => {
        return (<>
            <StoreSetup />
            <Header />
            <Outlet />
            <TanStackRouterDevtools />
        </>);
    },
});
