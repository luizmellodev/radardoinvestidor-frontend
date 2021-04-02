import { ReactNode, useState } from 'react';

import { MdAddCircle, MdAddCircleOutline } from 'react-icons/md';

import { Container, Content, FundTitle, Info, Row, Selected } from './styles';

interface FundCardProps {
  children: ReactNode;
}

function FundCard({ children }: FundCardProps) {
  const [selected, setSelected] = useState(false);
  function handleSelect() {
    setSelected(!selected);
  }
  return (
    <Container>
      <Content>
        <Row marginBottom="12px">
          <FundTitle>FundCard Title</FundTitle>
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
            <span>29.577.652/0001-75</span>
          </Info>
          <Info alignRight>
            <p>Classe</p>
            <span>Renda Variável</span>
          </Info>
        </Row>
        <Row>
          <Info>
            <p>Patrimônio Líquido</p>
            <span>+ R$ 100 mi</span>
          </Info>
          <Info alignRight>
            <p>Cotistas</p>
            <span>+ 50 mil</span>
          </Info>
        </Row>
        {children}
      </Content>
    </Container>
  );
}

export default FundCard;
