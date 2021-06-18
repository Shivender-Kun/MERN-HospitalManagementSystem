import DB from "mongoose";
import config from "config";

// Importing environment variables to hide the database user id and password.

const db = config.get("mongoURI");

// Connecting to the database via mongoose.
const DB_Connect = () => {
  DB.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
    .then(() => console.log("DB Connected!"))
    .catch((err) => console.log("Unable to Connect to Database!!!", err));
};

export default DB_Connect;
