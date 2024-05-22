import { createLazyFileRoute } from '@tanstack/react-router';

const Reviwes = () => {
    return <div className="p-2">Ревью</div>;
};

export const Route = createLazyFileRoute('/reviwes')({
    component: Reviwes,
});
