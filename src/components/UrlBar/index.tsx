import { Container, Input, Row } from './styles';
import { MdContentCopy } from 'react-icons/md';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import theme from 'styles/theme';

const copyToast = () => toast.success('Copiado para a área de transferência');

function UrlBar() {
  return (
    <Container>
      <Row>
        <Input readOnly value={window.location.href} />
        <CopyToClipboard text={window.location.href}>
          <button onClick={copyToast}>
            <MdContentCopy size={24} color={theme.colors.text} />
          </button>
        </CopyToClipboard>
      </Row>
    </Container>
  );
}

export default UrlBar;
