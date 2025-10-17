

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div
            style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '4rem',
                width: '100%',
                boxSizing: 'border-box'
            }}
            className="page-wrapper"
        >
            {children}
        </div>
    );
};

export default PageWrapper;
