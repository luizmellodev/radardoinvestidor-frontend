import { createContext, useState, useEffect } from 'react';

interface FundsContextValues {
  selectedFunds: any[];
  foundedFunds: any[];
  selectFund: (name: string) => void;
  unselectFund: (name: string) => void;
  updateFetchedFunds: (fundsList: any[]) => void;
  updateHiddenFund: (name: string) => void;
  resetHiddenState: () => void;
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
  const [fetchedFunds, setFetchedFunds] = useState([] as any[]);
  const [selectedFunds, setSelectedFunds] = useState([] as any[]);
  const [foundedFunds, setFoundedFunds] = useState([] as any[]);

  const updateFetchedFunds = (fundsList: any[]) => {
    setFetchedFunds(fundsList);
  };

  const selectFund = (name: string) => {
    const fundsWithoutSelectedName = foundedFunds.filter(
      (fund) => fund.denom_social !== name
    );

    const fundWithSelectedName = foundedFunds.filter(
      (fund) => fund.denom_social === name
    );

    const newSelectedFunds = [...selectedFunds, ...fundWithSelectedName];

    setFoundedFunds(fundsWithoutSelectedName);
    setSelectedFunds(newSelectedFunds);
  };

  const unselectFund = (name: string) => {
    const fundsWithoutSelectedName = selectedFunds.filter(
      (fund) => fund.denom_social !== name
    );

    const fundWithSelectedName = selectedFunds.filter(
      (fund) => fund.denom_social === name
    );

    const newFoundedFunds = [...foundedFunds, ...fundWithSelectedName];

    setSelectedFunds(fundsWithoutSelectedName);
    setFoundedFunds(newFoundedFunds);
  };

  const updateHiddenFund = (name: string) => {
    const fundIndex = selectedFunds.findIndex(
      (fund) => fund.denom_social === name
    );

    const fundToUpdate = selectedFunds[fundIndex];

    fundToUpdate.hidden = !fundToUpdate.hidden;

    const newFunds = [...selectedFunds];
    newFunds[fundIndex] = fundToUpdate;

    setSelectedFunds(newFunds);
  };

  const resetHiddenState = () => {
    const newSelectedFunds = selectedFunds.map((fund) => ({
      ...fund,
      hidden: false,
    }));

    setSelectedFunds(newSelectedFunds);
  };

  useEffect(() => {
    const selectedNames = selectedFunds.map((fund) => fund.denom_social);

    const fundsListWithState = fetchedFunds.map((fund) => ({
      ...fund,
      hidden: false,
    }));

    const newFoundedFunds = fundsListWithState.filter(
      (fund) => !selectedNames.includes(fund.denom_social)
    );

    setFoundedFunds(newFoundedFunds);
  }, [fetchedFunds, selectedFunds]);

  return (
    <FundsContext.Provider
      value={{
        selectedFunds,
        foundedFunds,
        selectFund,
        unselectFund,
        updateFetchedFunds,
        updateHiddenFund,
        resetHiddenState,
      }}
    >
      {children}
    </FundsContext.Provider>
  );
};
