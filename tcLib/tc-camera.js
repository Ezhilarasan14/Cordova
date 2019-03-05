
var pictureSource;  
var destinationType;
var picId;
var appendStatus;
document.addEventListener("deviceready",onDeviceReady,false);

function onDeviceReady() {
    pictureSource=navigator.camera.PictureSourceType;
    destinationType=navigator.camera.DestinationType;
}

function onPhotoDataSuccess(imageData) {
    console.log(" Pic Id = "+picId+" = Image Source = "+imageData);
    var smallImage = document.getElementById(picId);

    if(picId == 'selfie-id'){
        // Append Image
        smallImage.style.display = 'block';
        smallImage.src = imageData;
    }else{
        // Dont Append Image
    }
    
    //console.log(smallImage.src);
    localStorage.removeItem(picId);

    localStorage.setItem(picId, imageData);
}

function onPhotoURISuccess(imageURI) {
    
    if(appendStatus == 'yes'){
        var largeImage = document.getElementById('largeImage');
        largeImage.style.display = 'block';
        largeImage.src = imageURI;
    }
    
}

function capturePhoto(idName,isAppend) {
    picId=idName;
    appendStatus = isAppend;
    console.log("Camara Open");
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, 
        {   quality: 50,
            sourceType: Camera.PictureSourceType.CAMERA,
            destinationType: destinationType.FILE_URI,
            targetWidth: 600,
	        encodingType: Camera.EncodingType.JPEG,
	        correctOrientation: true,
            saveToPhotoAlbum: true
        });
}

function capturePhotoEdit() {
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
    destinationType: destinationType.DATA_URL });
}

function getPhoto(source) {
    // Retrieve image file location from specified source
    navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, 
    destinationType: destinationType.FILE_URI,
    sourceType: source,
    saveToPhotoAlbum: true
 });
}

function onFail(message) {
    alert('Failed because: ' + message);
}