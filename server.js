const app = require("./src/app")

app.listen(process.env.PORT, () => {
    console.log("Server is Listening on Port : ", process.env.PORT);
})