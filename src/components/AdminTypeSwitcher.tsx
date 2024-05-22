import { InputSwitch } from 'primereact/inputswitch';
import React from 'react';

export type AdminTypeSwitcherProps = {
    adminType: 'prod' | 'stage';
    onChange: () => void;
};

export const AdminTypeSwitcher = React.memo(
    ({ onChange, adminType }: AdminTypeSwitcherProps) => {
        return (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    width: '180px',
                }}
            >
                <InputSwitch
                    checked={adminType === 'prod'}
                    onChange={onChange}
                />
                <span>{adminType === 'prod' ? 'Прод' : 'Стаг'} админка</span>
            </div>
        );
    }
);
