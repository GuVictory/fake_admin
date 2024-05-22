import React, { useMemo, useState } from 'react';
import { Toolbar } from 'primereact/toolbar';
import { NavTabs } from '../NavTabs';
import { useNavigate, useRouterState } from '@tanstack/react-router';
import { HeaderButtons } from '../HeaderButtons';
import { AdminTypeSwitcher } from '../AdminTypeSwitcher';
import { queryClient } from '../../store';

import './Header.css';
import { useMutation } from '@tanstack/react-query';
import { getConfig } from '../../api';
import { TConfig } from '../../types';

export const Header = () => {
    const navigate = useNavigate();
    const router = useRouterState();
    const [adminType, setAdminType] = useState<boolean>(false);

    const changeConfig = useMutation({
        mutationFn: async (): Promise<TConfig> => {
            return getConfig('RU', 'Android', adminType ? 'PROD' : 'STAG');
        },
        onSuccess: (data) => {
            queryClient.setQueryData(['config'], data);
        },
    });

    const startContent = useMemo(() => {
        const handleChange = () => {
            setAdminType((prev) => !prev);
            changeConfig.mutate();
        };

        return (
            <AdminTypeSwitcher
                adminType={adminType ? 'prod' : 'stage'}
                onChange={handleChange}
            />
        );
    }, [adminType, changeConfig]);

    const centerContent = useMemo(() => {
        const handleTabChange = (id: string) => {
            navigate({ to: `/${id}` });
        };
        return (
            <NavTabs
                onChange={handleTabChange}
                activeId={router.location.pathname.replace('/', '')}
            />
        );
    }, [navigate, router.location.pathname]);

    const endContent = useMemo(() => {
        const handleAdminClick = () => {
            navigate({ to: '/admin' });
        };

        const handleReviwerClick = () => {
            navigate({ to: '/reviwes' });
        };
        return (
            <HeaderButtons
                admin
                reviever
                onAdminClick={handleAdminClick}
                onRevieverClick={handleReviwerClick}
            />
        );
    }, [navigate]);

    return (
        <Toolbar
            start={startContent}
            center={centerContent}
            end={endContent}
            className="ToolBar"
        />
    );
};
