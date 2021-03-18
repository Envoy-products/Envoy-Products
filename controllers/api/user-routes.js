const router = require('express').Router();
const { User, Post, Comment, Product, Review } = require('../../models');
//const withAuth = require('../../utils/auth');


// GET /api/users
router.get('/', (req, res)=> {
    // Access our User model and run .findAll() method)
    User.findAll({
        attributes: { exclude: ['password']}
    })
        .then(dbUserData =>res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });

});

// GET /api/users/1
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { 
            exclude: ['password'],
        },
        where: { id: req.params.id },
        include: [
            {
                model: Post,
                attributes: ['id', 'title', 'post_url']
            },
            {
                model: Comment,
                attributes: ['id', 'comment_text'],
                include: {
                    model: Post,
                    attributes: ['title']
                }
            },
            {
                model: Product,
                attributes: ['id', 'name', 'website']
            },
            {
                model: Review,
                attributes: ['id', 'content'],
                include: {
                    model: Product,
                    attributes: ['name']
                }
            }
        ]
    })
    .then(dbUserData => {
        if(!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// POST /api/users
router.post('/', (req, res) => {
    User.create({
        email: req.body.email,
        password: req.body.password,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        region_id: req.body.region_id,
        avatar: req.body.avatar,
        admin: req.body.admin
    })
    .then(dbUserData => {
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.user_name = dbUserData.first_name, " ", dbUserData.last_name;
            req.session.loggedIn = true;

            res.json(dbUserData);
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// POST /login
router.post('/login', (req,res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(dbUserData => {
        if(!dbUserData) {
            res.status(400).json({ message: 'No user exists with that email address.'});
            return;
        }
        const validPassword = dbUserData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: "Incorrect password!"});
            return;
        }

        req.session.save(() => {
            //declare session variables
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            res.json({ user: dbUserData, message: 'You are now logged in!' });
        })

        
    })
});

// POST /logout
router.post('/logout', (req,res) => {
    if(req.session.loggedIn){
        req.session.destroy(() => {
            res.status(204).end();
        })
    } else {
        res.status(404).end();
    }
})

// PUT /api/users/1
router.put('/:id', (req, res) => {
    // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}

    // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
    User.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if(!dbUserData[0]) {
            res.status(404).json({ message: 'No user found with this id'})
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })

});

// DELETE /api/users/1
router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if(!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;
