import os
import glob
from PIL import Image

import cups

# files = glob.glob('./photo/*.jpg')
# 89 mm x 119 mm
# 54 mm x 86 mm 
# (0,0)
# (44.5, 0)
# (0, 59.5)
# (44.5, 59.5)

# fourcut = Image.new('RGB', (895, 1195), (255, 255, 255))

# for index, f in enumerate(files):
#     img = Image.open(f)
#     img_resize = img.resize((440, 590))
#     if index == 0 : fourcut.paste(img_resize, (5,5))
#     elif index == 1 : fourcut.paste(img_resize, (450,   5))
#     elif index == 2 : fourcut.paste(img_resize, (  5, 600))
#     elif index == 3 : fourcut.paste(img_resize, (450, 600))

# fourcut.save('./fourcut/0.png', 'PNG')

conn = cups.Connection()
printers = list(conn.getPrinters().keys())
printer_name = printers[1]
print(printers)
conn.printFile(printer_name, 'view/photo/convert.jpg',"Test",{}) 


