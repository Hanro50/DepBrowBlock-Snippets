# DepBrowBlock-Snippets
This is some code I wrote to reliable handle deprecated browsers with nodeJS and express 

## Why
Because I was bored...and because I can

## Was this an excuse to boot up xp and play around with serveral legacy browsers
Yes

## Are you taking this code submission seriously?
No->C'mon, who uses Netscape in 2021? (When Firefox exists)

## 'Supported' browsers [Browsers this will throw out]
<ul><li>Netscape Navigator 1.0+</li>
<li>Internet explorer 1.5+ (Could not get any earlier version to function in a vm for long enought to test)</li>
<li>Mosaic 1.0* (I don't understand how to format html for this browser, but sending the code 505 works</li>
</ul>

## How this works 
First the server checks for the presence of a user agent (Mosaic doesn't send one) <br>
Then it checks for the Mozilla tag (All browsers will send this tag) <br>
>If the Mozilla tag is marked as version 4 or below then the server sends a stripped down version of the unsupported page. This is done as one cannot be sure that a set legacy browser can even run javascript. If the browser says it's compliant with Mozilla version 5 and up. Then the responsibility for the needed checks are done on the client. <br>

## Just a note
I had to resort to using some pre-CSS era tags to insure that the unsupported web page will always load correctly. Also, have fun testing and breaking my scripting!
