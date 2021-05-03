import { createContext, useState, useEffect } from 'react';

import IFund from 'interfaces/IFund';

interface FundsContextValues {
  foundedFunds: IFund[];
  selectedFunds: IFund[];
  updateSelectedFund: (name: string, selected: boolean) => void;
  updateHiddenFund: (name: string) => void;
  filterFundByName: (searchText: string) => void;
}

const fundList = [
  {
    razaoSocial: 'Warren games',
    cnpj: '29.577.652/0001-75',
    classe: 'Renda Variável',
    patrimonioLiquido: '+ R$ 100 mi',
    cotistas: '+ 50 mil',
    selected: false,
    hidden: false,
  },
  {
    razaoSocial: 'Warren games 3',
    cnpj: '29.577.652/0001-75',
    classe: 'Renda Variável',
    patrimonioLiquido: '+ R$ 100 mi',
    cotistas: '+ 50 mil',
    selected: false,
    hidden: false,
  },
  {
    razaoSocial: 'Warren tec 3',
    cnpj: '29.577.652/0001-75',
    classe: 'Renda Variável',
    patrimonioLiquido: '+ R$ 100 mi',
    cotistas: '+ 50 mil',
    selected: false,
    hidden: false,
  },
  {
    razaoSocial: 'Warren tec 4',
    cnpj: '29.577.652/0001-75',
    classe: 'Renda Variável',
    patrimonioLiquido: '+ R$ 100 mi',
    cotistas: '+ 50 mil',
    selected: false,
    hidden: false,
  },
  {
    razaoSocial: 'Warren tec 5',
    cnpj: '29.577.652/0001-75',
    classe: 'Renda Variável',
    patrimonioLiquido: '+ R$ 100 mi',
    cotistas: '+ 50 mil',
    selected: false,
    hidden: false,
  },
  {
    razaoSocial: 'Warren tec 6',
    cnpj: '29.577.652/0001-75',
    classe: 'Renda Variável',
    patrimonioLiquido: '+ R$ 100 mi',
    cotistas: '+ 50 mil',
    selected: false,
    hidden: false,
  },
];

export const FundsContext = createContext({} as FundsContextValues);

export const FundsProvider: React.FC = ({ children }) => {
  const [foundedFunds, setFoundedFunds] = useState(fundList);
  const [selectedFunds, setSelectedFunds] = useState([] as IFund[]);

  const filterFundByName = (searchText: string) => {
    const searchTextToLowerCase = searchText.toLocaleLowerCase();
    const filteredFundList = fundList.filter((fund) =>
      fund.razaoSocial.toLowerCase().includes(searchTextToLowerCase)
    );

    setFoundedFunds(filteredFundList);
  };

  const updateSelectedFund = (name: string, selected: boolean) => {
    const fundList = selected ? selectedFunds : foundedFunds;
    const fundIndex = fundList.findIndex((fund) => fund.razaoSocial === name);

    const fundToUpdate = fundList[fundIndex];

    fundToUpdate.selected = !fundToUpdate.selected;

    const newSelectedFunds = foundedFunds.filter((fund) => fund.selected);
    const newFoundedFunds = foundedFunds.filter((fund) => !fund.selected);

    setSelectedFunds(newSelectedFunds);
    setFoundedFunds(newFoundedFunds);
  };
  const updateHiddenFund = (name: string) => {
    const fundIndex = selectedFunds.findIndex(
      (fund) => fund.razaoSocial === name
    );
    const fundToUpdate = selectedFunds[fundIndex];

    fundToUpdate.hidden = !fundToUpdate.hidden;

    const newFunds = [...selectedFunds];
    newFunds[fundIndex] = fundToUpdate;

    setSelectedFunds(newFunds);
  };

  return (
    <FundsContext.Provider
      value={{
        foundedFunds,
        updateSelectedFund,
        filterFundByName,
        selectedFunds,
        updateHiddenFund,
      }}
    >
      {children}
    </FundsContext.Provider>
  );
};
