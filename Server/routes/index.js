const router = require('express').Router()
// controlers
const login = require("../controllers/login")
const getCharById = require("../controllers/getCharById")
const {deleteFav, postFav} = require("../controllers/handleFavorites")

router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;