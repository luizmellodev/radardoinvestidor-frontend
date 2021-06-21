import { useEffect } from 'react';
import { createContext, useState } from 'react';

interface FilterContextValues {
  selectedFilters: IFilter;
  clearFilter: () => void;
  updateCacheFilter: (
    fieldSelected: 'classes' | 'patrimonio' | 'cotistas',
    value: string | number
  ) => void;
}

export interface IFilter {
  classes: string[];
  patrimonio: number;
  cotistas: number;
}
export const FilterEmpty: IFilter = {
  classes: [],
  patrimonio: 0,
  cotistas: 0,
};
export const FilterContext = createContext({} as FilterContextValues);
export const FilterProvider: React.FC = ({ children }) => {
  const [selectedFilters, setSelectedFilters] = useState(
    FilterEmpty as IFilter
  );
  const clearFilter = () => setSelectedFilters(FilterEmpty);

  const updateCacheFilter = (
    fieldSelected: 'classes' | 'patrimonio' | 'cotistas',
    value: string | number
  ) => {
    const cache: IFilter = { ...selectedFilters };
    if (fieldSelected === 'classes' && typeof value === 'string') {
      if (selectedFilters.classes.includes(value)) {
        cache.classes = selectedFilters.classes.filter(
          (classe) => classe !== value
        );
      } else {
        cache.classes.push(value);
      }
    } else if (fieldSelected !== 'classes' && typeof value !== 'string') {
      cache[fieldSelected] === value
        ? (cache[fieldSelected] = 0)
        : (cache[fieldSelected] = value);
    }
    setSelectedFilters(cache);
  };
  useEffect(() => {
    console.log(
      'Equality ',
      JSON.stringify(selectedFilters) === JSON.stringify(FilterEmpty)
    );
    // console.log("Diferences ",selectedFilters.filter(FilterEmpty));
  }, [selectedFilters]);
  return (
    <FilterContext.Provider
      value={{
        selectedFilters,
        clearFilter,
        updateCacheFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
