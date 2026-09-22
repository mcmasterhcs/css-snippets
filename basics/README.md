# Basic CSS Improvements

This file is used to improve `iframe` embeds on the site by making them responsive (that is, to not be affected by whether they are viewed on mobile or desktop).

This is an example embed for McMaster University's Google Map:

```html
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4906.187171484003!2d-79.91904465120516!3d43.261883102511995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c84ac44f72ac1%3A0x399e00ea6143011c!2sMcMaster%20University!5e1!3m2!1sen!2sca!4v1790087997934!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
```

By surrounding the HTML with a `div` that makes it responsive, it means that it will play nicely when being viewed on big or small viewports.

```html
<div class="responsive-embed">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4906.187171484003!2d-79.91904465120516!3d43.261883102511995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c84ac44f72ac1%3A0x399e00ea6143011c!2sMcMaster%20University!5e1!3m2!1sen!2sca!4v1790087997934!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
</div>
```

## Aspect Ratios

In addition to adding the `responsive-embed` class, you can also add a few aspect ratios as classes to enforce a specific shape of the embed.
|Aspect Ratio|Class|  
|---|---|
|16:9|`responsive-embed-16x9`|
|4:3|`responsive-embed-4x3`|
|5:6|`responsive-embed-5x6`|

### Example

The above class must be added **in addition** to the base `responsive-embed` class.

```html
<div class="responsive-embed responsive-embed-16x9">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4906.187171484003!2d-79.91904465120516!3d43.261883102511995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c84ac44f72ac1%3A0x399e00ea6143011c!2sMcMaster%20University!5e1!3m2!1sen!2sca!4v1790087997934!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
</div>
```