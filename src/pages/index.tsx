import { useState, useEffect } from 'react';
import styled from 'styled-components';

import Button from 'components/Button';

const Title = styled.h1`
  font-size: 50px;
`;

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return <>{loading ? <p>Carregando...</p> : <Button>Detalhes</Button>}</>;
}
