import cv2
import os

photo_1 = os.path.join((os.path.dirname(__file__)), '1.jpg')
photo_2 = os.path.join((os.path.dirname(__file__)), '2.jpg')
photo_3 = os.path.join((os.path.dirname(__file__)), '3.jpg')
photo_4 = os.path.join((os.path.dirname(__file__)), '4.jpg')

frame = os.path.join((os.path.dirname(__file__)), '../frame/1L.png')

img1 = cv2.imread(photo_1, cv2.IMREAD_COLOR)
img2 = cv2.imread(photo_2, cv2.IMREAD_COLOR)
img3 = cv2.imread(photo_3, cv2.IMREAD_COLOR)
img4 = cv2.imread(photo_4, cv2.IMREAD_COLOR)

frame = cv2.imread(frame, cv2.IMREAD_COLOR)
frame = cv2.resize(frame, (1480, 1000))

img1 = img1[40 : 1040, 220 : 1700, : ]
img2 = img2[40 : 1040, 220 : 1700, : ]
img3 = img3[40 : 1040, 220 : 1700, : ]
img4 = img4[40 : 1040, 220 : 1700, : ]

# convert_img1 = cv2.rotate(img1, cv2.ROTATE_90_CLOCKWISE)
# convert_img2 = cv2.rotate(img2, cv2.ROTATE_90_CLOCKWISE)
# convert_img3 = cv2.rotate(img3, cv2.ROTATE_90_CLOCKWISE)
# convert_img4 = cv2.rotate(img4, cv2.ROTATE_90_CLOCKWISE)

cv2.imwrite(photo_1, img1)
cv2.imwrite(photo_2, img2)
cv2.imwrite(photo_3, img3)
cv2.imwrite(photo_4, img4)