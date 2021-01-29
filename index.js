//Some older browsers will mistakenly display JS as text. But if they fail the serverdie check, it's assumed they'll fail the clientside check.
var str = String(require('fs').readFileSync('./public/unsupported.html')).replace(/<script[^>]*>(?:(?!<\/script>)[^])*<\/script>/g, "")
app.use("/*", (req, res, next) => {
    var ua = req.get('User-Agent');
    if (ua != null) { //Mosaic doesn't send a user agent
        console.log(ua)
        var i = ua.indexOf("Mozilla/");
        if (i == -1) {
            next(); //All older browswers I tested sent 'Mozilla' before they attempted to connect...lets just let the secondary process handle this
            return;
        }
        //Get the Mozilla version number
        var f = ua.substr(i + "Mozilla/".length, 1);
        //Browsers with the Mozilla/5* string are assumed to be capable of running the client side detection script
        if (f >= 5) {
            next();
            return;
        }
    }
    //The 505 code will kill connections from mosiac
    res.writeHead(505, "text/http");
    res.write(str)
    res.end()
})
