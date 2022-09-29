const usersRouter = require('express').Router();

usersRouter.get("/:login", async (req, res)=> {
const {login} = req.params;
const person = await 
})


