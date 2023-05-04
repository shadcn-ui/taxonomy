'use client';

import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

import { AuthContext, useMagicAuth } from '@/hooks/auth/useAuthn';

const MagicAuth = ({ children }: { children: ReactNode }) => {
  const auth = useMagicAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export function GlobalContexts({ children }: { children: ReactNode }) {
  return (
    <RecoilRoot>
      <MagicAuth>{children}</MagicAuth>
    </RecoilRoot>
  );
}
