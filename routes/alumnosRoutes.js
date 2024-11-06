const express = require('express');
const router = express.Router();
const alumnosController = require('../controllers/alumnosController');

router.get('/', alumnosController.getAlumnos);
router.get('/:id', alumnosController.getAlumnoById);
router.post('/', alumnosController.createAlumno);
router.put('/:id', alumnosController.updateAlumno);
router.delete('/:id', alumnosController.deleteAlumno);

// Manejar métodos no soportados
router.all('/', alumnosController.handleUnsupportedMethods);
router.all('/:id', alumnosController.handleUnsupportedMethods);

module.exports = router;

