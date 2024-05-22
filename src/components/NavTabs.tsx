import React, { useEffect, useState } from 'react';
import { TabMenu, TabMenuTabChangeEvent } from 'primereact/tabmenu';
import { MenuItem } from 'primereact/menuitem';

export type NavTabsProps = {
    onChange?: (tabId: string) => void;
    activeId?: string;
};

export enum TabIds {
    bools = 'bools',
    services = 'services',
    strs = 'strs',
    numbs = 'numbs',
    objs = 'objs',
    ranges = 'ranges'
}

const mapFromIdxToId: Record<string, number> = {
    bools: 0,
    services: 1,
    strs: 2,
    numbs: 3,
    objs: 4,
    ranges: 5,
};

const items: MenuItem[] = [
    {
        id: TabIds.bools,
        label: 'Рычаги',
    },
    {
        id: TabIds.services,
        label: 'Сервисы',
    },
    {
        id: TabIds.strs,
        label: 'Тексты',
    },
    {
        id: TabIds.numbs,
        label: 'Числа',
    },
    {
        id: TabIds.objs,
        label: 'Объекты',
    },
    {
        id: TabIds.ranges,
        label: 'Диапазоны',
    },
];

export const NavTabs = React.memo(
    ({ onChange, activeId = 'bools' }: NavTabsProps) => {
        const [activeIndex, setActiveIndex] = useState<number>(
            mapFromIdxToId[activeId]
        );

        useEffect(() => {
            if (mapFromIdxToId[activeId] === undefined) {
                setActiveIndex(-1);
            }
        }, [activeId]);

        const handleTabChange = (e: TabMenuTabChangeEvent) => {
            if (e.value.id) {
                onChange?.(e.value.id);
            }
            setActiveIndex(e.index);
        };

        return (
            <TabMenu
                model={items}
                onTabChange={handleTabChange}
                activeIndex={activeIndex}
            />
        );
    }
);
