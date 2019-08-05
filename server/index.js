const express = require('express'),
      cors = require('cors'),
      app = express(),
      PORT = 9000

app.use(cors());

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}!`)
})
