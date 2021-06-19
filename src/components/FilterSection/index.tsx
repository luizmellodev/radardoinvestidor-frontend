import { FilterContext } from 'contexts/Filters';
import styled from 'styled-components';
import { formatPatrimonio, formatCotistas } from 'utils/stringHelper';
import FilterButton from './FilterButton';
import { ButtonSection, Container } from './styles';
import {useContext} from 'react';

interface FilterSectionProps {
  type: "classes" | "patrimonio" | "cotistas";
  title: string;
  options:string[] | number[];
}  
const FilterTitle = styled.strong<any>`
font-family: Montserrat;
font-size: 17px;
line-height: 24px;
`;

export default function FilterSection({title, type, options }: FilterSectionProps) {

const {selectedFilters} = useContext(FilterContext);

const formatOption = (option: string | number) =>{
  if(typeof option === "string") 
    return option;  
  return type === "cotistas" ? formatCotistas(option) : formatPatrimonio(option);
} 

const checkOption = (value: string | number) =>{
  let status = false;
  if(type === "classes" && typeof value === "string")
    status = selectedFilters.classes.includes(value);
  else
    status = selectedFilters[type] === value;
    
  return status;
};

  return (
    <Container>
      <FilterTitle>{title}</FilterTitle>
      <ButtonSection>
        {options.map((option, index) => 
           <FilterButton type={type} key={index} value={option} label={formatOption(option)} status={checkOption(option)}/>
        )}
      </ButtonSection>
    </Container>
  );
};

