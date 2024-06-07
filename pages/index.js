// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '1rem' }}>
      <h1>Welcome to the Login App</h1>
      <Link href="/login">
        <a style={{ padding: '0.5rem 1rem', backgroundColor: '#0070f3', color: '#fff', textDecoration: 'none' }}>Go to Login</a>
      </Link>
    </div>
  );
}
