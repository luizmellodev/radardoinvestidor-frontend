import { ReactNode, useState } from 'react';

import { MdAddCircle, MdAddCircleOutline } from 'react-icons/md';

import { Container, Content, FundTitle, Info, Row, Selected } from './styles';

interface Fund {
  razaoSocial: string;
  cnpj: string;
  classe: string;
  patrimonioLiquido: string;
  cotistas: string;
}
interface FundCardProps {
  fund: Fund;
}

function FundCard({ fund }: FundCardProps) {
  const [selected, setSelected] = useState(false);
  function handleSelect() {
    setSelected(!selected);
  }
  return (
    <Container>
      <Content>
        <Row marginBottom="12px">
          <FundTitle>{fund.razaoSocial}</FundTitle>
          <Selected onClick={handleSelect}>
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
