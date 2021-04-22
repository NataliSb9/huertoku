export class Chat {
    idchat:number
    idmessenger1:number
    idmessenger2:number
    name:string
    userImg:string

    constructor(idmessenger1?:number,idmessenger2?:number,idchat?:number,name?:string,userImg?:string){
        this.idchat=idchat
        this.idmessenger1=idmessenger1
        this.idmessenger2=idmessenger2
        this.name=name
        this.userImg=userImg
    }

}
