const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
// const postRoutes = require("./api/postRoutes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
// router.use("/posts", postRoutes);

module.exports = router;
