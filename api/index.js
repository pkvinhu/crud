const router = require('express').Router();
const { User } = require('./db')
module.exports = router;

router.get('/users', (req, res, next) => {
  User.findAll()
  .then(users=>res.send(users))
  .catch(next)
})

router.get('/users/:id', (req, res, next)=>{
  User.findById(req.params.id)
  .then(user=>res.send(user))
  .catch(next)
})

router.post('/users/create', (req, res, next)=>{
  User.create(req.body)
  .then(user=>res.send(user))
  .catch(next)
})

router.put('/users/update/:id', (req, res, next)=>{
  User.update(req.body, {where:{id:req.params.id}})
  .then(user=>res.send(user))
  .catch(next)
})

router.delete('/users/:id', (req, res, next)=>{
  User.destroy({
  	where: {
  	  id: req.params.id
  	}
  })
  .then(()=>res.status(204).end())
  .catch(next)
})

