
// mongoose.connect('mongodb+srv://TaskApp:daoadung123@cluster0-jyznc.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true}) 

// mongoose.connection.on('connected', function () {  
  //   console.log('Mongoose default connection open');
  // }); 
  
  // mongoose.connection.on('error',function (err) {  
    //   console.log('Mongoose default connection error: ' + err);
    // }); 
    
    // mongoose.connection.on('disconnected', function () {  
      //   console.log('Mongoose default connection disconnected'); 
      // });
 
      // process.on('SIGINT', function() {  
//   mongoose.connection.close(function () { 
  //     console.log('Mongoose default connection disconnected through app termination'); 
  //     process.exit(0); 
//   }); 
// });


const mongoose = require('mongoose');
const URL = 'mongodb://127.0.0.1:27017/POS';

mongoose.connect(URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
