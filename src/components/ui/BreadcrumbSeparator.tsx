import React from 'react';

interface BreadcrumbSeparatorProps {
    style?: React.CSSProperties;
}

const BreadcrumbSeparator: React.FC<BreadcrumbSeparatorProps> = ({
    style = { color: '#999', margin: '0 0.5rem' }
}) => {
    return (
        <span style={style}>
            ›
        </span>
    );
};

export default BreadcrumbSeparator;
