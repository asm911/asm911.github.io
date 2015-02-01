/**
 * Created by Alexander on 2/2/2015.
 */

var express = require('express'),
    app;

app = express();

app.use(express.static(__dirname));

app.listen(8080, function (err) {
    if (err) {
        console.error(err);
        return;
    }

    console.log('Server is listening port 8080...');
});