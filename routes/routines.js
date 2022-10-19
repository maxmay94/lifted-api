import { Router } from 'express'
import * as routineCtrl from '../controllers/routines'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/* ------------------ Public Routes ------------------ */
router.get('/', routineCtrl.index)
router.get('/:id', routineCtrl.show)

/* ------------------ Private Routes ------------------ */
router.use(decodeUserFromToken)
router.post('/', checkAuth, routineCtrl.create)
router.delete('/:id', checkAuth, routineCtrl.delete)
router.patch('/:id', checkAuth, routineCtrl.update)


export { router }