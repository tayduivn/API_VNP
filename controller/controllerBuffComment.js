const modalBuffComment = require('../schema/BuffComment.js');
let BuffCommentController = {
	handleCreate(data , cb ) {
		let api = new modalBuffComment(data);
		api.save(function (err, api) {
	      if (err) return cb(err , null);
	      return cb(null, api);
	    });
	},
	getListBuffComment( _limit , page ,  cb ) {
		modalBuffComment.find({})
			.limit(_limit)
    		.skip((_limit * page ) - _limit)
			.exec(function(err, listCmts){
				if (err) return cb(err ,null);
        	return cb(null , listCmts )
		});
	},
	getDetailBuffComment( idVideo ,cb ) {
		modalBuffComment.findOne({idVideo : idVideo}, function(err , detailCmts) { 
			if (err) return cb(err ,null);
        	return cb(null , detailCmts )
		});
	},
	handleUpdateBuffComment( idVideo ,cb ) {
		const conditions = { idVideo : idVideo };
		modalBuffComment.findOneAndUpdate( conditions, { status : 1 } , function(err , detailBuffEye) { 
			if ( detailBuffEye == null ) {
				return cb(true ,null);
			} 
			if (err) return cb(err ,null);
        	return cb(null , detailBuffEye )
		});
	},
	handleUpdate( idVideo  , data ,cb ) {
		const conditions = {idVideo : idVideo};
		const update     = data;

		console.log(update)
		modalBuffComment.findOneAndUpdate( conditions, update , function(err , updateSuccess) { 
			if ( updateSuccess == null ) {
				return cb(true ,null);
			} 
			if (err) return cb(err ,null);
        	return cb(null , updateSuccess )
		});
	},
	handleDelete( idVideo   ,cb ) {
		modalBuffComment.findOneAndRemove( {idVideo : idVideo}, function(err , deleteSuccess) { 
			if ( deleteSuccess == null ) {
				return cb(true ,null);
			} 
			if (err) return cb(err ,null);
        	return cb(null , deleteSuccess )
		});
	}

}
module.exports = BuffCommentController ;