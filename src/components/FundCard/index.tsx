import { useContext } from 'react';

import {
  MdVisibility,
  MdVisibilityOff,
  MdAddCircle,
  MdAddCircleOutline,
} from 'react-icons/md';

import { Container, Content, FundTitle, Info, Row, IconButton } from './styles';

import IFund from 'interfaces/IFund';
import { FundsContext } from 'contexts/Funds';

interface FundCardProps {
  fund: IFund;
  isComparison?: boolean;
}

function FundCard({ fund, isComparison }: FundCardProps) {
  const { updateSelectedFund, updateHiddenFund } = useContext(FundsContext);

  function handleSelect(fund: IFund) {
    updateSelectedFund(fund.razaoSocial);
  }

  function handleHidden(fund: IFund) {
    updateHiddenFund(fund.razaoSocial);
  }

  return (
    <Container>
      <Content>
        <Row marginBottom="12px">
          <FundTitle>{fund.razaoSocial}</FundTitle>
          <IconButton onClick={() => handleSelect(fund)}>
            {fund.selected ? (
              <>
                <span>Selecionado</span>
                <MdAddCircle size={20} className="iconSelected" />
              </>
            ) : (
              <MdAddCircleOutline size={20} className="iconNotSelected" />
            )}
          </IconButton>
          {isComparison && (
            <IconButton onClick={() => handleHidden(fund)}>
              {fund.hidden ? (
                <MdVisibilityOff size={24} className="iconNotSelected" />
              ) : (
                <MdVisibility size={24} className="iconNotSelected" />
              )}
            </IconButton>
          )}
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
      {isComparison && <button>Detalhes</button>}
    </Container>
  );
}

export default FundCard;
