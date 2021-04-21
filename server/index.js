require('dotenv').config();
const massive = require('massive');
const express = require('express');
const session = require('express-session');
const authCtrl = require("./authController");
const recCtrl = require("./recipeController"); 
const nmCtrl = require("./nodeMailerCtrl")

const app = express();

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;

app.use(express.json());

app.use(session({
    resave: true,
    saveUninitialized: false,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 
    }
})
);

//auth endpoints 
app.post('/api/auth/register', authCtrl.register)
app.post('/api/auth/login', authCtrl.login)
app.get('/api/auth/me', authCtrl.getUser)
app.post('/api/auth/logout', authCtrl.logout)

//recipe endpoints
app.get('/api/recipes', recCtrl.getAll)
app.get('/api/recipe/:id', recCtrl.getRecipe)
app.post('/api/create', recCtrl.createRecipe)
app.put('/api/edit/:recipe', recCtrl.editRecipe)
app.delete('/api/delete/:id', recCtrl.deleteRecipe)
app.post('/api/save/:recipe', recCtrl.saveRecipe)
app.get('/api/saved/:id', recCtrl.savedToUser)

//nodemailer endpoint
app.post('/api/email',nmCtrl.email)


massive ({
    connectionString : CONNECTION_STRING,
    ssl : {
        rejectUnauthorized: false,
    }
})
.then(db => {
    app.set("db", db);
    app.listen(SERVER_PORT, () => console.log(`Db Up And Server Running On ${SERVER_PORT}`));
})
.catch(err => console.log(err));