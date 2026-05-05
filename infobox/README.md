# Infobox

This infobox is a hacked-together admonition-like element to include when we want more emphasis on something.

## Installation

Add this line to the "Insert Script to <head>" box on a MacSites page:

`<link rel="stylesheet" href="https://raw.githack.com/mcmasterhcs/css-snippets/main/infobox/infobox.css">`

## Usage

### Single Lines

Add this to your HTML. Change `goldbox` to `maroonbox` if you want a maroon note instead of a gold one.

```html
<div class="goldbox">
<p class="goldbox-title">Title</p>
<p class="goldbox-text">Text</p>
</div>
```

### Multi Lines

Add this to your HTML.

```html
<div class="goldbox">
<div class="goldbox-title"><p>Title</p></div>
<div class="goldbox-text"><p>Paragraph 1</p>
<p>Paragraph 2</p>
</div>
</div>
```

Add more `<p>`s as needed. Anything before the first `</div>` at the end of the HTML will be within the textbox.
