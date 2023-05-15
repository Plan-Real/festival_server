################# Do not remove this module ##################
import os
import sys
from pathlib import Path
FILE = Path(__file__).resolve()
ROOT = FILE.parents[0]  # YOLOv5 root directory
if str(ROOT) not in sys.path:
    sys.path.append(str(ROOT))  # add ROOT to PATH
ROOT = Path(os.path.relpath(ROOT, Path.cwd()))  # relative
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
import base64

origin_path = 'src/origin/'
convert_path = 'src/convert/'

def convertImage(index):
    with open(origin_path+f"/{index}.png", "rb") as f:
        img = f.read()

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

    with open(convert_path+f"/{index}.png", "wb") as f:
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

    index = 1

    img = convertImage(index)

    img = base64.b64encode(img)

    return img

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)