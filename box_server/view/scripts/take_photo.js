var myVideoStream = document.getElementById('myVideo');

// var myStoredInterval = 0;

// async function get_stream() {
//   navigator.mediaDevices.enumerateDevices().then((device) => {
//     var video = devices.filter(device => device.kind === 'videoinput');
//     const rgbcamera = video.find(device => device.label.includes('RGB'))
//     console.log(rgbcamera.deviceId + "aaaaaaaaaaaaaaaaaa")
//   })
// }
// // const id = navigator.getUserMedia
// // const constraints = {

// // }

// function getVideo() {
//     navigator.getMedia = navigator.getUserMedia
//     // const i = getMedia.devices
//     // console.log(i)

//     // || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

//     navigator.getMedia({
//         video: {
//           deviceId: "df94225a577159a4e1528476b659f5d751b18266d97828f8e5034b384271e55c",
//             // deviceId:"a48df34bf10729b6ec3f59abf9f3a74fdb1cbd0586ba739667ec5679bdfd5d59"
//         }, 
//         audio: false,
//         depth: false
//     },
//     function(stream) {
//       myVideoStream.srcObject = stream
//       myVideoStream.play();
//     }, 
                       
//      function(error) {
//        alert('webcam not working');
//     });
// }

// if (!navigator.mediaDevices?.enumerateDevices) {
//     console.log("enumerateDevices() not supported.");
//   } else {
//     console.log(navigator.mediaDevices)
//     // List cameras and microphones.
//     navigator.mediaDevices.enumerateDevices()
//       .then((devices) => {
//         var video = devices.filter(device => device.kind === 'videoinput');
//         const rgbcamera = video.find(device => device.label.includes('RGB'))
//         devices.forEach((device) => {
//           console.log(`${device.kind}: ${device.label} id = ${device.deviceId}`);
//         });
//       })
//       .catch((err) => {
//         console.error(`${err.name}: ${err.message}`);
//       });
//   }

// getVideo()

// 미디어 장치 정보를 가져오는 함수
function getMediaDevices() {
  if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
    return navigator.mediaDevices.enumerateDevices();
  } else {
    return new Promise(function(resolve, reject) {
      MediaStreamTrack.getSources(resolve);
    });
  }
}

// RGB 카메라 스트림 얻기
async function getRGBCameraStream() {
  const devices = await getMediaDevices();
  const videoDevices = devices.filter(device => device.kind === 'videoinput');
  var rgbCameraDevice = videoDevices.find(device => device.label.includes('Pro Stream Webcam'));
  // Pro Stream Webcam
  // Intel(R) RealSense(TM) Depth Camera 435 with RGB Module
  console.log(devices)
  
  if (rgbCameraDevice == undefined) {
    rgbCameraDevice = videoDevices
  }
    const constraints = {
      video: {
        deviceId: { exact: rgbCameraDevice.deviceId },
        width: 1920,
        height: 1080
        // deviceId: {exact: "d658b07ac2e87cb3526b16c4a4e2d1bedd8002000da9cb05721c3a49b7d9c8d3"}
        }
      }

    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      return stream;
    } catch (error) {
      console.error('Failed to get RGB camera stream:', error);
      return null;
    }
  }
  //   else {
  //   console.error('RGB camera not found');
  //   return null;
  // }

// RGB 카메라 스트림으로 변경
async function switchToRGBCamera() {
  const rgbCameraStream = await getRGBCameraStream();
  
  if (rgbCameraStream) {
    const myVideoStream = document.getElementById('myVideo');
    myVideoStream.srcObject = rgbCameraStream;
    myVideoStream.play();

  }
}

async function capture() {
  const video_stream = await document.getElementById('myVideo')
  const canvasElement = document.createElement('canvas');
  document.body.appendChild(canvasElement)
  const context = canvasElement.getContext('2d', () => {
  })
  const width = video_stream.videoWidth;
  const height = video_stream.videoHeight;
  canvasElement.width = width;
  canvasElement.height = height;
  context.drawImage(video_stream, 0, 0, width, height);

  const imgdata = canvasElement.toDataURL('image/jpeg');
  return imgdata
}

// RGB 카메라로 변경
switchToRGBCamera();

// 카메라 init

