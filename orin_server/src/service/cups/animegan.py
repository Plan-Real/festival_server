from PIL import Image, ImageDraw, ImageFont

# img = Image.open('AnimeGAN/Image/result/face_v2/face_v2_0.jpg').convert('RGB')
# img = img.resize((890, 1190))
# text_color = (255, 255, 255)
# fill_color = (0, 0, 0)
# width = 10

# bbox     = (0, 1090, 890, 1190)
# text_pos = (360, bbox[1] + width)
# font_size = 50
# font = ImageFont.truetype('./Font/Wonderful.otf', size = font_size)

# draw = ImageDraw.Draw(img)
# draw.rectangle(bbox, outline = fill_color, fill = fill_color, width = width)
# draw.text(text_pos, 'Plan - Real', text_color, font)
# img.save('./test.jpg', 'JPEG')

# img.show()

img = Image.open('AnimeGAN/Image/result/face_v2/face_v2_0.jpg').convert('RGB')
img = img.resize((336, 450))
text_color = (255, 255, 255)
fill_color = (0, 0, 0)
width = 10

bbox     = (0, 400, 336, 450)
text_pos = (120, bbox[1] + width)
font_size = 30
font = ImageFont.truetype('./Font/Wonderful.otf', size = font_size)

draw = ImageDraw.Draw(img)
draw.rectangle(bbox, outline = fill_color, fill = fill_color, width = width)
draw.text(text_pos, 'Plan - Real', text_color, font)
img.save('./test.png', 'PNG')

img.show()