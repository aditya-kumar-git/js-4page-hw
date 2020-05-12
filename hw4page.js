//Zoom picture In and Out

var photoZoom=100;

function zoomInOut(event)
    {
        var leftOrRight=event.target.id;
        if(leftOrRight=="one__picture__left")
            {
                if(photoZoom>10)
                    {
                        photoZoom-=10;
                    }
                document.querySelector("#one__picture").style.backgroundSize=photoZoom+"%";
                
            }
        else if(leftOrRight=="one__picture__right")
            {
                if(photoZoom<250)
                    {
                        photoZoom+=10;
                    }
                document.querySelector("#one__picture").style.backgroundSize=photoZoom+"%";
            }
    }

document.querySelector("#one__picture").addEventListener("click",zoomInOut);


//Change Colour of pages

var colorPage;
function changeColor()
    {
        var pageNo=document.querySelector("#pageSelector").value;
        var pageColor=document.querySelector("#colourSelector").value;
        switch (pageColor)
            {
                case "Purple" : colorPage="#451356";break;
                case "Red" : colorPage="#b94d5f";break;
                case "Orange" : colorPage="#ff7d4f";break;
                case "Blue" : colorPage="#4d6fb9";break;
            }
        document.querySelector("#"+pageNo).style.backgroundColor=colorPage;

        console.log(pageNo,pageColor);
    }

document.querySelector("#changeBtn").addEventListener("click",changeColor);


//Get Location


function getLoc()
    {
        navigator.geolocation.getCurrentPosition(loc=>{
            document.querySelector("#lon").textContent=loc.coords.longitude;
            document.querySelector("#lat").textContent=loc.coords.latitude;
        });
    }
document.querySelector("#locationBtn").addEventListener("click",getLoc);


//Stop moving text

function stopMoving()
    {
        document.querySelector("#movingText").stop();
    }

document.querySelector("#stopBtn").addEventListener("click",stopMoving);