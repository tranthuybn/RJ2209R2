import { Inbox, Today, Upcoming, FilterLabels } from '../pages';
import { DefaultLayout } from '../components/Layout';
const routes = [
    {
        path: '/inbox',
        component: Inbox,
        layout: DefaultLayout,
    },
    {
        path: '/',
        component: DefaultLayout,
        index: true,
    },
    {
        path: '/today',
        component: Today,
        layout: DefaultLayout,
    },
    {
        path: '/upcoming',
        component: Upcoming,
        layout: DefaultLayout,
    },
    {
        path: '/filterLabels',
        component: FilterLabels,
        layout: DefaultLayout,
    },
];
export default routes;
