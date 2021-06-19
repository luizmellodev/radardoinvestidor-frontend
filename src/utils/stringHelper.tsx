export function formatCurrency(value:string|number){
    return !value ? " ": new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(value));
}

export function formatDate(value:string|Date, options?: any){
    const date = new Date(value);
    return !value ? " ": new Intl.DateTimeFormat('pt-br', options).format(date);
}

export function formatCnpj (cnpj:string) {
    return !cnpj ? " ": cnpj.replace('/', '%2F');
}
export function formatPatrimonio(patrimonio:number){
    // erro aparece mas não causa problema na compilação nem na funcionalidade 
    return "+ " + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', notation: 'compact', signDisplay: 'never' }).format(patrimonio). toUpperCase();
}
export function formatCotistas(cotistas:number){
    // erro aparece mas não causa problema na compilação nem na funcionalidade 
    return  "+ " + new Intl.NumberFormat('pt-BR', { notation: 'compact' }).format(cotistas). toUpperCase();
}
