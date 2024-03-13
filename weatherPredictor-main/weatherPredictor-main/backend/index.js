const express = require('express');
const cors = require('cors');
const { spawn } = require('child_process');
const path = require('path')

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/predict/:model_number/:a/:b/:c/:d/:e/:f/:g/:h', (req, res) => {
  const { model_number, a, b, c, d, e, f, g, h } = req.params;

const childPython = spawn('python',['run.py',model_number, a, b, c, d, e, f, g, h ]);

  childPython.stdout.on('data',(data) => {
      res.json({result:`${data}`})
  })
  
  childPython.stderr.on('data',(data) => {
      console.log(`stder: ${data}`);
  })
  
  childPython.on('close',(code) => {
      console.log(`child processes existed with code: ${code}`);
  })

});

app.use(express.static(path.join(__dirname,'../frontend/build/')))
app.get('*',(req,res)=>res.sendFile(path.resolve(__dirname,'../','frontend','build','index.html')))


app.listen(4000, () => console.log('Server is listening at port 4000'));

// http://localhost:4000/predict/1/1/8.6889/8.6889/0.93/1.4329/290/5.8443/1012.96