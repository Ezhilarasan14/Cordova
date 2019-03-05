var deviceId;

document.addEventListener("deviceready", onDeviceReadyforFileManager, false);

function onDeviceReadyforFileManager() {
    
    deviceId = 1;
    console.log("Cordova version: " + device.cordova + "\n" +
      "Device model: " + device.model + "\n" +
      "Device platform: " + device.platform + "\n" +
      "Device UUID: " + device.uuid + "\n" +
      "Device version: " + device.version); 
}

function openFileManager(){
    console.log(cordova.file);
    console.log(FileTransfer);

    var fileTransfer = new FileTransfer();
    console.log(fileTransfer);
    console.log("=====");
    fileChooser.open(successCallbackforFile, failureCallbackforFile);
    console.log("=====");
}

function fileBrowse(fileId){
    document.getElementById(fileId).click();
}

function successCallbackforFile(){
    console.log(callBackResult);
}
function errorCallbackforFile(callBackResult){
    console.log(callBackResult);
}

function failureCallbackforFile(callBackResult){
    console.log(callBackResult);
}