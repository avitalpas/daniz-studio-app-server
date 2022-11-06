const router = require('express').Router()
let Music = require('../models/music.model')

// get all musics
router.route('/').get((req, res) => {
    Music.find()
        .then(musics => res.json(musics))
        .catch(err => res.status(400).josn('Error: ' + err))
})

// get msuic by id
router.route('/:id').get((req, res) => {
    Music.findById(req.params.id)
        .then(music => res.json(music))
        .catch(err => res.status(400).json('Error: ' + err))
})

// post new music
router.route('/new').post((req,res)=>{
    console.log(`req: ${JSON.stringify(req.body)}`);

    const newMusic = new Music({
        name: req.body.name,
        author: req.body.author,
        difficulty: req.body.difficulty,
        reCreated: req.body.reCreated,
        mastering: req.body.mastering,
        fillIn: req.body.fillIn,
        noteLess: req.body.noteLess,
        scale: req.body.scale,
        bpm: req.body.bpm,
        tempo: req.body.tempo,
        weight: req.body.weight,
        genre: req.body.genre,
        accomp: req.body.accomp,
    })

    newMusic.save()
    .then(()=>res.json('Music added!'))
    .catch(err=>res.status(400).json('Error: + err'))
})


// delete music by id
router.route('/:id').delete((req, res) => {
    Music.findByIdAndDelete(req.params.id)
        .then(music => res.json('Music deleted'))
        .catch(err => res.status(400).json('Error: ' + err))
})

// update music by id
router.route('/update/:id').post((req, res) => {
    Music.findById(req.params.id)
        .then(music => {
            
            music.name= req.body.name
            music.author= req.body.author
            music.difficulty= req.body.difficulty
            music.reCreated= req.body.reCreated
            music.mastering= req.body.mastering
            music.fillIn= req.body.fillIn
            music.noteLess= req.body.noteLess
            music.scale= req.body.scale
            music.bpm= req.body.bpm
            music.tempo= req.body.tempo
            music.weight= req.body.weight
            music.genre= req.body.genre
            music.accomp= req.body.accomp

            music.save()
                .then(() => res.json('Music updated!'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router