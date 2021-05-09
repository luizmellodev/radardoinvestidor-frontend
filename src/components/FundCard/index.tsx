import { useContext } from 'react';

import {
  MdVisibility,
  MdVisibilityOff,
  MdAddCircle,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import {
  Container,
  Content,
  FundTitle,
  Info,
  Row,
  IconButton,
  Actions,
  FundFooter,
} from './styles';

import IFund from 'interfaces/IFund';
import { FundsContext } from 'contexts/Funds';
import Button from 'components/Button';

interface FundCardProps {
  fund: any;
  isComparison?: boolean;
  onClickDetails?: () => void;
}

function FundCard({ fund, isComparison, onClickDetails }: FundCardProps) {
  const { updateSelectedFund, updateHiddenFund } = useContext(FundsContext);

  function handleSelect(fund: any) {
    updateSelectedFund(fund.denom_social);
  }

  function handleHidden(fund: any) {
    updateHiddenFund(fund.denom_social);
  }

  return (
    <Container>
      <Content>
        <Row marginBottom="12px">
          <FundTitle isHidden={fund.hidden}>{fund.denom_social}</FundTitle>
          <Actions>
            {isComparison && (
              <IconButton onClick={() => handleHidden(fund)}>
                {fund.hidden ? (
                  <MdVisibilityOff size={24} />
                ) : (
                  <MdVisibility size={24} />
                )}
              </IconButton>
            )}
            <IconButton onClick={() => handleSelect(fund)}>
              {fund.selected ? (
                <MdDelete size={24}></MdDelete>
              ) : (
                <MdAddCircleOutline size={24} />
              )}
            </IconButton>
          </Actions>
        </Row>
        <Row marginBottom="4px">
          <Info>
            <p>CNPJ</p>
            <span>{fund.cnpj_auditor}</span>
          </Info>
          <Info alignRight>
            <p>Classe</p>
            <span>{fund.classe}</span>
          </Info>
        </Row>
        <Row>
          <Info>
            <p>Patrimônio Líquido</p>
            <span>{fund.vl_patrim_liq}</span>
          </Info>
          <Info alignRight>
            <p>Cotistas</p>
            <span>{fund.tp_fundo}</span>
          </Info>
        </Row>
        {isComparison && (
          <FundFooter>
            <Button disabled={fund.hidden} onClick={onClickDetails}>
              Detalhes
            </Button>
          </FundFooter>
        )}
      </Content>
    </Container>
  );
}

export default FundCard;
