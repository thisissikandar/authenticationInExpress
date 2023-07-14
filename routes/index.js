import express from "express";
import UserController from './../controllers/userController.js';

const router = express.Router()

router.get('/', UserController.home);
router.get('/registration', UserController.registration);
router.post('/registration', UserController.createDoc);
router.get('/login', UserController.login);
router.post('/login', UserController.verifyUser);
router.get('/dashboard', UserController.dashBoard);
  

export default router