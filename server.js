// this loads express
const express = require('express');

// creates the express app
const app = express();


// this engine requires the fs module like we did Saturday
const fs = require('fs')


const MobileSuits = require('./models/MobileSuits')






app.engine('express', (filePath, options, callback) => { // define the view engine called hypatia
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    // this is an extremely simple view engine we'll be more complex later
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>')
      .replace('#content#','<div>'+ options.content + '</div>' )
    return callback(null, rendered)
  })
})




app.set('views', './views') // specify the views directory
app.set('view engine', 'express') // register the hypatia view engine



//defines "root" route directly on app
app.get('/', function (req, res) {
  res.send('<h1> waddap</h1>');
});

app.get('/Gundam', (req, res) => {
  res.render('template', { title: 'OP', message: 'so good its broken', content: 'The Federations most powerful proto type' })
})

app.get('/Guncannon', (req, res) => {
  res.render('template', { title: 'obnoxiously good', message: 'pewpew', content: 'Prototype support unit'  })
})

app.get('/Guntank', (req, res) => {
  res.render('template', { title: 'TankyBoy', message: 'Rollout', content: 'High Powered Tank prototype' })
})

app.get('/GM', (req, res) => {
  res.render('template', { title: 'Cannon Fodder', message: 'literally millions', content: 'mass produced mobile suit' })
})

app.get('/GmSniper', (req, res) => {
  res.render('template', { title: 'camping machine', message: 'laser pointer', content: 'Gm equipment with sniper loadout' })
})

app.get('/BallUnit', (req, res) => {
  res.render('template', { title: 'space coffin', message: 'ball is life', content: 'the federations "corolla"' })
})

app.get('/GroundGM', (req, res) => {
  res.render('template', { title: 'ThickBoy', message: 'Damn he thicc', content: 'Ground type Armored version of the GM' })
})

app.get('/GmCommand', (req, res) => {
  res.render('template', { title: 'actually good', message: 'lawd he comin!', content: 'GM outfitted with upgraded parts' })
})

app.get('/GunTankProto', (req, res) => {
  res.render('template', { title: 'Slowboy', message: 'you can make this worse?', content: 'Prototype to a prototype ??' })
})

app.get('/GmTrainer', (req, res) => {
  res.render('template', { title: 'my first robot', message: 'this has on star?', content: 'Training version of the GM' })
})


app.get('*', (req, res) => {
  res.status(404).render('template', {title: 404, message: 'Employees only, please leave', content: ''})
})

// tell the app to listen on port 3000
app.listen(3000, function () {
  console.log('Listening on 3000')
});
