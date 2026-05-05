# Skeleton Implementation for Sharepoint

This is a hacked-together experiment for using [skeleton.css](http://getskeleton.com/) in Sharepoint sites. It turns out, it's possible when you use the Modern Script Editor web part.

<img width="461" height="227" alt="image" src="https://rawcdn.githack.com/mcmasterhcs/css-snippets/0e34cea62ee5457d33bc5c42ea9fdff2ab69a75e/skeleton/poppins/woff2/Poppins-Regular.woff2" />

When you use the Modern Script Editor (above), you can add the following lines in order to use the Skeleton CSS and Poppins.

```html
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="https://raw.githack.com/mcmasterhcs/css-snippets/main/skeleton/normalize.css">
<link rel="stylesheet" href="https://raw.githack.com/mcmasterhcs/css-snippets/main/skeleton/skeleton.css">
<link rel="stylesheet" href="https://raw.githack.com/mcmasterhcs/css-snippets/main/skeleton/skeleton.css">
<style>
 @font-face {
   font-family: Poppins; /* set name */
   src: url(https://raw.githack.com/mcmasterhcs/css-tests/refs/heads/main/poppins-test/Poppins-Regular.woff2); /* url of the font */
 }
  .container {
    font-family: Poppins;
    font-size: 1.8rem;
    line-height: 1.5;
  }
</style>
</head>
<body>

</body>
</html>
```
