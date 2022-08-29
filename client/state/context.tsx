import { createContext, useContext, useEffect, useState } from "react";
import { LayoutInterface } from "../../shared/modal/Common/interface";
// @ts-ignore
import web3 from "../ethereum/web3";

const AppContext = createContext<any | null>(null);

export const AppContextWrapper = ({ children }: LayoutInterface) => {
  const [accounts, cacheAccounts] = useState([]);

  useEffect(() => {
    const fetchAccounts = async () => {
      // @ts-ignore
      const web3Accounts = await web3.eth.getAccounts();
      cacheAccounts(web3Accounts);
    };

    fetchAccounts();
  }, []);

  return (
    <AppContext.Provider value={{ accounts }}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
