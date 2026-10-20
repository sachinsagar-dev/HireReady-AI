const authController=require("../controllers/auth.controller")
const {Router}=require('express')
const authMiddleware=require("../middlewares/auth.middleware")
const authRouter=Router()

authRouter.post("/register",authController.registerUserController)

authRouter.post("/login",authController.loginUserController)

/**
 * @route GET /api/auth/logout
 * @description clear token from user cookie and add the token in blacklist
 * @access public
 */
authRouter.get("/logout", authController.logoutUserController)

/**
 * @route GET /api/auth/get-me
 * @description get the current logged in user details
 * @access private
 */
authRouter.get("/get-me", authMiddleware.authUser, authController.getMeController)

module.exports=authRouter