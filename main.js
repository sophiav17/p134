function setup()
{
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
}

function draw()
{

    for(i = 0; i < objects[i].length; i++){
    if(object[i].label == 'person')
    {
        document.getElementById("detection").innerHTML = "Baby Detected";
        music.mp3.pause();
    } else
    {
        document.getElementById("detection").innerHTML = "Baby Not Detected";
        music.mp3.play();
    }

}

if(object[i].length < 0)
{
    document.getElementById("detection").innerHTML = "Baby Not Detected";
    music.mp3.play();
}

}