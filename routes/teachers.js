const express = require('express')
const router = express.Router()
const models = require('../models')

router.get('/', (req, res) => {
  models.Teachers.findAll({
    order : [['id','ASC']],
    include: [
      {
        model: models.Subjects
      }
    ]
  }).then(data => {
    res.render('teachers', {
      data: data,
      tittle: 'Halaman Teachers'
    })
  }).catch(err => {
    res.send(err)
  })
})

router.get('/add', (req, res) => {
  models.Subjects.findAll().then(subjects => {
    res.render('addteachers', {subjects: subjects})
  }).catch(err => {
    res.render('addteachers')
  })
})

router.post('/add', (req, res) => {
  models.Teachers.build({
    first_name: `${req.body.first_name}`,
    last_name: `${req.body.last_name}`,
    email: `${req.body.email}`,
    subjectsId: `${req.body.subjectsId}`,
    createdAt: new Date(),
    updatedAt: new Date()
  }).save().then(students => {
    res.redirect('/teachers')
  })
})

router.get('/delete/:id', (req, res) => {
  models.Teachers.destroy({
    where: {
      id: `${req.params.id}`
    }
  }).then(() => {
    res.redirect('/teachers')
  })
})

router.get('/edit/:id', (req, res) => {
  models.Teachers.findById(req.params.id).then(teachers => {
    models.Subjects.findAll().then(subjects => {
      res.render('teachersedit', {
        data: teachers,
        subject: subjects,
        tittle: 'Halaman Edit Teachers'
      })
    })
  }).catch(err => {
    res.send(err)
  })
})

router.post('/edit/:id', (req, res) => {
  models.Teachers.update({

    first_name: `${req.body.first_name}`,
    last_name: `${req.body.last_name}`,
    email: `${req.body.email}`,
    subjectsId: `${req.body.subjectsId}`
  }, {
    where: {
      id: `${req.params.id}`
    }
  }).then(dataTeachers => {
    res.redirect('/teachers');
  })
})

module.exports = router;
