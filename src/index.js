import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { UIProvider } from './context/UIContext';

import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ErrorPage from './pages/ErrorPage';

import './assets/css/variables.css'
import './assets/css/global.css'
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ServicesPage from './pages/ServicesPage';
import { DBProvider } from './context/DBContext';
import ArticlePage from './pages/ArticlePage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <HomePage/>,
                errorElement: <ErrorPage/>
            },
            {
                path: '/services',
                element: <ServicesPage/>,
                errorElement: <ErrorPage/>
            },
            {
                path: '/projects',
                element: <ProjectsPage/>,
                errorElement: <ErrorPage/>
            },
            {
                path: '/blog',
                children: [
                    {
                        path: '',
                        element: <BlogPage/>,
                    },
                    {
                        path: ':slug',
                        element: <ArticlePage/>,
                    }
                ],
                errorElement: <ErrorPage/>
            },
            {
                path: '/about',
                element: <AboutPage/>,
                errorElement: <ErrorPage/>
            },
            {   
                path: '/contact',
                element: <ContactPage/>,
                errorElement: <ErrorPage/>
            }
        ],
        errorElement: <ErrorPage/>
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <UIProvider>
        <DBProvider>
            <RouterProvider router={router}/>
        </DBProvider>
    </UIProvider>
);