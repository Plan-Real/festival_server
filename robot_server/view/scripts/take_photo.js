var myVideoStream = document.getElementById('myVideo');

var myStoredInterval = 0;

function getVideo() {
    navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

    navigator.getMedia({
        video: {
            // deviceId:"ec24fa6365362930858ecd21b8f258fce23c1ab63fe6e39a8a8082ffeda769e0"
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
