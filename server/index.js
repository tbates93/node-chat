var express = require("express")
var bodyParser = require("body-parser")
const messages_controller = require( __dirname + '/controllers/messages_controller');

const app = express();

app.use(bodyParser.json());
app.use( express.static( __dirname + '/../public/build' ) );

const baseURL = "/api/messages";

app.post(baseURL,messages_controller.create)
app.put(`${baseURL}/:id`,messages_controller.update)
app.delete(`${baseURL}/:id`,messages_controller.delete)
app.get(baseURL,messages_controller.read)

app.listen(3000, () => {console.log("Ears on port 3000")})
