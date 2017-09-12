const express = require('express')
const router = express.Router()
const models = require('../models')
// const modols_students = require('../models.js')

router.get('/', (req, res) => {
   models.Student.findAll()
  .then(data => {
    res.render('students', {data : data, tittle : 'Halaman Students'})
  })
  .catch(err => {
      res.send(err)
  })
})

// router.get('/add', (req, res) => {
//   models.Student.findAll()
//   .then(data => {
//     res.render('addstudents', {data : data, tittle : 'Halaman Tambah Students'})
//   })
//   .catch(err => {
//       res.send(err)
//   })
// })

router.get('/add', (req, res) => {
  models.Subjects.findAll()
   .then(subjects => {
     res.render('addstudents', {subjects: subjects})
   })
   .catch(err => {
     res.render('addstudents')
   })
})


router.post('/add', (req, res) => {
    models.Student.build({
        first_name: `${req.body.first_name}`,
        last_name : `${req.body.last_name}`,
        email : `${req.body.email}`,
        subjectsId : `${req.body.subjectsId}`,
        createdAt : new Date(),
        updatedAt : new Date(),
    })
    .save()
    .then(students => {
    res.redirect('/students')
    })
 })


 router.get('/delete/:id', (req,res) => {
    models.Student.destroy({
      where: {
          id:`${req.params.id}`
      }
    })
    .then(()=> {
      res.redirect('/students')
    })
  })

    router.get('/edit/:id', (req,res) => {
      models.Student.findAll({
        where: {
          id:`${req.params.id}`
        }
      })
      .then(data => {
        res.render('studentsedit', {data : data[0], tittle : 'Halaman Edit Students'})
      })
    })

    router.post('/edit/:id', (req,res) => {
    models.Student.update({

           first_name: `${req.body.first_name}`,
           last_name : `${req.body.last_name}`,
           email : `${req.body.email}`

    },
    {where: { id : `${req.params.id}`}}

  )
      .then(data => {
        res.redirect('/students');
      })
    })

    router.get('/add/:id/', (req,res) => {
      models.Student.findAll({
        where: {
          id:`${req.params.id}`
        }
      })
      .then(data => {
        res.render('addsubjects', {data : data[0], tittle : 'Add Subject to Students'})
      })
    })

    router.post('/add/:id/', (req,res) => {
      models.Student.update({
        first_name: `${req.body.first_name}`,
        last_name : `${req.body.last_name}`,
        email : `${req.body.email}`,
        subjectsId : `${req.body.subjectsId}`
      },
      {where: {
          id:`${req.params.id}`
        }
      })
      .then(data => {
        res.redirect('/students') // , {data : data[0], tittle : 'Add Subject to Students'}
      })
    })

module.exports = router
