const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Atlas connected"))
.catch((err) => console.error("MongoDB connection error:", err));
