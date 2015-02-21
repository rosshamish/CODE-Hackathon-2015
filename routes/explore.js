
module.exports = function(router) {
	router.get('/', function(req, res) {
		res.render('explore', {
			name: 'something'
		});
	})
}