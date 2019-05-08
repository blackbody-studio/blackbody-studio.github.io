---
title: 'Demo Project'
subtitle: 'This is a demo'
date: 2018-06-30 00:00:00
description: This page is a demo that shows everything you can do inside portfolio and blog posts.
featured_image: '/images/demo/demo-square.jpg'
---

<a class="afterglow" href="#dbvideo"> ![](https://dl.dropboxusercontent.com/s/lecj4bv4fkkf2z3/demo-landscape.jpg) </a>
<video id="dbvideo" width="1280" height="720" data-overscale="false" poster="https://dl.dropboxusercontent.com/s/lecj4bv4fkkf2z3/demo-landscape.jpg">
  <source type="video/mp4" src="https://dl.dropboxusercontent.com/s/gznqdinn08zpu9w/afterglow_local.mp4" />
  <source type="video/mp4" src="https://dl.dropboxusercontent.com/s/50xxtlw1mcey9d0/afterglow_local_hd.mp4" data-quality="hd"/>
</video>

## Demo content

This page is a demo that shows everything you can do inside portfolio and blog posts.

We've included everything you need to create engaging posts about your work, and show off your case studies in a beautiful way.

**Obviously,** we’ve styled up *all the basic* text formatting options [available in markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

You can create lists:

* Simple bulleted lists
* Like this one
* Are cool

And:

1. Numbered lists
2. Like this other one
3. Are great too

You can also add blockquotes, which are shown at a larger width to help break up the layout and draw attention to key parts of your content:

> “Simple can be harder than complex: You have to work hard to get your thinking clean to make it simple. But it’s worth it in the end because once you get there, you can move mountains.”

The theme also supports markdown tables:

| Item                 | Author        | Supports tables? | Price |
|----------------------|---------------|------------------|-------|
| Duet Jekyll Theme    | Jekyll Themes | Yes              | $39   |
| Index Jekyll Theme   | Jekyll Themes | Yes              | $39   |
| Journal Jekyll Theme | Jekyll Themes | Yes              | $39   |

You can throw in some horizontal rules too:

---

### Image galleries

Here's a really neat custom feature we added – galleries:

<div class="gallery" data-columns="3">
	<img src="/images/demo/demo-portrait.jpg">
	<img src="/images/demo/demo-landscape.jpg">
	<img src="/images/demo/demo-square.jpg">
	<img src="/images/demo/demo-landscape-2.jpg">
	<img src="/images/demo/2_post.png">
</div>

Inspired by the Galleries feature from WordPress, we've made it easy to create grid layouts for your images. Just use a bit of simple HTML in your post to create a masonry grid image layout:

```html
<div class="gallery" data-columns="3">
    <img src="/images/demo/demo-portrait.jpg">
    <img src="/images/demo/demo-landscape.jpg">
    <img src="/images/demo/demo-square.jpg">
    <img src="/images/demo/demo-landscape-2.jpg">
</div>
```

*See what we did there? Code and syntax highlighting is built-in too!*

Change the number inside the 'columns' setting to create different types of gallery for all kinds of purposes. You can even click on each image to seamlessly enlarge it on the page.

---

### Image carousels

Here's another gallery with only one column, which creates a carousel slide-show instead.

A nice little feature: the carousel only advances when it is in view, so your visitors won't scroll down to find it half way through your images.

<div class="gallery" data-columns="1">
	<img src="/images/demo/demo-landscape.jpg">
	<img src="/images/demo/demo-landscape-2.jpg">
</div>
