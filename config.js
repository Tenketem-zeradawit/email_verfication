const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    const connection = await mongoose.connect(
   "mongodb+srv://tenketem:GdSGR1I7wQbeMC8V@book-stort-mert.tvps9.mongodb.net/?retryWrites=true&w=majority&appName=Book-Stort-MERT"   );
    console.log("Database Connected");
  } catch (error) {
    console.error(error);
  }
};
module.exports = connectDatabase;
