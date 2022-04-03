import { connect } from "mongoose"

export default function () {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require("console-stamp")(console, "HH:MM:ss")
  connect(`${process.env.MONGODB}`)
    .then(() => {
      console.log("Connected to database")
    })
    .catch(err => {
      console.log("Failed to connect to database")
      console.log(err)
    })
}
