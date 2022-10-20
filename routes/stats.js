import { Router } from 'express'
import * as statsCtrl from '../controllers/stats.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/* ------------------ Public Routes ------------------ */
router.get('/', statsCtrl.index)
router.get('/:id', statsCtrl.show)

/* ------------------ Private Routes ------------------ */
router.use(decodeUserFromToken)
router.get('/user/:userId', checkAuth, statsCtrl.showUserStats)
router.post('/', checkAuth, statsCtrl.create)
router.delete('/:id', checkAuth, statsCtrl.delete)
router.patch('/:id', checkAuth, statsCtrl.update)


export { router }