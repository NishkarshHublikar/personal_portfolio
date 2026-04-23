import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';

export default function NotFound() {
    return (
        <main>
            <Navbar />
            <ThemeToggle />
            <div style={{
                height: '80vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: '0 2rem'
            }}>
                <h1 style={{ fontSize: '6rem', marginBottom: '1rem', color: 'var(--primary)' }}>404</h1>
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Oops! Page Not Found</h2>
                <p style={{ maxWidth: '500px', marginBottom: '3rem', opacity: 0.8 }}>
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <Link href="/" style={{
                    padding: '1rem 2.5rem',
                    background: 'var(--primary)',
                    color: 'white',
                    borderRadius: '50px',
                    fontWeight: '600',
                    boxShadow: '0 4px 14px 0 rgba(99, 102, 241, 0.39)',
                    transition: 'all 0.3s ease'
                }}>
                    Go Back Home
                </Link>
            </div>
            <Footer />
        </main>
    );
}
