import React, { FC, useState } from 'react';
import {
    TAny,
    TBool,
    TNumber,
    TObject,
    TRange,
    TService,
    TText,
} from '../types';
import { FilterMatchMode } from 'primereact/api';
import { Button } from 'primereact/button';
import { IconField } from 'primereact/iconfield';
import { InputText } from 'primereact/inputtext';
import { InputIcon } from 'primereact/inputicon';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export type ConfigDataTableProps = {
    loading?: boolean;
    data: TBool[] | TText[] | TService[] | TObject[] | TNumber[] | TRange[];

    onViewClick: (
        item: TBool | TText | TService | TObject | TNumber | TRange
    ) => void;
    onEditClick: (
        item: TBool | TText | TService | TObject | TNumber | TRange
    ) => void;
    onHistoryClick: (
        item: TBool | TText | TService | TObject | TNumber | TRange
    ) => void;
    onDeleteClick: (
        item: TBool | TText | TService | TObject | TNumber | TRange
    ) => void;

    headerPlaceholder: string;
};

export const ConfigDataTable: FC<ConfigDataTableProps> = ({
    loading,
    data,
    onViewClick,
    onEditClick,
    onHistoryClick,
    onDeleteClick,
    headerPlaceholder,
}) => {
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [filters, setFilters] = useState({
        id: { value: '', matchMode: FilterMatchMode.CONTAINS },
    });

    const actionBodyTemplate = (item: TAny) => {
        const handleView = () => onViewClick(item);
        const handleHistory = () => onHistoryClick(item);
        const handleEdit = () => onEditClick(item);
        const handleDelete = () => onDeleteClick(item);
        return (
            <React.Fragment>
                <Button
                    icon="pi pi-eye"
                    rounded
                    text
                    severity="secondary"
                    aria-label="Просмотр"
                    tooltip="Посмотреть значение"
                    onClick={handleView}
                />
                <Button
                    icon="pi pi-history"
                    rounded
                    text
                    severity="secondary"
                    aria-label="История изменений"
                    tooltip="История изменений"
                    onClick={handleHistory}
                />
                <Button
                    icon="pi pi-pencil"
                    rounded
                    text
                    severity="secondary"
                    aria-label="Редактировать"
                    tooltip="Редактировать"
                    onClick={handleEdit}
                />
                <Button
                    icon="pi pi-trash"
                    rounded
                    text
                    severity="secondary"
                    aria-label="Удалить"
                    tooltip="Удалить"
                    onClick={handleDelete}
                />
            </React.Fragment>
        );
    };

    const onGlobalFilterChange: React.ChangeEventHandler<HTMLInputElement> = (
        e
    ) => {
        const value = e.target.value;
        const _filters = { ...filters };

        _filters['id'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const renderHeader = () => {
        return (
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <IconField iconPosition="left" style={{ width: 'max-content' }}>
                    <InputIcon className="pi pi-search" />
                    <InputText
                        value={globalFilterValue}
                        onChange={onGlobalFilterChange}
                        placeholder={headerPlaceholder}
                        style={{ width: '600px' }}
                    />
                </IconField>
            </div>
        );
    };

    const header = renderHeader();

    if (loading) {
        return 'Loading...';
    }

    return (
        <DataTable
            header={header}
            size="small"
            style={{ width: '90%' }}
            value={data}
            rows={data.length}
            filters={filters}
            dataKey="id"
            globalFilterFields={['id']}
            emptyMessage="Рычагов не найдено"
        >
            <Column
                field="id"
                header="Название"
                style={{
                    minWidth: '150px',
                    maxWidth: '240px',
                }}
            />
            <Column
                header="Описание"
                field="description"
                style={{
                    minWidth: '200px',
                    maxWidth: '500px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}
            />
            <Column
                header="Изменено"
                field="edited"
                dataType="date"
                style={{ minWidth: '250px' }}
            />
            <Column
                header={<span style={{ paddingLeft: '16px' }}>Действия</span>}
                body={actionBodyTemplate}
                exportable={false}
                style={{ minWidth: '240px', maxWidth: '240px' }}
            ></Column>
        </DataTable>
    );
};
