'use client';

import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

import { AuthContext, usePrivyAuth } from '@/hooks/auth/useAuthn';

const PrivyAuth = ({ children }: { children: ReactNode }) => {
  const auth = usePrivyAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export function GlobalContexts({ children }: { children: ReactNode }) {
  return (
    <RecoilRoot>
      <PrivyAuth>{children}</PrivyAuth>
    </RecoilRoot>
  );
}
