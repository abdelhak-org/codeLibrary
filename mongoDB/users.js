import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
   try {
      const client = await clientPromise;
      const db = client.db("authorsDB")

      const users = await db.collection("authors").find({}).limit(10).toArray();
       console.log(users)
      res.json(users);
   } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
   }
};
