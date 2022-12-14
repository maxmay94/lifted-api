import { Router } from 'express'
import * as exerciseCtrl from '../controllers/exercises.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/* ------------------ Public Routes ------------------ */
router.get('/', exerciseCtrl.index)
router.get('/:id', exerciseCtrl.show)

/* ------------------ Private Routes ------------------ */
router.use(decodeUserFromToken)
router.post('/', checkAuth, exerciseCtrl.create)
router.delete('/:id', checkAuth, exerciseCtrl.delete)
router.patch('/:id', checkAuth, exerciseCtrl.update)


export { router }