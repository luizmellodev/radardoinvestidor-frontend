import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { MdArrowBack } from 'react-icons/md';

import { Container } from './styles';

interface TopBarProps {
  title: string;
  rightIcon?: ReactElement;
  onClickRight?: () => void;
}

function TopBar({ title, rightIcon, onClickRight }: TopBarProps) {
  const router = useRouter();

  return (
    <Container rightIcon={!!rightIcon}>
      <button onClick={() => router.push('/')}>
        <MdArrowBack size={24} />
      </button>
      <p>{title}</p>
      {rightIcon && <button onClick={onClickRight}>{rightIcon}</button>}
    </Container>
  );
}

export default TopBar;
