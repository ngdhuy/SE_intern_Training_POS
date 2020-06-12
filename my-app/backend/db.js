


const mongoose = require('mongoose');
const URL = 'mongodb://127.0.0.1:27017/POS';

mongoose.connect(URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
