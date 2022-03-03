//TODO move to db folder
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/the-acme-task-db');

const Task = sequelize.define('task', {
  name: {
    type: Sequelize.STRING
  }
});

Task.generateRandom = function(){
  return this.create({ name: `Task ${ Math.ceil(Math.random()*5000)}`});
}

const express = require('express');
const app = express();
const path = require('path');

app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')));

app.get('/api/tasks', async(req, res, next) => {
  try {
    res.send(await Task.findAll());
  }
  catch(ex){
    next(ex);
  }
});

app.post('/api/tasks', async(req, res, next)=> {
  try {
    res.status(201).send(await Task.generateRandom());
  }
  catch(ex){
    next(ex);
  }
});

app.delete('/api/tasks/:id', async(req, res, next) => {
  try {
    const task = await Task.findByPk(req.params.id);
    await task.destroy();
    res.sendStatus(204);
  }
  catch(ex){
    next(ex);
  }
});

const start = async()=> {
  try {
    await sequelize.sync({ force: true });
    await Promise.all([
      Task.generateRandom(),
      Task.generateRandom(),
      Task.generateRandom()
    ]);

    const port = process.env.PORT || 3000;
    app.listen(port, ()=> console.log(`listening on port ${port}`));
  }
  catch(ex){
    console.log(ex);
  }
};

start();
