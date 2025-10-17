import React from 'react';
import { useColors } from '../../context/ColorContext';
import CustomButton from './CustomButton';

interface BreadcrumbItemProps {
    label: string;
    href: string;
    isCurrent?: boolean;
    onClick?: () => void;
}

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
    label,
    href,
    isCurrent = false,
    onClick
}) => {
    const { palette } = useColors();

    if (isCurrent) {
        return (
            <span
                style={{
                    color: palette.primary,
                    fontWeight: 600,
                    textDecoration: 'none'
                }}
                aria-current="page"
            >
                {label}
            </span>
        );
    }

    return (
        <CustomButton
            label={label}
            variant="ghost"
            color="secondary"
            onClick={onClick || (() => window.location.href = href)}
            style={{
                padding: '0.25rem 0.5rem',
                fontSize: '0.9rem',
                textDecoration: 'none',
                color: '#666'
            }}
        />
    );
};

export default BreadcrumbItem;
