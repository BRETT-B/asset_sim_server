const 	 http 	  = require('http'),
    	   axios 	  = require('axios'),
    	   geo 	    = require('geolibri'),
         table    = require('./siteList'),
    	   prompt 	= require('prompt-sync')();


console.log(table.toString());

var site = prompt('Enter site ID: ');
var port = prompt('Enter available port for server: ');
var quantity = Number(prompt('Enter number of assets to mock (1-4): '));
var index = 0;
var nodes = ['001', '002', '003', '004'];
var siteURL = `https://lighthouseqa.ips.acuitynext.io/api/zone/norbac/siteID/${site}`;

setInterval(() => {
    var nodeURL = `https://dsa:acuity2016@azure-rnd.iot-dsa.org/p?http://localhost:8020/test/${nodes[index]}/position`;
    index = (index + 1) % quantity;
    axios.get(siteURL).then((response) => {
        if (response.data.count === 0) {
            throw new Error(`Site ${site} has no data related to it`);
        }
        var point = {
            latitude: response.data.result[0].geometry.coordinates[0][index][1],
            longitude: response.data.result[0].geometry.coordinates[0][index][0]
        };
        return point;
    }).then((asset) => {
        var currentPosition = geo.point(asset);
        var moveAsset = (currentPosition) => {
            var rand = Math.random()*20
            newPosition = currentPosition.N(rand).W(rand);
            return newPosition;
        };
        moveAsset(currentPosition);
        return newPosition;
    }).then((positionToPost) => {
    	var data = JSON.stringify({
        latitude: positionToPost.lat(),
        longitude: positionToPost.lng()
      });
    	axios.post(nodeURL, {
    		"?value": data
    	});
    }).catch((error) => console.log(error.message));
}, 3000/quantity);
const requestHandler = (req, res) => console.log(req.url);
const server = http.createServer(requestHandler);

server.listen(port, () => console.log('Server is live on port', port));
