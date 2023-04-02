/* tslint:disable */
/* eslint-disable */
export interface TransactionRequest {
  amount: number;
  destinationIban: string;
  type: 'TRANSFERT' | 'DEPOSIT';
  userId: number;
}
