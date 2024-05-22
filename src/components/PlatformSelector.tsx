import React, { FC } from 'react';
import { TPlatform } from '../types';
import { Button } from 'primereact/button';
import { Platforms } from '../consts';

export type PlatformSelectorProps = {
    selected: TPlatform | undefined;
    onChange: (newPlatform: TPlatform | undefined) => void;
};

export const PlatformSelector: FC<PlatformSelectorProps> = ({
    selected,
    onChange,
}) => {
    const handleClick = (locale: TPlatform) => {
        if (selected === locale) {
            onChange(undefined);
            return;
        }
        onChange(locale);
    };
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {Platforms.map((item) => (
                <Button
                    rounded
                    outlined={selected !== item}
                    size="small"
                    onClick={() => handleClick(item)}
                >
                    {item}
                </Button>
            ))}
        </div>
    );
};
