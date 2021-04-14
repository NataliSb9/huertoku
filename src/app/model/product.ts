export class Product {

    public productName      : string;
    public productType      : string;
    public productAmount    : number;
    public productLocality  : string;
    public productPrice     : number;
    public productEco       : string;
    public productChange    : string;

    constructor ( prproductName: string, productType: string, productAmount: number, productLocality: string, productPrice: number, productEco: string, productChange: string ){
        this.productName        = prproductName
        this.productType        = productType
        this.productAmount      = productAmount
        this.productLocality    = productLocality
        this.productPrice       = productPrice
        this.productEco         = productEco
        this.productChange      = productChange
    } 

}
