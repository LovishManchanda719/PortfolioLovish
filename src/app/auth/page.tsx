"use client";
import dynamic from 'next/dynamic';

// Dynamically import the AuthPage component and disable SSR
const AuthPage = dynamic(() => import('@/components/auth/AuthPage'), { ssr: false });

export default function Authentication() {
  return <AuthPage />;
}
