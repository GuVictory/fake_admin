import React from 'react';
import { Button } from 'primereact/button';

export type HeaderButtonsProps = {
    admin?: boolean;
    reviever?: boolean;
    onAdminClick: () => void;
    onRevieverClick: () => void;
};

export const HeaderButtons = React.memo(
    ({
        admin,
        reviever,
        onAdminClick,
        onRevieverClick,
    }: HeaderButtonsProps) => {
        if (!admin && !reviever) {
            return <div style={{ width: '176px' }} />;
        }

        return (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    width: '176px',
                }}
            >
                {reviever && (
                    <Button
                        rounded
                        size="small"
                        badge="2"
                        badgeClassName="p-badge-danger"
                        outlined
                        onClick={onRevieverClick}
                    >
                        На ревью
                    </Button>
                )}
                {admin && (
                    <Button
                        type="button"
                        rounded
                        size="small"
                        onClick={onAdminClick}
                        style={{ height: '40px', width: '40px' }}
                        icon={<i className="pi pi-cog"></i>}
                    />
                )}
            </div>
        );
    }
);
