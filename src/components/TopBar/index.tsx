import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { MdArrowBack } from 'react-icons/md';

import { Container } from './styles';

interface TopBarProps {
  title: string;
  rightIcon?: ReactElement;
}

function TopBar({ title, rightIcon }: TopBarProps) {
  const router = useRouter();

  return (
    <Container rightIcon={!!rightIcon}>
      <button onClick={() => router.back()}>
        <MdArrowBack size={24} />
      </button>
      <p>{title}</p>
      {rightIcon}
    </Container>
  );
}

export default TopBar;
