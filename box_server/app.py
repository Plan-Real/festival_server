import cv2, os
from flask import Flask, Response

app = Flask(__name__)

def takepic(i):
    cap = cv2.VideoCapture(0)
    ret, frame = cap.read()
    (_, frame) = cap.read()
    img = f"view/assets/photo/{i}.jpg"
    cv2.imwrite(img, frame)
    cap.release()
    return i

@app.route('/pic1', methods=['POST'])
def pic1():
    k = takepic(1)
    i = Response("hi")
    i.headers["Access-Control-Allow-Origin"] = "*"
    return i
    
@app.route('/pic2', methods=['POST'])
def pic2():
    k = takepic(2)
    i = Response("hi")
    i.headers["Access-Control-Allow-Origin"] = "*"
    return i

@app.route('/pic3', methods=['POST'])
def pic3():
    k = takepic(3)
    i = Response("hi")
    i.headers["Access-Control-Allow-Origin"] = "*"
    return i

@app.route('/pic4', methods=['POST'])
def pic4():
    k = takepic(4)
    i = Response("hi")
    i.headers["Access-Control-Allow-Origin"] = "*"
    return i

if __name__ == '__main__':
    app.run(host='0.0.0.0', port = 5500)