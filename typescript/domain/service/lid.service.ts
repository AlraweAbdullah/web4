import { Lid } from "../model/lid"
import lidDB from "../data-access/lid.db"

const getAllLids = (): Lid[] => lidDB.getAllLids();

export default {
    getAllLids
}