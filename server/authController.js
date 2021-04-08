const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
        const {username, email, password} = req.body;
        const prof_pic = `https://robohash.org/${username}.png`
        const db = req.app.get('db');

        const result = await db.auth.get_user_by_username([username]);
        const existingUser = result[0];
        if(existingUser) {
            return res.status(400).send("Username Is Taken");
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const registeredUser = await db.auth.register_user([username, email, hash, prof_pic]);
        const user = registeredUser[0];
        
        req.session.user = {
            username: user.username,
            prof_pic: user.prof_pic, 
            id: user.id
        };
        // console.log(req.session.user)
        return res.status(200).send(req.session.user);
    },
    login: async(req, res) => {
        const {email, password} = req.body;
        const foundUser = await req.app.get('db').auth.get_user_by_email([email]);
        const user = foundUser[0];
        if(!user) {
            return res.status(401).send("User Not Found, Please Register Before Continuing");
        }

        const isAuthenticated = bcrypt.compareSync(password, user.password);
        if(!isAuthenticated) {
            return res.status(403).send("Incorrect Username or Password");
        }
        req.session.user = {
            username: user.username,
            prof_pic: user.prof_pic, 
            id: user.id
        }
        // console.log(req.session.user)
        return res.send(req.session.user)
    },
    getUser: (req, res) => {
        if (req.session.username) {
            return res.status(200).send(req.session.username) 
        } else {
            res.sendStatus(404)
        }
    },
    logout: (req, res) => {
        req.session.destroy();
        return res.status(200);
    }
}