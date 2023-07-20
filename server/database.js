const mongoose=require('mongoose');
const URI='mongodb://127.0.0.1/usuario';

mongoose.connect(URI)
.then(db=> console.log('BD USER conectada'))
.catch(err => console.error(err));

module.exports=mongoose;
//27017A