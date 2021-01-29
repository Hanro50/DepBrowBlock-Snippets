//This use to be a check for internet explorer...till I got bored
var isIE = false;
if (!isIE){
    try{
        //Check her for features you absolutely need in your web page. Don't forget to backport those changes to the unsupported.html page!
        console.log(
            "test")
        if (!'fetch' in window  || Object.freeze==null){
          
            isIE = true;
        }
        }catch(e){
            isIE = true;
        }
}

if (isIE) {
    window.location = "/unsupported.html"

}
