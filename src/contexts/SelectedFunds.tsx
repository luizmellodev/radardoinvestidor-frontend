import { createContext, useState, useEffect } from 'react';

import IFund from 'interfaces/IFund';

interface SelectedFundsContextValues {
  selectedFunds: IFund[];
  addSelectedFund: (fund: IFund) => void;
  removeSelectedFund: (name: string) => void;
}

export const SelectedFundsContext = createContext({} as SelectedFundsContextValues);

export const SelectedFundsProvider: React.FC = ({ children }) => {
  const [selectedFunds, setSelectedFunds] = useState<IFund[]>([]);

  const addSelectedFund = (fund: IFund) => {
    const newSelectedFunds = [
      ...selectedFunds,
      fund
    ];

    setSelectedFunds(newSelectedFunds);
  }

  const removeSelectedFund = (name: string) => {
    const newSelectedFunds = selectedFunds.filter((fund) => fund.razaoSocial !== name);

    setSelectedFunds(newSelectedFunds);
  }

  useEffect(() => {
    console.log('FUNDOS SELECIONADOS', selectedFunds)
  }, [selectedFunds])

  return (
    <SelectedFundsContext.Provider value={{
      selectedFunds,
      addSelectedFund,
      removeSelectedFund,
    }}>
      {children}
    </SelectedFundsContext.Provider>
  )
}
