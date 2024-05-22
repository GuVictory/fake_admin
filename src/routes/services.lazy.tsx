import { createLazyFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { ConfigDataTable } from '../components/ConfigDataTable';
import { PreviewSidebar } from '../components/PreviewSidebar';
import { useConfigView, useConfigDelete } from '../store';
import { TBool, TText, TService, TNumber, TObject, TRange } from '../types';

const Services = () => {
    const { data } = useConfigView();
    const deleteMutation = useConfigDelete();
    const [visibleRight, setVisibleRight] = useState<
        TBool | TText | TService | TNumber | TObject | TRange | null
        >(null);

    const handleDelete = (item: TBool | TText | TService | TNumber | TObject | TRange) => {
        deleteMutation.mutate({type: 'services', id: item.id})
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ConfigDataTable
                data={data?.data.services || []}
                onViewClick={(item) => setVisibleRight(item)}
                onEditClick={(item) => console.log(item)}
                onHistoryClick={(item) => console.log(item)}
                onDeleteClick={(item) => handleDelete(item)}
                headerPlaceholder={'Начни вводить название сервиса'}
            />

            {visibleRight && (
                <PreviewSidebar
                    visible={visibleRight !== null}
                    item={visibleRight}
                    onHide={() => setVisibleRight(null)}
                    headerPrefix={'Сервис: '}
                    previewPrefix={'services'}
                />
            )}
        </div>
    );
};

export const Route = createLazyFileRoute('/services')({
    component: Services,
});
