'use strict';

var server = require('./_lib/server').default;
var PORT = process.env.PORT || 3000;

server.listen(PORT, function() {
    console.log('Server on port ', PORT);
});
