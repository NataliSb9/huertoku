export class User {
    public iduser:number;
    public name:string;
    public surname1:string;
    public surname2:string;
    public birthyear:Date;
    public username:string;
    public locality:string;
    public cp:number;
    public email:string;
    public password:string;
    public userImg:string;

    constructor(email:string,password:string){
        this.email=email;
        this.password=password;
    }
    
}

	
