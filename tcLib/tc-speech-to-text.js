var inputID;

var speech_deviceId;

document.addEventListener("deviceready", onDeviceReadyforSpeechtoText, false);

function onDeviceReadyforSpeechtoText() {
    speech_deviceId = 1;
    tcApplicationDetails();
}

function startRecordingSpeech(IDName){
    document.getElementById(IDName).focus();
    inputID = IDName;
    console.log(inputID);
    console.log( "object: " + JSON.stringify(navigator));

    console.log(window);
    //textToSpeech('Permission Granted');

    tcIsRecognitionAvailable();

    //window.plugins.speechRecognition.requestPermission(successCallbackforSpeech,errorCallbackforSpeech);
    //window.plugins.speechRecognition.isRecognitionAvailable(successCallbackforSpeech,errorCallbackforSpeech);

}

function tcIsRecognitionAvailable(){
    window.plugins.speechRecognition.isRecognitionAvailable(function(available){
        if(available){
            console.log('You can use the speechRecognition');
            tchasPermission();
        }
    }, function(err){
        console.error(err);
    });
}

function tchasPermission(){
    window.plugins.speechRecognition.hasPermission(function (isGranted){
        if(isGranted){
            getSupportedLanguages();
            tcStartListening();
            console.log('Do other things as the initialization here');
        }else{
            console.log('You need to request the permissions');
            tcRequestPermission();
        }
    }, function(err){
        console.log(err);
    });
}


function tcRequestPermission(){
    window.plugins.speechRecognition.requestPermission(function (){
        console.log('Permission Granded Requested');
        getSupportedLanguages();
    }, function (err){
        console.log('Opps, nope');
    });
}

function getSupportedLanguages(){
    window.plugins.speechRecognition.getSupportedLanguages(function(data){
        console.log("====languageList====");
        console.log(data); // ["es-ES","de-DE","id-ID" ........ ]
        console.log("====languageList====");
    }, function(err){
        console.error(err);
    });
}

function tcStartListening(){
    var settings = {
        lang: "en-US",
        showPopup: false
    };
    window.plugins.speechRecognition.startListening(function(result){
        console.log(result);
        console.log("inputID == "+inputID);
        document.getElementById(inputID).value = result[0];
    }, function(err){
        console.log(err);
    }, settings);
}

function stopRecordingSpeech(){
    window.plugins.speechRecognition.stopListening(function(){
        console.log('No more recognition');
    }, function(err){
        console.log(err);
    });
}


function textToSpeech(textForSpeech){
    TTS.speak({
        //text: 'Good morning, how are you?',
        text: textForSpeech,
        locale: 'en-US',
        rate: 1
    }, function () {
        console.log('Text succesfully spoken');
    }, function (reason) {
        console.log(reason);
    });
}


function successCallbackforSpeech(){
    console.log('success');
}
function errorCallbackforSpeech(){
    console.log('fail');
}

function tcApplicationDetails(){
    console.log("Page location is " + window.location.pathname);

    if(window.location.pathname == '/session/scan-documents'){
        console.log("hiii in path");
        //$('#username').focus();
        //document.getElementById('username').focus();
        //startRecordingSpeech('username');
    }
}