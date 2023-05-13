fetch("http://127.0.0.1:3000/convert/convert", {method: "GET"})
.then((response) => {
    location.replace("convert.html")
    // setTimeout(function () {
    //     location.replace("convert.html")
    // },3000)
})
// 서버로 이미지 전송

// 이미지 변환 리턴 오면 화면 전환

