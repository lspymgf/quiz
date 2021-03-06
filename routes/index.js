var express = require('express');

var quizController = require('../controllers/quiz_Controller');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

/* Paso 1-c Introducir nuevas rutas en el enrutador */
router.get('/quizes/question', quizController.question);

router.get('/quizes/answer', quizController.answer);

router.get('/author',quizController.author);

module.exports = router;
