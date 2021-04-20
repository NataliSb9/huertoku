export class Mensaje {
    public idmessage:number;
    public idchat:number;
    public idsender:number;
    public idreciever:number;
    public messageText:string;

    constructor(idchat:number, messageText:string,idsender?:number,idreciever?:number,idmessage?:number){
        this.idmessage=idmessage
        this.idchat=idchat;
        this.idsender=idsender;
        this.idreciever=idreciever
        this.messageText=messageText
    }

}
