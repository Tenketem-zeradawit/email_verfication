const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    const connection = await mongoose.connect(
   "mongodb+srv://tenketem:BjDc3PHwu22tHz3S@book-stort-mert.tvps9.mongodb.net/bookstore?retryWrites=true&w=majority&appName=Book-Stort-MERT");
    console.log("Database Connected");
  } catch (error) {
    console.error(error);
  }
};
module.exports = connectDatabase;
