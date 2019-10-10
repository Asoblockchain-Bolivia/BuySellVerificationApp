require("dotenv").config();
const Firestore = require("../utils/config/firestore");
class Register {
  constructor() {
    this.table = process.env.TABLA;
  }

  async post(req, res, next) {
    try {
      const id = req.body.id;
      delete req.body.id;
      const resp = await Firestore.update(this.table, id, req.body);
      if (resp._writeTime) {
        res.redirect(`https://chat.whatsapp.com/${process.env.IDGRUPO}`);
      } else {
        throw new Error("Error de Base de Datos");
      }
    } catch (error) {
      res.redirect(`/auth/valid_account?msg=${error.msg}`);
    }
    next();
  }
}
module.exports = new Register();
