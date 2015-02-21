
module.exports = {
	getMapMarkers : function() {
		return require('./yeg-public-art.json').data;
	},

	getName : function(artPiece) {
		return artPiece[8];
	},

	getLatLon : function(artPiece) {
		return artPiece[17];
	}
};
