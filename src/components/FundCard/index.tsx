import { useState, useContext } from 'react';

import { MdAddCircle, MdAddCircleOutline } from 'react-icons/md';

import { Container, Content, FundTitle, Info, Row, Selected } from './styles';

import IFund from 'interfaces/IFund';
import { SelectedFundsContext } from 'contexts/SelectedFunds';

interface FundCardProps {
  fund: IFund;
}

function FundCard({ fund }: FundCardProps) {
  const { addSelectedFund, removeSelectedFund } = useContext(SelectedFundsContext);

  const [selected, setSelected] = useState(false);

  function handleSelect(fund: IFund) {
    if (!selected) {
      addSelectedFund(fund)
    } else {
      removeSelectedFund(fund.razaoSocial)
    }

    setSelected(!selected);
  }

  return (
    <Container>
      <Content>
        <Row marginBottom="12px">
          <FundTitle>{fund.razaoSocial}</FundTitle>
          <Selected onClick={() => handleSelect(fund)}>
            {selected ? (
              <>
                <span>Selecionado</span>
                <MdAddCircle size={20} className="iconSelected" />
              </>
            ) : (
              <MdAddCircleOutline size={20} className="iconNotSelected" />
            )}
          </Selected>
        </Row>
        <Row marginBottom="4px">
          <Info>
            <p>CNPJ</p>
            <span>{fund.cnpj}</span>
          </Info>
          <Info alignRight>
            <p>Classe</p>
            <span>{fund.classe}</span>
          </Info>
        </Row>
        <Row>
          <Info>
            <p>Patrimônio Líquido</p>
            <span>{fund.patrimonioLiquido}</span>
          </Info>
          <Info alignRight>
            <p>Cotistas</p>
            <span>{fund.cotistas}</span>
          </Info>
        </Row>
      </Content>
    </Container>
  );
}

export default FundCard;
