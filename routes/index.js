const express= require("express")
const router = express.Router();
global.config = require('../config');
const homeController = require(global.config.routes.controller + "/indexController")


router.get("/",  homeController.root);
router.get("/commits",  homeController.Commits);
router.get("/authors",  homeController.Authors);
router.get("/branches",  homeController.Branches);
router.get("/prs",  homeController.PRs);


module.exports = router;






