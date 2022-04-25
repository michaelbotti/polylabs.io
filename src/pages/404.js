import React from 'react';

import Layout from '../components/Sections/Layout';
import Loader from '../components/Sections/Loader';
import ErrorPage from '../components/404/ErrorPage';
import ToTop from '../components/Sections/ToTop';

const Custom404 = () => (
    <Layout pageTitle="Kora Labs - Page Not Found" colorSchema="../colors/blue.css">
        <Loader />
        <ErrorPage />
        <ToTop />
    </Layout>
);

export default Custom404;
