import {Lid} from "../model/lid"
let currentId = 1

const lids : Lid [] = [
    Lid.create(currentId++, "Abdullah", "fonteinstraat", "4B", 3000, new Date(1991, 9, 12)),
    Lid.create(currentId++, "Abdullah2", "fonteinstraat2", "4A", 3000, new Date(1991, 9, 12))
]


const getAllLids = (): Lid[] => {
    return lids;
};

const getLidById = ({id} :  {id:number}) : Lid | null => {
    for(let i=0;i<lids.length;i++){
        if(lids[i].getId() == id){
            return lids[i]
        }
    }
    return null
}

export default {
    getAllLids,
    getLidById
}