import {MongoClient} from "mongodb"

function getProduct(req: Request, res: Response) {
    if (req.method === "GET") {


        MongoClient.connect("mongodb+srv://dario:dario9661@cluster0.yfi9a.mongodb.net/BMW?retryWrites=true&w=majority")
    }
    

}

export default getProduct