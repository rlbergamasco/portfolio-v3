import { HomePage, ProjectPage } from 'pages';
import { projects } from 'utils/constants';

const paths = ['rabbitavenger', 'goodreads', 'infographics', 'threads', 'energy', 'xrslider'];
export const projectPages = paths.map(item => ({ path: `/${item}`, element: <ProjectPage project={projects[projects.indexOf(projects.find(el => el.path === `/${item}`))]} /> }));

export const ROUTES = [
    {
        path: '/',
        element: <HomePage />,
    },
    ...projectPages
];