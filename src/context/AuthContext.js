import { createContext, useContext, useState } from 'react';

const AuthContext = createContext('');

//Auth context
//Uye bilgisini tutmasi beklenir.
//Uye bilgisi tum uygulamadan ulasilabilir olmaktadir.
//Simdilik calismaz halde.Veritabani baglantisi gerekmektedir.

function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider({ children }) {
  const [user, setUser] = useState();

  const value = { user, setUser };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { useAuth, AuthProvider };
