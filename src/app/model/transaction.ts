export class Transaction 
{
    idtransaction:number
    id_buyer: number
    id_seller :number
    id_product: number
    transactionAmount: number

    constructor(idtransaction?:number, id_buyer?: number,id_seller?:number,id_product?: number,transactionAmount?: number)
    {
        this.idtransaction=idtransaction;
        this.id_buyer=id_buyer;
        this.id_seller=id_seller;
        this.id_product=id_product;
        this.transactionAmount=transactionAmount;
    }
}
