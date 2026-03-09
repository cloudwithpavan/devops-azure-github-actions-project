const express = require("express")

const app = express()

app.get("/", (req, res) => {
  res.send("DevOps CI/CD pipeline deployed this app 🚀")
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})