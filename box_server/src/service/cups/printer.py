import cv2
import os
import argparse

parser = argparse.ArgumentParser()
parser.add_argument("-d", "--decimal", action="store")
args = parser.parse_args()

photo_path = os.path.join((os.path.dirname(__file__)), "../../../view/assets/photo/convert.jpg")

# t = os.path.join((os.path.dirname(__file__)), "2.jpg")

frame_path = os.path.join((os.path.dirname(__file__)), f"../../../view/assets/frame/{args.decimal}L.png")

img = cv2.imread(photo_path, cv2.IMREAD_COLOR)
img = img[40:1040,220:1700,:]
frame = cv2.imread(frame_path, cv2.IMREAD_COLOR)
frame = cv2.resize(frame, (1480, 1000))

output_path = os.path.join((os.path.dirname(__file__)), "merge.jpg")
mask_path = os.path.join((os.path.dirname(__file__)), f"../../../view/assets/frame/{args.decimal}_mask.png")

mask = cv2.imread(mask_path, cv2.IMREAD_GRAYSCALE)

out = cv2.copyTo(img, mask, frame)
cv2.imwrite(output_path, out)

import cups
import os

conn = cups.Connection()
printers = list(conn.getPrinters().keys())
printer_name = printers[0]
printer_info = conn.getPrinterAttributes(printer_name)
# media_max = printer_info['media']

path = os.path.join(os.path.dirname(__file__), "merge.jpg")

conn.printFile(printer_name,
               output_path,"",{
                'media-bottom-margin-supported': '0',
                'media-top-margin-supported': '0',
                'media-left-margin-supported': '0',
                'media-right-margin-supported': '0',
               }) 
