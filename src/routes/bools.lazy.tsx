import { createLazyFileRoute } from '@tanstack/react-router';
import React, { useState } from 'react';
import { useConfigDelete, useConfigView } from '../store';
import { ConfigDataTable } from '../components/ConfigDataTable';
import { PreviewSidebar } from '../components/PreviewSidebar';
import { TBool, TText, TService, TNumber, TObject, TRange } from '../types';

const Bools = () => {
    const { data } = useConfigView();
    const deleteMutation = useConfigDelete();
    const [visibleRight, setVisibleRight] = useState<
        TBool | TText | TService | TNumber | TObject | TRange | null
        >(null);

    const handleDelete = (item: TBool | TText | TService | TNumber | TObject | TRange) => {
        deleteMutation.mutate({type: 'flags', id: item.id})
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ConfigDataTable
                data={data?.data.flags || []}
                onViewClick={(item) => setVisibleRight(item)}
                onEditClick={(item) => console.log(item)}
                onHistoryClick={(item) => console.log(item)}
                onDeleteClick={(item) => handleDelete(item)}
                headerPlaceholder={'Начни вводить название флага'}
            />

            {visibleRight && (
                <PreviewSidebar
                    visible={visibleRight !== null}
                    item={visibleRight}
                    onHide={() => setVisibleRight(null)}
                    headerPrefix={'Флаг: '}
                    previewPrefix={'flags'}
                />
            )}
        </div>
    );
};

export const Route = createLazyFileRoute('/bools')({
    component: Bools,
});
