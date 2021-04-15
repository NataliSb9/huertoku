export class Product {

    public productName      : string;
    public productType      : string;
    public productAmount    : number;
    public productLocality  : string;
    public productPrice     : number;
    public productEco       : string;
    public productChange    : string;
    public iduser           : number
    

    constructor ( productName: string, productType :string, productAmount:number, productLocality: string, productPrice: number, productEco:string, productChange:string, iduser: number ){
        this.productName        = productName
        this.productType        = productType
        this.productAmount      = productAmount
        this.productLocality    = productLocality
        this.productPrice       = productPrice
        this.productEco         = productEco
        this.productChange      = productChange
        this.iduser             = iduser
    } 

}
