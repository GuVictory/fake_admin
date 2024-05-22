import React, { FC } from 'react';
import { TLocale } from '../types';
import { Button } from 'primereact/button';
import { Locales } from '../consts';

export type LocaleSelectorProps = {
    selected: TLocale | undefined;
    onChange: (newLocale: TLocale | undefined) => void;
};

export const LocaleSelector: FC<LocaleSelectorProps> = ({
    selected,
    onChange,
}) => {
    const handleClick = (locale: TLocale) => {
        if (selected === locale) {
            onChange(undefined);
            return;
        }
        onChange(locale);
    };
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {Locales.map((item) => (
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
