var yegPublicArtUtil = require('../lib/yeg-public-art/yegPublicArtUtils.js');

module.exports = function(router) {
	router.get('/', function(req, res) {
		console.log(yegPublicArtUtil.getMapMarkers());

		res.render('explore', {
			place: 'jade'
		});
	})
};