const cnt1 = document.getElementById("cnt1")
const cnt2 = document.getElementById("cnt2")
const cnt3 = document.getElementById("cnt3")
const cnt4 = document.getElementById("cnt4")

const gif = document.getElementById("gif")

// 준비 완료 response 오면 4sec af 3초마다 촬영 신호
const delay = 4000

setTimeout(function() {
  cnt1.className = "count"
  console.log("hi")
  setTimeout(function() {
    cnt1.className = "off";
    capture().then(
      (data) => {
        const img_data = data.replace('^data:image\/jpeg;base64,', '')
        console.log(img_data)
        const reqbody = {
          image: img_data
        }
        fetch("http://127.0.0.1:3000/save/1" , {
        method: "POST",
        headers: {
          'Access-Control-Allow-Origin' : '*',
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify(reqbody)
        })
        .then((response) => {
          setTimeout(function () {
            cnt2.className = "count"
            console.log("hi")
            setTimeout(function () {
              cnt2.className = "off";
              capture().then(
                (data) => {
                  const img_data = data.replace('^data:image\/jpeg;base64,', '')
                  console.log(img_data)
                  const reqbody = {
                    image: img_data
                  }
                  fetch("http://127.0.0.1:3000/save/2" , {
                  method: "POST",
                  headers: {
                    'Access-Control-Allow-Origin' : '*',
                    'Content-Type' : 'application/json',
                  },
                  body: JSON.stringify(reqbody)
                  })
                  .then((response) => {
                    setTimeout(function () {
                      cnt3.className = "count"
                      console.log("hi")
                      setTimeout(function() {
                        cnt3.className = "off";
                        capture().then(
                          (data) => {
                            const img_data = data.replace('^data:image\/jpeg;base64,', '')
                            console.log(img_data)
                            const reqbody = {
                              image: img_data
                            }
                            fetch("http://127.0.0.1:3000/save/3" , {
                            method: "POST",
                            headers: {
                              'Access-Control-Allow-Origin' : '*',
                              'Content-Type' : 'application/json',
                            },
                            body: JSON.stringify(reqbody)
                            })
                            .then((response) => {
                              setTimeout(function () {
                                cnt4.className = "count"
                                console.log("hi")
                                setTimeout(function() {
                                  cnt4.className = "off";
                                  capture().then(
                                    (data) => {
                                      const img_data = data.replace('^data:image\/jpeg;base64,', '')
                                      console.log(img_data)
                                      const reqbody = {
                                        image: img_data
                                      }
                                      fetch("http://127.0.0.1:3000/save/4" , {
                                      method: "POST",
                                      headers: {
                                        'Access-Control-Allow-Origin' : '*',
                                        'Content-Type' : 'application/json',
                                      },
                                      body: JSON.stringify(reqbody)
                                      })
                                      .then((response) => {
                                        location.replace('select_photo.html')
                                      })
                                    }
                                  )
                                }, 3000)
                              }, delay)
                            })
                          }
                        )
                      },3000)
                    },delay)
                  })
                }
              )
            }, 3000)
          },delay)
        })
      }
    );
    // fetch("http://127.0.0.1:3000/save/1" , {
    //   method: "POST",
    //   headers: {
    //     'Content-Type' : 'application/x-www-form-urlencode',
    //   },
    //   body: img_data
    // })
    // .then((response) => {
    //   cnt2.className = "count"
    //   setTimeout(function () {
    //     cnt2.className = "off"
    //     fetch("http://127.0.0.1:5500/pic2", {
    //       method: "POST",
    //     })
    //     .then((response) => {{
    //       cnt3.className = "count"
    //       setTimeout(function () {
    //         cnt3.className = "off"
    //         fetch("http://127.0.0.1:5500/pic3", {
    //           method: "POST",
    //         })
    //         .then((response) => {
    //           cnt4.className = "count"
    //           setTimeout(function () {
    //             cnt4.className = "off"
    //             fetch("http://127.0.0.1:5500/pic4", {
    //               method: "POST",
    //             })
    //             .then((response) => {
    //                 console.log(response)
    //                 if (response.status == 200) {
    //                   location.replace("select_photo.html")
    //                 }
    //             })
    //           }, 3000)
    //         })
    //       }, 3000)}
    //     })
    //   },3000)
    // })
  },3000)
},3000)
// 마지막 신호의 return 오면 화면전환
