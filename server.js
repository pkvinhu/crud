const express = require('express');
const app = express();
const { db, User } = require('./api/db')
const router = require('./api')
const path = require('path')

const PORT = process.env.PORT || 3000

app.use(express.static(path.join(process.cwd(), 'public')))
app.use(express.json());

app.use('/api', router)

db.sync()
.then(()=>{
  app.listen(PORT, ()=>{
  console.log('hello')
})
})

