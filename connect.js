const conString = "mongodb+srv://Gummesson:Hyltebruk01@felix-umnuo.mongodb.net/test?retryWrites=true&w=majority";
makeConnection();
async function makeConnection() {
    const con = await mongo.connect(conString, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = await con.db("food");
    const mealsCol = await db.collection("meals");
}