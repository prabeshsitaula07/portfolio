from PIL import Image, ImageDraw, ImageFont

# Load the image
image = Image.open("img.png").convert("RGB")  # Ensure the image is in RGB mode

# Create an ImageDraw object
draw = ImageDraw.Draw(image)

# Define the font and size (make sure it's the same font used in the original image)
font = ImageFont.truetype("arial.ttf", 40)

# The original text position, dimensions, and color (these must match the original text)
text_position = (50, 50)  # (x, y) coordinates where the text is located
text_color = (255, 255, 255)  # Original text color
background_color = (0, 0, 0)  # Color of the background that was behind the original text

# Define the new text you want to replace the old text with
new_text = "SHREE SETIDEVI"

# Calculate the bounding box for the new text
bbox = draw.textbbox(text_position, new_text, font=font)

# Erase the original text by drawing a rectangle over it (using the bounding box of the text)
draw.rectangle(bbox, fill=background_color)

# Draw the new text in the same position
draw.text(text_position, new_text, font=font, fill=text_color)

# Save the edited image as a JPEG (ensure the image is in RGB mode)
image.save("edited_image.jpg", "JPEG")

# Optionally display the image
image.show()
