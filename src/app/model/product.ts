export class Product {
    public idProduct        : number;
    public productName      : string;
    public productType      : string;
    public productAmount    : number;
    public productLocality  : string;
    public productPrice     : number;
    public productEco       : string;
    public productChange    : string;
    public iduser           : number;
    public productImg       : string;
    public productDescription: string;
    

    constructor ( idProduct: number,productName: string, productType :string, productAmount:number, productLocality: string, productPrice: number, productEco:string, productChange:string, iduser: number, productImg: string , productDescription?: string){
        this.idProduct          = idProduct
        this.productName        = productName
        this.productType        = productType
        this.productAmount      = productAmount
        this.productLocality    = productLocality
        this.productPrice       = productPrice
        this.productEco         = productEco
        this.productChange      = productChange
        this.iduser             = iduser
        this.productImg         = productImg
        this.productDescription = productDescription
    } 

}
