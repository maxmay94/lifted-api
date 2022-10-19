import { Router } from 'express'
import * as workoutCtrl from '../controllers/workouts.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/* ------------------ Public Routes ------------------ */
router.get('/', workoutCtrl.index)
router.get('/:id', workoutCtrl.show)

/* ------------------ Private Routes ------------------ */
router.use(decodeUserFromToken)
router.post('/', checkAuth, workoutCtrl.create)
router.delete('/:id', checkAuth, workoutCtrl.delete)
router.patch('/:id', checkAuth, workoutCtrl.update)


export { router }