import { ReactNode } from 'react';

interface FiltroProps {
  children: ReactNode;
}

function Filtro({ children }: FiltroProps) {
  return (
    <>
      <h1>Filtro</h1>
      {children}
    </>
  );
}

export default Filtro;
