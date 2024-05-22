import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { PrimeReactProvider } from 'primereact/api';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import 'primereact/resources/themes/lara-light-purple/theme.css';
import 'primeicons/primeicons.css';

import { routeTree } from './routeTree.gen';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './store';

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <StrictMode>
            <QueryClientProvider client={queryClient}>
                <PrimeReactProvider>
                    <RouterProvider router={router} />
                    <ReactQueryDevtools initialIsOpen />
                </PrimeReactProvider>
            </QueryClientProvider>
        </StrictMode>
    );
}
