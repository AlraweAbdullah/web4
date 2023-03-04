export class Lid {
    private _id : number
    name : string
    street : string
    houseNr : string
    postcode : number
    birthDate : Date

    constructor (lid : {id:number, name:string, street: string, houseNr:string, postcode: number, birthDate:Date}){
        this._id  = lid.id;
        this.name = lid.name;
        this.street = lid.street;
        this.houseNr = lid.houseNr;
        this.postcode = lid.postcode;
        this.birthDate = lid.birthDate;
    }

    static create(id:number, name:string, street:string, houseNr:string, postcode:number, birthDate:Date){
        return new Lid( {id:id, name:name, street: street, houseNr:houseNr, postcode: postcode ,
            birthDate: birthDate})
    }

    getId():number{
        return this._id;
    }
    
}

