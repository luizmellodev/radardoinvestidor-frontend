import { createContext, useState} from 'react';
// import { useRouter } from 'next/router';

interface FilterContextValues {
    selectedFilters: IFilter;
    hasStartedByHome: boolean;
    clearFilter: () => void;
    updateHasStartedByHome: () => void;
    updateFilter: (fieldSelected: string, value: string|number) => void;
  }

export interface IFilter {
    classe: string, 
    patrimonio: number,
    cotistas: number
}
export const FilterContext = createContext({} as FilterContextValues);

// export const NavegatingToFilter = () => useRouter().push('src/pages/filtro');
export const FilterProvider: React.FC = ({children}) =>{
    const FilterEmpty: IFilter = {
      classe: "",
      patrimonio: 0,
      cotistas: 0
    };
    const [selectedFilters, setSelectedFilters] = useState(FilterEmpty as IFilter);
    const [hasStartedByHome,setHasStartedByHome] = useState(false);

    const clearFilter = () => setSelectedFilters(FilterEmpty);
    const updateHasStartedByHome = () => {
      console.log(hasStartedByHome)
      setHasStartedByHome(!hasStartedByHome)
    };

    const updateFilter = (fieldSelected: string, value: string|number) => {
        var newFilter = Object.assign(selectedFilters);
        newFilter[fieldSelected] = value;
        setSelectedFilters(newFilter);
    };

    return (
        <FilterContext.Provider
          value={{
            selectedFilters,
            hasStartedByHome,
            clearFilter,
            updateFilter,
            updateHasStartedByHome
          }}
        >
          {children}
        </FilterContext.Provider>
  );
};