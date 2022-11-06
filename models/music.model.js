const mongoose = require('mongoose')

const Schema = mongoose.Schema

const musicSchema = new Schema({
                                                    //  שם בטבלה      ערכים אפשריים 

    name: { type: String, require: true },          //  שם         טקסט חופשי
    author: { type: String, require: true },        //  יוצר         טקסט חופשי
    difficulty: { type: String, require: true },    //  [1,2,3,4,5,6,7,F]   רמת קושי
    reCreated: { type: Boolean, require: true },    //  עשוי מחדש               כן/לא
    mastering: { type: Boolean, require: true },    //  מאסטרינג               כן/לא
    fillIn: { type: Boolean, require: true },       //  כן/לא               FILE IN ?
    noteLess: { type: Boolean, require: true },     //  ניגון ללא תווים               כן/לא
    scale: { type: String, require: true },         //  רשימה              Scale
    bpm: { type: String, require: true },           //  טקסט חופשי         BPM
    tempo: { type: String, require: true },         //  טקסט חופשי         TEMPO
    weight: { type: String, require: true },        //  טקסט חופשי         Weight
    genre: { type: String, require: true },         //  טקסט חופשי         Genre
    accomp: { type: String, require: true },        //  טקסט חופשי         Accomp
    
},{
    timestamps: true
})

const Music = mongoose.model('Music', musicSchema)

module.exports = Music