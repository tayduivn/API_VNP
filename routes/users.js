var express = require('express');
var router = express.Router();
const modalFbUser = require('../schema/FaceBookUser.js');

/* GET users listing. */
router.get('/get-cookie', function(req, res, next) {
  modalFbUser.find({status : 1 })
			.limit(50)
			.select('user_id fb_dtsg cookie')
			.exec(function(err, data){
				if (err) {
					return res.json( {code : 404 , data : { msg : 'Data Not Found'} } );
				} else {
					return res.json( {
						code : 200 , 
						data : data , 
					} );
	   				
				}
	})
});

module.exports = router;
