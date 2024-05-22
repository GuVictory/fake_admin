import React, { FC, useCallback, useState } from 'react';
import { TAny, TBool, TLocale, TNumber, TObject, TPlatform, TRange, TService, TText } from '../types';
import { Sidebar } from 'primereact/sidebar';
import { JsonEditor } from 'json-edit-react';
import { LocaleSelector } from './LocaleSelector';
import { PlatformSelector } from './PlatformSelector';

export type PreviewSidebarProps = {
    visible: boolean;
    item: TBool | TText | TService | TObject | TNumber | TRange;
    onHide: () => void;
    headerPrefix: string;
    previewPrefix: string;
};

export const PreviewSidebar: FC<PreviewSidebarProps> = ({
    visible,
    item,
    onHide,
    headerPrefix,
    previewPrefix,
}) => {
    const [selectedLocale, setSelectedLocale] = useState<TLocale | undefined>(undefined);
    const [selectedPlatform, setSelectedPlatform] = useState<TPlatform | undefined>(undefined);
    const customHeader = (
        <div className="flex align-items-center gap-2">
            <h2 className="font-bold">
                {headerPrefix}
                {item.id}
            </h2>
        </div>
    );

    const getValueToShow = useCallback((item: TBool | TText | TService | TObject | TNumber | TRange) => {
        if (selectedLocale && selectedPlatform) {
            return item.value?.[selectedLocale]?.[selectedPlatform];
        }

        if (selectedLocale && !selectedPlatform) {
            return item.value?.[selectedLocale];
        }

        if (!selectedLocale && selectedPlatform) {
            const valuesForPlatform: TAny = {};
            for (const [key, value] of Object.entries(item.value)) {
                if (value) {
                    valuesForPlatform[key] = value[selectedPlatform];
                }
            }
            return valuesForPlatform;
        }

        return item.value;
    }, [selectedLocale, selectedPlatform]);

    return (
        <Sidebar
            visible={visible}
            position="right"
            onHide={onHide}
            style={{ width: '850px' }}
            header={customHeader}
        >
            <h3 className="font-bold">Описание</h3>
            <p>{item.description}</p>
            <h3 className="font-bold">Для какой локали</h3>
            <LocaleSelector selected={selectedLocale} onChange={setSelectedLocale} />
            <h3 className="font-bold">Для какой платформы</h3>
            <PlatformSelector selected={selectedPlatform} onChange={setSelectedPlatform}/>
            <h3 className="font-bold">Значение</h3>
            <JsonEditor
                data={{ [item.id]: getValueToShow(item) }}
                indent={2}
                restrictEdit
                restrictDelete
                restrictAdd
                restrictTypeSelection
                enableClipboard={false}
                maxWidth={'810px'}
                minWidth={'810px'}
                rootName={previewPrefix}
                showCollectionCount="when-closed"
            />
        </Sidebar>
    );
};
