import { createContext, useState } from 'react';

interface FundsContextValues {
  selectedFunds: any[];
  filteredFunds: any[];
  updateFundsList: (fundsList: any[]) => void;
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
  const [selectedNames, setSelectedNames] = useState([] as string[]);
  const [hiddenNames, setHiddenNames] = useState([] as string[]);

  const updateFundsList = (fundsList: any[]) => {
    const fundsListWithState = fundsList.map((fund) => ({
      ...fund,
      selected: selectedNames.includes(fund.denom_social),
      hidden: hiddenNames.includes(fund.denon_social),
    }));

    setFunds(fundsListWithState);
  };

  const selectedFunds = funds.filter((fund) => fund.selected);
  const filteredFunds = funds.filter((fund) => !fund.selected);

  const updateSelectedFund = (name: string) => {
    const fundIndex = funds.findIndex((fund) => fund.denom_social === name);
    const fundToUpdate = funds[fundIndex];

    fundToUpdate.selected = !fundToUpdate.selected;

    const newFunds = [...funds];
    newFunds[fundIndex] = fundToUpdate;

    const filterSelectedFunds = newFunds.filter((fund) => fund.selected);
    const selectedFundNames = filterSelectedFunds.map(
      (fund) => fund.denom_social
    );

    setFunds(newFunds);
    setSelectedNames(selectedFundNames);
  };

  const updateHiddenFund = (name: string) => {
    const fundIndex = funds.findIndex((fund) => fund.denom_social === name);
    const fundToUpdate = funds[fundIndex];

    fundToUpdate.hidden = !fundToUpdate.hidden;

    const newFunds = [...funds];
    newFunds[fundIndex] = fundToUpdate;

    const filterHiddenFunds = newFunds.filter((fund) => fund.hidden);
    const hiddenFundNames = filterHiddenFunds.map((fund) => fund.denom_social);

    console.log(hiddenFundNames);

    setFunds(newFunds);
    setHiddenNames(hiddenFundNames);
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
