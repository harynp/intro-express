const express = require('express')
const router = express.Router()
const models = require('../models')

router.get('/', (req, res) => {
   models.Subjects.findAll({
     include: [{
       model: models.Teachers
     }]
   })
  .then(data => {
    // res.send(data[0].Teachers)
    res.render('subjects', {data : data, tittle : 'Halaman Subjects'})
  })
  .catch(err => {
      res.send(err)
  })
})

module.exports = router;
