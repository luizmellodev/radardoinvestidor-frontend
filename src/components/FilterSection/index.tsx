import styled from 'styled-components';
import { formatPatrimonio, formatCotistas } from 'utils/stringHelper';
import FilterButton from './FilterButton';
import { ButtonSection, Container } from './styles';


interface FilterSectionProps {
  type: string;
  title: string;
  options:string[] | number[];
}

export default function FilterSection({title, type, options }: FilterSectionProps) {
  const FilterTitle = styled.strong<any>`
    font-family: Montserrat;
    font-size: 17px;
    line-height: 24px;
  `;
  const formatOptions = (option:string | number) =>{
    if(typeof option === "string") 
      return option;  
    return type === "cotistas" ? formatCotistas(option) : formatPatrimonio(option);
  }

  return (
    <Container>
      <FilterTitle>{title}</FilterTitle>
      <ButtonSection>
        {options.map((option, index) => <FilterButton type={type} key={index} value={option} label={formatOptions(option)}/>)}
      </ButtonSection>
    </Container>
  );
};

