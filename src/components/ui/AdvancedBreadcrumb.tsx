import React from 'react';
import { useLocation } from 'react-router-dom';
import BreadcrumbContainer from './BreadcrumbContainer';
import BreadcrumbList from './BreadcrumbList';
import BreadcrumbSeparator from './BreadcrumbSeparator';
import { useBreadcrumb } from './BreadcrumbProvider';

interface AdvancedBreadcrumbProps {
    customItems?: Array<{
        label: string;
        href: string;
        current?: boolean;
    }>;
    showHome?: boolean;
    customSeparator?: React.ReactNode;
    onItemClick?: (href: string) => void;
    style?: React.CSSProperties;
    className?: string;
}

const AdvancedBreadcrumb: React.FC<AdvancedBreadcrumbProps> = ({
    customItems,
    showHome = true,
    customSeparator,
    onItemClick,
    style,
    className
}) => {
    const location = useLocation();
    const { getBreadcrumbItems } = useBreadcrumb();

    const getItems = () => {
        if (customItems) {
            return showHome
                ? [{ label: 'Accueil', href: '/', current: false }, ...customItems]
                : customItems;
        }
        return getBreadcrumbItems(location.pathname);
    };

    const breadcrumbItems = getItems();

    // Ne pas afficher le breadcrumb s'il n'y a qu'un seul élément (et que showHome est false)
    if (breadcrumbItems.length <= 1 && !showHome) {
        return null;
    }

    // Ne pas afficher le breadcrumb sur la page d'accueil
    if (location.pathname === '/' && showHome) {
        return null;
    }

    return (
        <BreadcrumbContainer style={style} className={className}>
            <BreadcrumbList
                items={breadcrumbItems}
                onItemClick={onItemClick}
                separator={customSeparator || <BreadcrumbSeparator />}
            />
        </BreadcrumbContainer>
    );
};

export default AdvancedBreadcrumb;
