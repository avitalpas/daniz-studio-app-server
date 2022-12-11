const router = require('express').Router()
let Lesson = require('../models/lesson.model')

// get all lessons
router.route('/').get((req, res) => {
    Lesson.find()
        .then(lessons => res.json(lessons))
        .catch(err => res.status(400).json('Error: ' + err))
})

// get lesson by id
router.route('/:id').get((req, res) => {
    Lesson.findById(req.params.id)
        .then(lesson => res.json(lesson))
        .catch(err => res.status(400).json('Error: ' + err))
})

// post new lesson
router.route('/new').post((req,res)=>{
    const studentID = req.body.studentID
    const musicID = req.body.musicID
    const description = req.body.description
    const date = Date.parse(req.body.date)

    const newLesson = new Lesson({
        studentID,
        musicID,
        description,
        date
    })

    newLesson.save()
    .then(()=>res.json('Lesson added!'))
    .catch(err=>res.status(400).json('Error: + err'))
})

// delete lesson by id
router.route('/:id').delete((req, res) => {
    Lesson.findByIdAndDelete(req.params.id)
        .then(lesson => res.json('Lesson deleted'))
        .catch(err => res.status(400).json('Error: ' + err))
})

// get lessons by student id
router.route('/student/:id').get((req, res) => {
    Lesson.find({ studentID: req.params.id})
        .then(lessons => {
            res.json(lessons)
        })
        .catch(err => res.status(400).json('Error: ' + err))
})

// update lesson by id
router.route('/update/:id').post((req, res) => {
    Lesson.findById(req.params.id)
        .then(lesson => {

            console.log(req.body)
            
            lesson.studentID= req.body.studentID,
            lesson.musicID= req.body.musicID,
            lesson.description= req.body.description,
            lesson.date= req.body.date

            lesson.save()
                .then(() => res.json('Lesson updated!'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router