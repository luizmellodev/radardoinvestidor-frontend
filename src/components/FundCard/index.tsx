import { forwardRef, useContext } from 'react';
import {formatCnpj, formatCurrency} from 'utils/stringHelper';

import {
  MdVisibility,
  MdVisibilityOff,
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

import { FundsContext } from 'contexts/Funds';
import Button from 'components/Button';

interface FundCardProps {
  fund: any;
  isComparison?: boolean;
  isSelected?: boolean;
  index?: number;
  onClickDetails?: () => void;
}

const FundCard = forwardRef<HTMLDivElement, FundCardProps>(({
  fund,
  isComparison,
  isSelected,
  onClickDetails,
  index,
}, ref) => {
  const { updateHiddenFund, selectFund, unselectFund, selectedFunds } = useContext(
    FundsContext
  );

  function handleSelect(fund: any) {
    if (isSelected) {
      unselectFund(fund.denom_social);
    } else {
      selectFund(fund.denom_social);
    }
  }

  function handleHidden(fund: any) {
    updateHiddenFund(fund.denom_social);
  }

  return (
    <Container ref={ref}>
      <Content>
        <Row marginBottom="12px">
          <FundTitle index={index} isHidden={fund.hidden}>
            {fund.denom_social}
          </FundTitle>
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
              {isSelected ? (
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
            <span>{fund.cnpj_fundo}</span>
          </Info>
          <Info alignRight>
            <p>Classe</p>
            <span>{fund?.classe ? fund.classe : "Não informado"}</span>
          </Info>
        </Row>
        <Row>
          <Info>
            <p>Patrimônio Líquido</p>
            <span>{formatCurrency(fund.vl_patrim_liq)}</span>
          </Info>
          <Info alignRight>
            <p>Cotistas</p>
            <span>{fund?.nr_cotst ? fund.nr_cotst : "Não informado"}</span>
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
})

export default FundCard;
