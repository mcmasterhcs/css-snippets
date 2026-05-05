# Lightbox Script

To include in a MacSites page, include the following two lines in the "Insert Script to <head>" plugin box:

```
<link rel="stylesheet" href="https://raw.githack.com/mcmasterhcs/css-snippets/main/lightbox/lightbox.css">
<script src="https://raw.githack.com/mcmasterhcs/css-snippets/main/lightbox/lightbox.js"></script>
```

## Usage

Add a new `Content Area` card. Click the `Text` tab to open the HTML. Follow this format for the gallery:

```html
<h2>Photo Gallery</h2>
<div class="gallery-lb">
<a href="image1.png" class="lightbox_trigger">
<img src="image1.png" alt="">
</a>
<a href="image2.png" class="lightbox_trigger">
<img src="image2.png" alt="">
</a>
<a href="image3.png" class="lightbox_trigger">
<img src="image3.png" alt="">
</a>
</div>
```
Replace `image1.png`, `image2.png` and `image3.png` above with the URLs to the images. Add more lines as needed by copying as needed:

```html
<a href="image3.png" class="lightbox_trigger">
<img src="image3.png" alt="">
</a>
```

By default, there will be 3 cards per row, with the thumbnails cropped to 16:9.
