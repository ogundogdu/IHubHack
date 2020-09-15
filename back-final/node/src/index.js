const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const groupRouter = require('./routers/group');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(groupRouter);

app.listen(port, ()=>{
    console.log('express listening port ', port);
});
