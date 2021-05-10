import { createContext, useState } from 'react';

import IFund from 'interfaces/IFund';

interface FundsContextValues {
  selectedFunds: IFund[];
  filteredFunds: (searchText: string) => IFund[];
  updateFundsList: (fundsList: IFund[]) => void;
  updateSelectedFund: (name: string) => void;
  updateHiddenFund: (name: string) => void;
}

// const fundList = [
//   {
//     denom_social: 'Warren games',
//     cnpj: '29.577.652/0001-75',
//     classe: 'Renda Variável',
//     patrimonioLiquido: '+ R$ 100 mi',
//     cotistas: '+ 50 mil',
//     selected: false,
//     hidden: false,
//   },
//   {
//     denom_social: 'Warren games 3',
//     cnpj: '29.577.652/0001-75',
//     classe: 'Renda Variável',
//     patrimonioLiquido: '+ R$ 100 mi',
//     cotistas: '+ 50 mil',
//     selected: false,
//     hidden: false,
//   },
//   {
//     razaoSocial: 'Warren tec 3',
//     cnpj: '29.577.652/0001-75',
//     classe: 'Renda Variável',
//     patrimonioLiquido: '+ R$ 100 mi',
//     cotistas: '+ 50 mil',
//     selected: false,
//     hidden: false,
//   },
//   {
//     razaoSocial: 'Warren tec 4',
//     cnpj: '29.577.652/0001-75',
//     classe: 'Renda Variável',
//     patrimonioLiquido: '+ R$ 100 mi',
//     cotistas: '+ 50 mil',
//     selected: false,
//     hidden: false,
//   },
//   {
//     razaoSocial: 'Warren tec 5',
//     cnpj: '29.577.652/0001-75',
//     classe: 'Renda Variável',
//     patrimonioLiquido: '+ R$ 100 mi',
//     cotistas: '+ 50 mil',
//     selected: false,
//     hidden: false,
//   },
//   {
//     razaoSocial: 'Warren tec 6',
//     cnpj: '29.577.652/0001-75',
//     classe: 'Renda Variável',
//     patrimonioLiquido: '+ R$ 100 mi',
//     cotistas: '+ 50 mil',
//     selected: false,
//     hidden: false,
//   },
// ];

export const FundsContext = createContext({} as FundsContextValues);

export const FundsProvider: React.FC = ({ children }) => {
  const [funds, setFunds] = useState([] as any[]);

  const updateFundsList = (fundsList: IFund[]) => {
    const fundsListWithState = fundsList.map((fund) => ({
      ...fund,
      selected: false,
      hidden: false,
    }));

    console.log('COM ESTADO', fundsListWithState);

    setFunds(fundsListWithState);
  };

  const selectedFunds = funds.filter((fund) => fund.selected);

  const filteredFunds = (searchText: string) => {
    const searchTextToLowerCase = searchText.toLocaleLowerCase();

    const filteredFundList = funds.filter(
      (fund) =>
        fund.denom_social.toLowerCase().includes(searchTextToLowerCase) &&
        !fund.selected
    );

    return filteredFundList;
  };

  const updateSelectedFund = (name: string) => {
    const fundIndex = funds.findIndex((fund) => fund.denom_social === name);
    const fundToUpdate = funds[fundIndex];

    fundToUpdate.selected = !fundToUpdate.selected;

    const newFunds = [...funds];
    newFunds[fundIndex] = fundToUpdate;

    setFunds(newFunds);
  };

  const updateHiddenFund = (name: string) => {
    const fundIndex = funds.findIndex((fund) => fund.denom_social === name);
    const fundToUpdate = funds[fundIndex];

    fundToUpdate.hidden = !fundToUpdate.hidden;

    const newFunds = [...funds];
    newFunds[fundIndex] = fundToUpdate;

    setFunds(newFunds);
  };

  return (
    <FundsContext.Provider
      value={{
        selectedFunds,
        filteredFunds,
        updateFundsList,
        updateSelectedFund,
        updateHiddenFund,
      }}
    >
      {children}
    </FundsContext.Provider>
  );
};
