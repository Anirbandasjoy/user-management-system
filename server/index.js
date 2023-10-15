const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const uri = process.env.dbURL;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    const userCollection = client.db("User-ManagementDB").collection("user");

    app.get("/", (req, res) => {
      res.send("User Management System Server");
    });

    // create user

    app.post("/user", async (req, res) => {
      try {
        const user = req.body;
        const newUser = await userCollection.insertOne(user);
        res.status(201).send(newUser);
      } catch (error) {
        res.status(500).send("Internal Server Error");
        console.log(error);
      }
    });
    // get users

    app.get("/user", async (req, res) => {
      try {
        const users = await userCollection.find().toArray();
        res.status(200).send(users);
      } catch (error) {
        res.status(500).send("Internal Server Error");
        console.log(error);
      }
    });

    // delete user

    app.delete("/user/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const filter = { _id: new ObjectId(id) };
        const deletedUser = await userCollection.deleteOne(filter);
        res.status(200).send(deletedUser);
      } catch (error) {
        res.status(500).send("Internal Server Error");
        console.log(error);
      }
    });

    // update user

    app.put("/user/:id", async (req, res) => {
      try {
        const { name, email, gender, status } = req.body;
        const id = req.params.id;
        const filter = { _id: new ObjectId(id) };
        const options = { upsert: true };
        const updateUser = {
          $set: {
            name,
            email,
            gender,
            status,
          },
        };

        const updatedUser = await userCollection.updateOne(
          filter,
          updateUser,
          options
        );
        res.status(200).send(updatedUser);
      } catch (error) {
        console.log(error);
      }
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
