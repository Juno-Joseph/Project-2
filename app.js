const express = require('express')
const path = require('path')

const app = express()
app.use(express.static(path.join(__dirname, 'public')))
const port = 3000

app.use((req, res) => {
    res.status(404);
    res.send(`<h1>Error 404: Resource Not Found</h1>`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

