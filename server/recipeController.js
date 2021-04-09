// const user = require("./authController")
module.exports = {
    getAll: async (req, res) => {
        let { search } = req.query;
        const db = await req.app.get('db')

        if (search){
            db.search.search_by_title([`%${search.toLowerCase()}%`])
            .then(recipes => res.status(200).send(recipes))
        } else {
            db.recipe.get_all_recipes()
            .then(recipes => res.status(200).send(recipes))
        }
    },
    getRecipe: (req, res) => {
        req.app.get('db').recipe.get_recipe(req.params.id)
        .then(recipe => recipe[0] 
            ? res.status(200).send(recipe[0]) 
            : res.status(200).send({}))

    },
    createRecipe: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.session.user
        console.log(id)
        const {servings, timeframe, title, ingredients, method, img} = req.body

        if (id) {
            return db.recipe.create_recipe([servings, timeframe, id, title, ingredients, method, img])
            .then(() => res.sendStatus(200))
        } else {
            return res.sendStatus(403)
        }
    },
    editRecipe: (req, res) => {

    },
    deleteRecipe: (req, res) => {
        req.app.get('db').recipe.delete_recipe(req.params.id)
        .then(() => res.sendStatus(200))
    },
    saveRecipe: (req, res) => {
        
    }
}