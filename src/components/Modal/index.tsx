import { MdClose } from 'react-icons/md';
import {formatCurrency, formatDate} from 'utils/stringHelper';

import { Container, Header, Body, Footer, FundTitle, Info, ModalSection, CharacteristicRow } from './styles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  details: any;
}

function Modal({isOpen, onClose, details }: ModalProps) {
  if (!isOpen) return null;
  return (
    <Container>
      <Header>
        <p>Detalhes do produto</p>
        <button onClick={onClose}>
          <MdClose size={24} />
        </button>
      </Header>
      <Body>
      <FundTitle>{details.denom_social}</FundTitle>
        <Info>
          <p>CNPJ</p>
          <span>{details.cnpj_fundo}</span>
        </Info>
        <Info>
          <p>Administrador</p>
          <span>{details?.admin ? `${details.admin}` : "Não Informado"}</span>
        </Info>
        <Info>
          <p>Tipo de fundo</p>
          <span>{details?.tp_fundo ? `${details?.tp_fundo}` : "Não Informado"}</span>
        </Info>
        <Info>
          <p>Classe</p>
          <span>{details?.classe ? `${details.classe}` : "Não Informado"}</span>
        </Info>
        <Info>
          <p>Patrimônio Líquido</p>
          <span>{details?.vl_patrim_liq ? formatCurrency(details.vl_patrim_liq) : "Não Informado"}</span>
        </Info>

        <ModalSection>Características do fundo</ModalSection>

        <CharacteristicRow>
          <p>Valor da cota</p>
          <p>{details?.vlt_quota ? formatCurrency(details.vlt_quota) : "Não Informado"}</p>
        </CharacteristicRow>
        {/* <CharacteristicRow>
          <p>Rentabilidade do fundo</p>
          <p>{details.rentab_fundo}</p>
        </CharacteristicRow> */}
        <CharacteristicRow>
          <p>Captações realizadas no dia</p>
          <p>{details.captc_dia}</p>
        </CharacteristicRow>
        <CharacteristicRow>
          <p>Resgates pagos no dia</p>
          <p>{details?.resg_dia ? formatCurrency(details.resg_dia) : "Não Informado"}</p>
        </CharacteristicRow>
        <CharacteristicRow>
          <p>Taxa de administração</p>
          <p>{details?.taxa_adm ? `${details.taxa_adm}%` : "Não Informado"}</p>
        </CharacteristicRow>
        <CharacteristicRow>
          <p>Número de cotistas</p>
          <p>{details.nr_cotst}</p>
        </CharacteristicRow>
        
        <ModalSection>Informações cadastrais</ModalSection>

        <Info>
          <p>Situação</p>
          <span style={{textTransform:'capitalize'}}>{details.sit?.toLowerCase()}</span>
        </Info>

        <Info>
          <p>Data de início de atividade</p>
          <span>{formatDate(details.dt_ini_ativ)}</span>
        </Info>
      </Body>
      <Footer>
        <button onClick={onClose}>Fechar</button>
      </Footer>
    </Container>
  );
}

export default Modal;
