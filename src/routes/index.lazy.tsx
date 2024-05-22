import { createLazyFileRoute } from '@tanstack/react-router';
import { NavTabs } from '../components/NavTabs';

const Index = () => {
    return (
        <div className="p-2">
            <NavTabs />
        </div>
    );
};

export const Route = createLazyFileRoute('/')({
    component: Index,
});
