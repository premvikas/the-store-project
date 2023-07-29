const express = require('express');

const router = express.Router();

import {getUsers, createUser} from '../Controllers/userController';

router.get('/getUsers', getUsers);
router.post('/createUser', createUser);

export = router;