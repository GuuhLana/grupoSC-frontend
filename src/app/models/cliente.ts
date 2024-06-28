export interface Cliente {
    id?: number;
    cnpj: string;
    razaoSocial: string;
    usuario: string;
    senha: string;
    status: 'ativo' | 'inativo';
}