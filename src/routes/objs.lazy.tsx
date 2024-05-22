import { createLazyFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { ConfigDataTable } from '../components/ConfigDataTable';
import { PreviewSidebar } from '../components/PreviewSidebar';
import { useConfigView, useConfigDelete } from '../store';
import { TBool, TText, TService, TNumber, TObject, TRange } from '../types';

const Objs = () => {
    const { data } = useConfigView();
    const deleteMutation = useConfigDelete();
    const [visibleRight, setVisibleRight] = useState<
        TBool | TText | TService | TNumber | TObject | TRange | null
        >(null);

    const handleDelete = (item: TBool | TText | TService | TNumber | TObject | TRange) => {
        deleteMutation.mutate({type: 'objects', id: item.id})
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ConfigDataTable
                data={data?.data.objects || []}
                onViewClick={(item) => setVisibleRight(item)}
                onEditClick={(item) => console.log(item)}
                onHistoryClick={(item) => console.log(item)}
                onDeleteClick={(item) => handleDelete(item)}
                headerPlaceholder={'Начни вводить название объекта'}
            />

            {visibleRight && (
                <PreviewSidebar
                    visible={visibleRight !== null}
                    item={visibleRight}
                    onHide={() => setVisibleRight(null)}
                    headerPrefix={'Объект: '}
                    previewPrefix={'objects'}
                />
            )}
        </div>
    );
};

export const Route = createLazyFileRoute('/objs')({
    component: Objs,
});
