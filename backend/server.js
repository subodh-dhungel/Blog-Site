const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 2000
const app = express()
const name = "git"

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('Server running successfully at port: '+ PORT)
    }
})