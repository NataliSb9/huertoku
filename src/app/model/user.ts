export class User {
    public iduser:number;
    public name:string;
    public surname1:string;
    public surname2:string;
    public birthyear:number;
    public username:string;
    public localidad:string;
    public telefono:number;
    public email:string;
    public password:string;
    public userImg:string;

    constructor(email:string,password:string,iduser?:number,name?:string,surname1?:string,surname2?:string,birthyear?:number,username?:string,localidad?:string,telefono?:number,userImg?:string){
        this.iduser=iduser;
        this.name=name;
        this.email=email;
        this.password=password;
        this.surname1 = surname1;
        this.surname2 = surname2;
        this.birthyear = birthyear;
        this.username = username;
        this.localidad = localidad;
        this.telefono = telefono ;
        this.userImg = userImg;
    }
    
}

	
