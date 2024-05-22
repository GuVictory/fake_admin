import { createLazyFileRoute } from '@tanstack/react-router';

const Admin = () => {
    return <div className="p-2">Админка</div>;
};

export const Route = createLazyFileRoute('/admin')({
    component: Admin,
});
