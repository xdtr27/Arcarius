export type TipoTransacao = 'entrada' | 'saida';

export interface Transacao {
    id: string;
    tipo: TipoTransacao;
    valor: number;
    descricao: string;
    data: string;
}