import { connect } from "mongoose";

export default function () {
  connect(`${process.env.MONGODB}`)
    .then(() => {
      console.log(`Connect to database`);
    })
    .catch((err) => {
      console.log(`Failed to connect to database`);
      console.log(err);
    });
}
