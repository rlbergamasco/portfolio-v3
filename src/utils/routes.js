import { HomePage, ProjectPage } from 'pages';
import { projects } from 'utils/constants';

export const ROUTES = [
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/newproject',
        element: <ProjectPage project={projects[projects.indexOf(projects.find(el => el.path === '/newproject'))]} />,
    },
    {
        path: '/goodreads',
        element: <ProjectPage project={projects[projects.indexOf(projects.find(el => el.path === '/goodreads'))]} />,
    },
    {
        path: '/infographics',
        element: <ProjectPage project={projects[projects.indexOf(projects.find(el => el.path === '/infographics'))]} />,
    },
    {
        path: '/threads',
        element: <ProjectPage project={projects[projects.indexOf(projects.find(el => el.path === '/threads'))]} />,
    },
    {
        path: '/energy',
        element: <ProjectPage project={projects[projects.indexOf(projects.find(el => el.path === '/energy'))]} />,
    },
    {
        path: '/xrslider',
        element: <ProjectPage project={projects[projects.indexOf(projects.find(el => el.path === '/xrslider'))]} />,
    },
];