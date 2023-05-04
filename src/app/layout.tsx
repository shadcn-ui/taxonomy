import { GlobalContexts } from '@/app/GlobalContexts';
import { siteConfig } from '@/config/site';
import '@/styles/globals.css';
import { type Metadata } from 'next';

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <head />
      <body>
        <GlobalContexts>{children}</GlobalContexts>
      </body>
    </html>
  );
}
