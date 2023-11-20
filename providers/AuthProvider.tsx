import { createContext, useEffect, useState } from 'react';
import { supabase } from '../config/supabase';
import { Session } from '@supabase/supabase-js';

type AuthContextProps = {
  user: boolean | null;
  session: Session | null;
};

export const AuthContext = createContext<Partial<AuthContextProps>>({});

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<boolean | null>();
  const [session, setSession] = useState<Session | null>();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(async (e, s) => {
      console.log(`Supabase auth event`, e, s);
      setSession(s);
      setUser(!!s);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [user]);
  return <AuthContext.Provider value={{ user, session }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
