//Some older browsers will mistakenly display JS as text. But if they fail the serverside check. It's assumed they'll fail the clientside check if the serverside check fails
var str = String(require('fs').readFileSync('./public/unsupported.html')).replace(/<script[^>]*>(?:(?!<\/script>)[^])*<\/script>/g, "")
app.use("/*", (req, res, next) => {
    var ua = req.get('User-Agent');

    if (ua != null) { //Mosaic doesn't send a user agent

        var i = ua.indexOf("Mozilla/");
        if (i > -1) { //Sorry Links. But I am not supporting you since you don't run java script!

            //Get the Mozilla version number
            var f = ua.substr(i + "Mozilla/".length, 1);
            //Browsers with the Mozilla/5* string are assumed to be capable of running the client side detection script
            if (f >= 5) {

                next();
                return;
            }
        }

        console.log(ua)
    }
    //The 505 code will kill connections from mosiac. Why? Mosiac doesn't seem to support html!
    res.writeHead(505, "text/http");
    res.write(str)
    res.end()
})
