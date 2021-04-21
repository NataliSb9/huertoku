export class Chat {
    idchat:number
    idmessenger1:number
    idmessenger2:number
    nameMessenger1:string
    nameMessenger2:string
    imgMessenger1:string
    imgMessenger2:string
    
    constructor(idmessenger1?:number,idmessenger2?:number,idchat?:number,nameMessenger1?:string,nameMessenger2?:string,imgMessenger1?:string,imgMessenger2?:string){
        this.idchat=idchat
        this.idmessenger1=idmessenger1
        this.idmessenger2=idmessenger2
        this.nameMessenger1=nameMessenger1
        this.nameMessenger2=nameMessenger2
        this.imgMessenger1=imgMessenger1
        this.imgMessenger2=imgMessenger2
    }

}
