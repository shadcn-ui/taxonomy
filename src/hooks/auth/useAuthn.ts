import { BlockTag, JsonRpcSigner } from '@ethersproject/providers';
import { ConnectExtension } from '@magic-ext/connect';
import { InstanceWithExtensions, SDKBase } from '@magic-sdk/provider';
import { User } from '@prisma/client';
import { ethers } from 'ethers';
import { Magic } from 'magic-sdk';
import { useRouter } from 'next/navigation';
import {
  createContext,
  useCallback,
  useContext,
  useEffect, useState
} from 'react';


import config from '@/config';
const { web3auth } = config;

type UseMagicAuthOpts = {
  account: string | null;
  getAddress: (() => Promise<string>) | null;
  getBalance:
    | ((blockTag?: BlockTag | undefined) => Promise<ethers.BigNumber>)
    | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isLoggingIn: boolean;
  login: () => void;
  logout: () => void;
  showWallet: (() => Promise<boolean>) | null;
  signer: JsonRpcSigner | null;
  user: Partial<User> | null;
};

  const [magic, setMagic] = useState<InstanceWithExtensions<
    SDKBase,
    ConnectExtension[]
  > | null>(null);
  const router = useRouter();
  const [provider, setProvider] =
    useState<ethers.providers.Web3Provider | null>(null);
  const [account, setAccount] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(true); // default to true for initial info ask
  const [signer, setSigner] = useState<JsonRpcSigner | null>(null);
  // const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
  // const setNewUserIsOnboarding = useSetRecoilState(newUserIsOnboardingState);

  // const isAuthenticated = useMemo(() => !!currentUser, [currentUser]);

  const removeUserInfo = useCallback(() => {
    setCurrentUser(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const askForUserInfo = useCallback(async () => {
    let user = await getCurrentlyLoggedInUser().catch(() => undefined);
    if (!user) {
      setIsLoggingIn(false);
      return;
    }

    if (!user.email) {
      const info = (await magic?.connect
        .requestUserInfo()
        .catch(() => undefined)) as undefined | { email: string };
      if (info?.email) {
        user = await updateUserEmail(info.email);
      }
    }

    setCurrentUser(user);

    if (!user.hasOnboarded) {
      setNewUserIsOnboarding(true);
      router.push('/onboarding');
    }

    setIsLoggingIn(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [magic]);

  const login = useCallback(async () => {
    if (!provider) return;

    setIsLoggingIn(true);

    try {
      const signer = provider.getSigner();
      setSigner(signer);
      const address = await signer.getAddress();
      setAccount(address);

      await askForUserInfo();
    } catch (error) {
      // TODO: Add error messaging in the event that any of these async operations fail.
    }
    setIsLoggingIn(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [provider, magic]);

  const logout = useCallback(async () => {
    magic?.connect.disconnect();
    setAccount(null);
    removeUserInfo();
  }, [magic, removeUserInfo]);

  useEffect(() => {
    const magic = new Magic(web3auth.key, {
      network: web3auth.chain,
      locale: 'en_US',
      extensions: [new ConnectExtension()],
    });

    const newProvider = new ethers.providers.Web3Provider(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      magic.rpcProvider as any
    );

    setMagic(magic);
    setProvider(newProvider);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Default to asking for user info
  useEffect(() => {
    if (!magic || !provider) return;

    askForUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [magic, provider]);

  return {
    account,
    getAddress: signer?.getAddress.bind(signer) ?? null,
    getBalance: signer?.getBalance.bind(signer) ?? null,
    isAuthenticated,
    isLoading: !provider,
    isLoggingIn,
    login,
    logout,
    showWallet: magic?.connect?.showWallet.bind(magic?.connect) ?? null,
    signer,
    user: currentUser,
  };
};

export const AuthContext = createContext<UseMagicAuthOpts | null>(null);

export const useAuthContext = () => useContext(AuthContext);
