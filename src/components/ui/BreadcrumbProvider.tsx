import React, { createContext, useContext } from 'react';
import { useLocation } from 'react-router-dom';

interface BreadcrumbItemData {
    label: string;
    href: string;
    current?: boolean;
}

interface BreadcrumbContextType {
    getBreadcrumbItems: (pathname: string) => BreadcrumbItemData[];
    currentPath: string;
}

const BreadcrumbContext = createContext<BreadcrumbContextType | undefined>(undefined);

interface BreadcrumbProviderProps {
    children: React.ReactNode;
    customRoutes?: Record<string, BreadcrumbItemData[]>;
}

const BreadcrumbProvider: React.FC<BreadcrumbProviderProps> = ({
    children,
    customRoutes = {}
}) => {
    const location = useLocation();

    const getBreadcrumbItems = (pathname: string): BreadcrumbItemData[] => {
        // Vérifier d'abord les routes personnalisées
        if (customRoutes[pathname]) {
            return customRoutes[pathname];
        }

        const baseItems: BreadcrumbItemData[] = [
            { label: 'Accueil', href: '/', current: false }
        ];

        switch (pathname) {
            case '/color':
                return [
                    ...baseItems,
                    { label: 'RGAA Couleurs', href: '/color', current: true }
                ];
            case '/typo':
                return [
                    ...baseItems,
                    { label: 'Typographie', href: '/typo', current: true }
                ];
            case '/smart-palette':
                return [
                    ...baseItems,
                    { label: 'Palette Intelligente', href: '/smart-palette', current: true }
                ];
            case '/rgaa-lab':
                return [
                    ...baseItems,
                    { label: 'RGAA Lab', href: '/rgaa-lab', current: true }
                ];
            case '/design-system':
                return [
                    ...baseItems,
                    { label: 'Design System', href: '/design-system', current: true }
                ];
            default:
                return baseItems;
        }
    };

    const value: BreadcrumbContextType = {
        getBreadcrumbItems,
        currentPath: location.pathname
    };

    return (
        <BreadcrumbContext.Provider value={value}>
            {children}
        </BreadcrumbContext.Provider>
    );
};

export const useBreadcrumb = (): BreadcrumbContextType => {
    const context = useContext(BreadcrumbContext);
    if (context === undefined) {
        throw new Error('useBreadcrumb must be used within a BreadcrumbProvider');
    }
    return context;
};

export default BreadcrumbProvider;
