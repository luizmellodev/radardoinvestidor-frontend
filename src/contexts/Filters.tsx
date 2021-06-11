import { createContext, useState} from 'react';
// import { useRouter } from 'next/router';

interface FilterContextValues {
    selectedFilters: IFilter;
    clearFilter: () => void;
    updateFilter: (fieldSelected: string, value: string|number) => void;
  }

export interface IFilter {
    classe: string,
    patrimonio: Number,
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

    const clearFilter = () => setSelectedFilters(FilterEmpty);
    
    const updateFilter = (fieldSelected: string, value: string|number) => {
        var newFilter = Object.assign(selectedFilters);
        newFilter[fieldSelected] = value;
        setSelectedFilters(newFilter);
    };

    return (
        <FilterContext.Provider
          value={{
            selectedFilters,
            clearFilter,
            updateFilter
          }}
        >
          {children}
        </FilterContext.Provider>
  );
};