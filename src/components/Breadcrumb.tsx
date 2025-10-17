import React from 'react';
import { useLocation } from 'react-router-dom';
import BreadcrumbContainer from './ui/BreadcrumbContainer';
import BreadcrumbList from './ui/BreadcrumbList';
import { useBreadcrumb } from './ui/BreadcrumbProvider';

const Breadcrumb: React.FC = () => {
    const location = useLocation();
    const { getBreadcrumbItems } = useBreadcrumb();

    const breadcrumbItems = getBreadcrumbItems(location.pathname);

    // Ne pas afficher le breadcrumb sur la page d'accueil
    if (location.pathname === '/' || breadcrumbItems.length <= 1) {
        return null;
    }

    return (
        <BreadcrumbContainer>
            <BreadcrumbList items={breadcrumbItems} />
        </BreadcrumbContainer>
    );
};

export default Breadcrumb;
