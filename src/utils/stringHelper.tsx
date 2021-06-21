interface Options {
  style?: string;
  currency?: string;
  notation?: string;
  signDisplay?: string;
}

const patrimonioOptions: Options = {
  style: 'currency',
  currency: 'BRL',
  notation: 'compact',
  signDisplay: 'never',
};
const cotistasOptions: Options = { notation: 'compact' };

export function formatCurrency(value: string | number) {
  return !value
    ? ' '
    : new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(Number(value));
}

export function formatDate(value: string | Date, options?: any) {
  const date = new Date(value);
  return !value ? ' ' : new Intl.DateTimeFormat('pt-br', options).format(date);
}

export function formatCnpj(cnpj: string) {
  return !cnpj ? ' ' : cnpj.replace('/', '%2F');
}
export function formatPatrimonio(patrimonio: number) {
  return (
    '+ ' +
    new Intl.NumberFormat('pt-BR', patrimonioOptions)
      .format(patrimonio)
      .toUpperCase()
  );
}
export function formatCotistas(cotistas: number) {
  return (
    '+ ' +
    new Intl.NumberFormat('pt-BR', cotistasOptions)
      .format(cotistas)
      .toUpperCase()
  );
}
export function formatFilterLabel(
  filter: string | number,
  type: 'classes' | 'cotistas' | 'patrimonio'
) {
  if (typeof filter === 'string' && type === 'classes') {
    switch (filter) {
      case 'Fundo de Renda Fixa':
        console.log('aqui');
        return 'Renda Fixa';
      default:
        return filter;
    }
  } else if (typeof filter === 'number')
    return type === 'cotistas'
      ? formatCotistas(filter)
      : formatPatrimonio(filter);

  return '';
}
