import { createContext, useState, useEffect } from 'react';

import IFund from 'interfaces/IFund';

interface FundsContextValues {
  funds: IFund[];
  selectedFunds: IFund[];
  updateSelectedFund: (name: string) => void;
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
  const [funds, setFunds] = useState(fundList);

  const filterFundByName = (searchText: string) => {
    const searchTextToLowerCase = searchText.toLocaleLowerCase();
    const filteredFundList = fundList.filter((fund) => fund.razaoSocial.toLowerCase().includes(searchTextToLowerCase));

    setFunds(filteredFundList);
  }

  const updateSelectedFund = (name: string) => {
    const fundIndex = funds.findIndex((fund) => fund.razaoSocial === name);
    const fundToUpdate = funds[fundIndex];

    fundToUpdate.selected = !fundToUpdate.selected

    const newFunds = [...funds];
    newFunds[fundIndex] = fundToUpdate;

    setFunds(newFunds);
  }

  const selectedFunds = funds.filter((fund) => fund.selected);

  useEffect(() => {
    console.log('FUNDOS', funds)
  }, [funds])

  return (
    <FundsContext.Provider value={{
      funds,
      updateSelectedFund,
      filterFundByName,
      selectedFunds
    }}>
      {children}
    </FundsContext.Provider>
  )
}
