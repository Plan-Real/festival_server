var myVideoStream = document.getElementById('myVideo');

var myStoredInterval = 0;

function getVideo() {
    navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

    navigator.getMedia({
        video: {
            deviceId:"a48df34bf10729b6ec3f59abf9f3a74fdb1cbd0586ba739667ec5679bdfd5d59"
        }, 
        audio: false
    },
    function(stream) {
        myVideoStream.srcObject = stream   
        myVideoStream.play();
    }, 
                       
     function(error) {
       alert('webcam not working');
    });
}

if (!navigator.mediaDevices?.enumerateDevices) {
    console.log("enumerateDevices() not supported.");
  } else {
    // List cameras and microphones.
    navigator.mediaDevices.enumerateDevices()
      .then((devices) => {
        devices.forEach((device) => {
          console.log(`${device.kind}: ${device.label} id = ${device.deviceId}`);
        });
      })
      .catch((err) => {
        console.error(`${err.name}: ${err.message}`);
      });
  }

getVideo()

// 카메라 init

// 준비 완료 response 오면 3초마다 촬영 신호

// 마지막 신호의 return 오면 화면전환


fetch("http://127.0.0.1:3000/hi" , {
    method: "GET",
})
    .then((response) => 
    location.replace("select_photo.html")

    )
