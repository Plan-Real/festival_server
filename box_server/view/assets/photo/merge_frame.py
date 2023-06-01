import cv2
import os
import argparse

parser = argparse.ArgumentParser()
parser.add_argument("-d", "--decimal", action="store")
args = parser.parse_args()

photo_path = os.path.join((os.path.dirname(__file__)), "convert.jpg")

t = os.path.join((os.path.dirname(__file__)), "2.jpg")

frame_path = os.path.join((os.path.dirname(__file__)), f"../frame/{args.decimal}L.png")

img = cv2.imread(t, cv2.IMREAD_COLOR)
frame = cv2.imread(frame_path, cv2.IMREAD_COLOR)
frame = cv2.resize(frame, (1480, 1000))

output_path = os.path.join((os.path.dirname(__file__)), "merge.jpg")
mask_path = os.path.join((os.path.dirname(__file__)), f"../frame/{args.decimal}_mask.png")

mask = cv2.imread(mask_path, cv2.IMREAD_GRAYSCALE)

# _, mask = cv2.threshold(frame[:,:,3], 1, 255, cv2.THRESH_BINARY)
# mask_inv = cv2.bitwise_not(mask)

out = cv2.copyTo(img, mask, frame)
cv2.imwrite(output_path, out)
# print(args.decimal)
    
    