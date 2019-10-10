const admin = require("firebase-admin");
require("dotenv").config();
let serviceAccount = require("./firestorconfig");

class Firestore {
  constructor() {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
    this.conn = admin.firestore();
  }

  async create(collection, data) {
    let docRef = await this.conn.collection(collection).add(data);
    return docRef;
  }

  async update(collection, id, data) {
    let docRef = await this.conn
      .collection(collection)
      .doc(id)
      .update(data);
    return docRef;
  }
}
module.exports = new Firestore();
