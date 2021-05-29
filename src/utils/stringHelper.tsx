export function formatCurrency(value:string|number){
    return !value ? " ": new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(value));
}

export function formatDate(value:string|Date){
    const date = new Date(value);
    return !value ? " ": new Intl.DateTimeFormat('pt-br').format(date);
}

export function formatCnpj (cnpj:string) {
    return !cnpj ? " ": cnpj.replace('.', '%2E').replace('/', '%2F').replace('-', '%2D');
}
