import './globals.css';

export const metadata = {
  title: 'Lovish Manchanda',
  description: 'Portfolio Website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          {children}
      </body>
    </html>
  );
}
