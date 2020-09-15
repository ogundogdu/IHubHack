const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://taskapp:mertmert12@cluster0.o1qpe.mongodb.net/budget-cal?retryWrites=true" ,{
    useNewUrlParser: true,
    useCreateIndex: true
});
// mongoose.connect(process.env.MONGODB_URL,{
//     useNewUrlParser: true,
//     useCreateIndex: true
// });