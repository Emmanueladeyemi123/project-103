

Webcam.set({
    height:300,
    width:350,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");

console.log('ml5 version used is',ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/sbPAodZXo/model.json",modelLoaded());

function modelLoaded(){
    console.log("Model has loaded");
}

function take_Snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">';
    });
}