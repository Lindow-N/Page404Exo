const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors());

app.get('/', (req, res) => {
    res.status(404).send("J'ai pas trouvé, tu cherche le film Kaamelott ?");
});


app.listen(8090, () => {
    console.log('app listening on port 8090')
  })