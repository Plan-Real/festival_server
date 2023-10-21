var myVideoStream = document.getElementById('myVideo');

const socket = io('ws://127.0.0.1:5000', {transports: ['websocket']});

socket.on("connect", function(){
  console.log("server connected")
})

function receive_Frames() {
  const FPS = 200;
  setInterval(() => {
    socket.emit("get_video")
  }, 10000/FPS)
}

var image
socket.on("video_frame", function(frame) {
  const box = document.getElementById("myVideo")
  box.src = frame
  image = frame
})


socket.on("image", function(frame) {
  image = frame
})

async function capture() {
  return image
}

receive_Frames();
const cnt1 = document.getElementById("cnt1")
const cnt2 = document.getElementById("cnt2")
const cnt3 = document.getElementById("cnt3")
const cnt4 = document.getElementById("cnt4")

const gif = document.getElementById("gif")

// 준비 완료 response 오면 4sec af 3초마다 촬영 신호
const delay = 4000

fetch("http://192.168.0.10:3090/move" , {
  method: "GET"
})

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
                                        fetch("http://192.168.0.10:3090/comeback", {method:"GET"}).then((response)=>{
                                          
                                        })
                                        setTimeout(function() {
                                          location.replace('select_photo.html')
                                        },3000)
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
  },3000)
},7000)
