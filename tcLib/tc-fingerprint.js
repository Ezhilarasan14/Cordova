var fingerPrintId;
document.addEventListener("deviceready",onDeviceReadyforFingerPrint,false);

function onDeviceReadyforFingerPrint() {
    fingerPrintId=1;
    startFingerPrint();
}   

function startFingerPrint(){
    tcIsAvailable();
}

function tcIsAvailable(){
    Fingerprint.isAvailable(isAvailableSuccessforFingerPrint, isAvailableErrorforFingerPrint);
}

function isAvailableSuccessforFingerPrint(result){
    console.log("Fingerprint available");
    console.log(result);
    //tcFingerPrint();
}

function tcFingerPrint(){
    Fingerprint.show({
        clientId: "Fingerprint-Demo",
        clientSecret: "password" //Only necessary for Android
      }, successCallbackforFingerPrint, errorCallbackforFingerPrint);
}
function isAvailableErrorforFingerPrint(result){
    console.log(result);
    console.log("isAvailableErrorforFingerPrint");
}

function successCallbackforFingerPrint(){
    console.log("Authentication successfull");
  }

  function errorCallbackforFingerPrint(err){
    console.log("Authentication invalid " + err);
  }
