var port =  process.env.OPENSHIFT_NODEJS_PORT;   // Port 8080 if you run locally
var address =  process.env.OPENSHIFT_NODEJS_IP; // Listening to localhost if you run locally
app.listen(port, address);
