angular.module("chatApp", [])
.controller("chatCtrl", chatCtrl)

function chatCtrl(){
    var chat = this;
    console.log("hi");
    var cs;

    chat.send = function csinput(t){
        
        var url = "https://www.cleverbot.com/getreply";
        var key = "CC5urOUn56ymYIkJxTj-jh6q3oA";
        var input = encodeURIComponent (t);
        
        url += '?key=' + key + "&input=" + input + '&cs=' + cs + '&callback=ProcessReply';
        
        var script_element = document.createElement('script'); //create new script element
        script_element.setAttribute ('action', 'text/javascript'); script_element.setAttribute ('src', url); 
        document.getElementById ('reply').appendChild(script_element); //append to page, which executes it

        console.log("send working!!")
        chat.text='';
    }
}

function ProcessReply (data) {
    if (data.error) console.log ('Error: ' + data.error);
    else
    var out = document.getElementById("reply");
    // allow 1px inaccuracy by adding 1
    var isScrolledToBottom = out.scrollHeight - out.clientHeight <= out.scrollTop + 1;
    document.getElementById ('reply').innerHTML += '<div align="right" class="container darker" id="chh"><p>' + data.input + '</p></div>'; 
    document.getElementById ('reply').innerHTML += '<div align="left" class="container" id="chb"><p>' + data.output + '</p></div>';        
    cs = data.cs;
    if(isScrolledToBottom)
        out.scrollTop = out.scrollHeight - out.clientHeight;
}