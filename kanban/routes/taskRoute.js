const router = require('express').Router();
const authorization = require('../middlewares/authorization')
const ControllerTask = require('../controller/taskController')

router.get('/', ControllerTask.getTasks)
router.post('/', ControllerTask.postTask)
router.use('/:id', authorization)
router.get('/:id', ControllerTask.getTaskById)
router.patch('/:id', ControllerTask.patchTask)
router.put('/:id', ControllerTask.putTask)
router.delete('/:id', ControllerTask.deleteTasks)

module.exports = router