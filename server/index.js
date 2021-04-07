require('dotenv').config();
const massive = require(massive);
const express = require(express);
const session = require(express-session);
const app = express();
const authCtrl = require("./authController");
const recCtrl = require("./recipeController"); 

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
app.get('/api/rec/get-all', recCtrl.getAllRecipes)
app.get('/api/rec/get', recCtrl.getRecipe)
app.post('/api/rec/create', recCtrl.createNewRecipe)
app.put('/api/rec/edit', recCtrl.editRecipe)
app.delete('/api/rec/delete', recCtrl.deleteRecipe)
app.post('/api/rec/save', recCtrl.saveRecipe)

massive ({
    connectionString : CONNECTION_STRING,
    ssl : {
        rejectUnauthorized: false,
    }
}).then(db => {
    app.set("db", db);
    app.listen(SERVER_PORT, () => console.log(`Db Up And Server Running On ${SERVER_PORT}`));
})
.catch(err => console.log(err));