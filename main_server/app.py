################# Do not remove this module ##################
import os
import sys
from pathlib import Path
FILE = Path(__file__).resolve()
ROOT = FILE.parents[0]  # YOLOv5 root directory
if str(ROOT) not in sys.path:
    sys.path.append(str(ROOT))  # add ROOT to PATH
ROOT = Path(os.path.relpath(ROOT, Path.cwd()))  # relative
import cups
import os
##############################################################

##### AI #####
import torch
from torchvision.transforms.functional import to_tensor, to_pil_image
from model import Generator

torch.backends.cudnn.enabled = False
torch.backends.cudnn.benchmark = False
torch.backends.cudnn.deterministic = True
##############

from flask import Flask, request, send_file, jsonify
from PIL import Image
import base64

origin_path = os.path.join(os.path.dirname(__file__), "src/origin/1.png")
convert_path = os.path.join(os.path.dirname(__file__), "src/convert/1.png")
save_path_o = os.path.join(os.path.dirname(__file__), "src/save/origin/")
save_path_c = os.path.join(os.path.dirname(__file__), "src/save/convert/")

def convertImage(index):
    # img = Image.open(origin_path).convert("RGB")
    # print(img)
    import cv2
    img = cv2.imread(origin_path)
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    img = cv2.resize(img, (1980, 1280), interpolation=cv2.INTER_LANCZOS4)

    #####################
    ''' convert Image '''
    cuda = False # defalut cpu
    device = 'cuda:0' if cuda else 'cpu' 
    net = Generator()
    net.load_state_dict(torch.load('./Model/face_paint_512_v2.pt', map_location="cpu"))
    net.to(device).eval()

    with torch.no_grad():
        img = to_tensor(img).unsqueeze(0) * 2 - 1
        out = net(img.to(device), False).cpu()
        out = out.squeeze(0).clip(-1, 1) * 0.5 + 0.5
        out = to_pil_image(out)
    ######################

    out.save(convert_path)
    
    return img

def save_img():
    def rename(img):
        return str(base64.b64encode(img)[0:100]).replace('/','||')
    with open(origin_path, 'rb') as f:
        img1 = f.read()
    with open(convert_path, 'rb') as f:
        img2 = f.read()
    with open(save_path_o + f"{rename(img1)}.png", 'wb') as f:
        f.write(img1)
    with open(save_path_c + f"{rename(img2)}.png", 'wb') as f:
        f.write(img2)
    

def save_img_from_base64(base64_data, file_path):
    with open(file_path, "wb") as f:
        img = base64.b64decode(base64_data)
        f.write(img)

def load_img_to_base64(file_path):
    with open(file_path, "rb") as f:
        img = f.read()
    img = base64.b64encode(img)
    return img


app = Flask(__name__)

@app.route('/convert', methods=['POST'])
def convert():
    base64_data = request.data

    save_img_from_base64(base64_data, origin_path)

    index = 1

    img = convertImage(index)

    img = load_img_to_base64(convert_path)

    save_img()

    return img

@app.route('/print', methods=['GET'])
def print_():
    conn = cups.Connection()
    printers = list(conn.getPrinters().keys())
    printer_name = printers[0]
    printer_info = conn.getPrinterAttributes(printer_name)
    # media_max = printer_info['media']

    path = os.path.join(os.path.dirname(__file__), "../../../view/assets/photo/merge.jpg")
    output_path = "/home/ccy/Documents/nam/festival_server/main_server/src/convert/1.png"

    conn.printFile(printer_name,
                output_path,"",{
                    'media-bottom-margin-supported': '0',
                    'media-top-margin-supported': '0',
                    'media-left-margin-supported': '0',
                    'media-right-margin-supported': '0',
                }) 
    return 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)