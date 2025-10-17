import React from 'react';
import BreadcrumbItem from './BreadcrumbItem';
import BreadcrumbSeparator from './BreadcrumbSeparator';

interface BreadcrumbItemData {
    label: string;
    href: string;
    current?: boolean;
}

interface BreadcrumbListProps {
    items: BreadcrumbItemData[];
    onItemClick?: (href: string) => void;
    showSeparator?: boolean;
    separator?: React.ReactNode;
}

const BreadcrumbList: React.FC<BreadcrumbListProps> = ({
    items,
    onItemClick,
    showSeparator = true,
    separator = <BreadcrumbSeparator />
}) => {
    return (
        <>
            {items.map((item, index) => (
                <React.Fragment key={item.href}>
                    {index > 0 && showSeparator && separator}
                    <BreadcrumbItem
                        label={item.label}
                        href={item.href}
                        isCurrent={item.current}
                        onClick={onItemClick ? () => onItemClick(item.href) : undefined}
                    />
                </React.Fragment>
            ))}
        </>
    );
};

export default BreadcrumbList;
