/* tslint:disable */
/* eslint-disable */
export interface TransactionResponse {
  amount?: number;
  destinationIban?: string;
  transactionDate?: string;
  type?: 'TRANSFERT' | 'DEPOSIT';
}
