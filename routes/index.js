var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller'); //introducido fase primera pregunta

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

router.get('/quizes/question', quizController.question); //introducido fase primera pregunta
router.get('/quizes/answer',   quizController.answer);  //introducido fase primera pregunta

module.exports = router;
