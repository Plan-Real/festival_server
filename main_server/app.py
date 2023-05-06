from flask import Flask, request, send_file, jsonify
import base64

origin_path = 'src/origin/'
convert_path = 'src/convert/'

def convertImage():
    with open(origin_path+'/1.png', "rb") as f:
        img = f.read()

    """
        Converting Image
    """
    
    with open(convert_path+'/1.png', "wb") as f:
        f.write(img)
    
    return img

def save_img_from_base64(base64_data, file_path):
    with open(file_path, "wb") as f:
        img = base64.b64decode(base64_data)
        f.write(img)

app = Flask(__name__)

@app.route('/convert', methods=['POST'])
def convert():
    base64_data = request.data

    save_img_from_base64(base64_data, f"{origin_path}/1.png")

    img = convertImage()

    img = base64.b64encode(img)

    return img

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)