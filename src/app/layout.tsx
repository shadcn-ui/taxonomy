import { GlobalContexts } from '@/app/GlobalContexts';
import { ThemeProvider } from '@/components/theme-provider';
import { siteConfig } from '@/config/site';
import { sona } from '@/lib/utils';
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
    <html>
      <head />
      <body
        className={sona('min-h-screen bg-background font-sans antialiased')}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <GlobalContexts>{children}</GlobalContexts>
        </ThemeProvider>
      </body>
    </html>
  );
}
