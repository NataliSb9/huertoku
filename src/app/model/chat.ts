export class Chat {
    idchat:number
    idmessenger1:number
    idmessenger2:number

    constructor(idmessenger1?:number,idmessenger2?:number,idchat?:number){
        this.idchat=idchat
        this.idmessenger1=idmessenger1
        this.idmessenger2=idmessenger2
    }

}
