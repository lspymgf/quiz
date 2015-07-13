// GET /quizes/question
exports.question = function(req,res) {
   res.render('quizes/question',{pregunta: 'Capital de Italia'});
};


// GET /quizes/aswere
exports.answer = function(req,res) {
  if (req.query.respuesta === 'Roma') {
  	res.render('quizes/answer',{respuesta: 'Correcto'});
  }
  else {
    res.render('quizes/answer',{respuesta: 'InCorrecto'});	 
  }
};

//GET /author
exports.author = function(req, res){
	res.render('author', {autor: 'LIDIA SERNA PÉREZ'});
};
