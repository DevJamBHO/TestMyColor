

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
            }}
        >
            {children}
        </div>
    );
};

export default PageWrapper;
