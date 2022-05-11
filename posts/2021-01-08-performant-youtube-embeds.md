---
title: Fast ways to embed YouTube videos
description: The YouTube embed is a page speed killer. Here are some alternatives.
date: 2021-01-08
tags:
  - youtube
  - embeds
  - performance
---

The YouTube embed is a page speed killer. Here are some alternatives.

## Default Embed

You just grab it off a video. Be sure to add `loading="lazy"` and customize the title attribute!

```html
<iframe
	width="560"
	height="315"
	src="https://www.youtube.com/embed/hpDRlLnLWGg"
	title="The best video game trailer ever made"
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
	allowfullscreen
	loading="lazy"
></iframe>
```

**Pros:**

- Easy!
- Somewhat customizable via [URL parameters](https://developers.google.com/youtube/player_parameters).

**Cons:**

- Extremely slow.

## The [iframe API](https://developers.google.com/youtube/iframe_api_reference)

Google's starter code:

```js
function setupYoutubeIframe() {
	var tag = document.createElement("script");
	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName("script")[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}
```

Once loaded, the API automatically calls a global function named `onYouTubeIframeAPIReady`. Some sample code:

```js
function onYouTubeIframeAPIReady() {
	var video_id = document.getElementById("sample-youtube-player").getAttribute("data-video-id");

	youtube_player = new YT.Player("sample-youtube-player", {
		height: "315",
		width: "560",
		videoId: video_id,
		playerVars: {
			enablejsapi: 1,
			iv_load_policy: 3,
			modestbranding: 1,
			playsinline: 1,
			rel: 0,
		},
	});
}
```

`playerVars` are the same as the [player parameters](https://developers.google.com/youtube/player_parameters) for the regular iframe.

**Pros:**

- You can defer this until after page load to some degree.
- Emits Javascript events on play/pause/etc.

**Cons:**

- It's still rather slow once loaded.
- Calling a specific global function on load feels pretty archaic.
- Not sure how you do a title attribute.
- [Weird browser-specific caveats](https://developers.google.com/youtube/iframe_api_reference#Mobile_considerations)

## An iframe with srcdoc

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/hpDRlLnLWGg"
  srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/hpDRlLnLWGg?autoplay=1><img src=https://img.youtube.com/vi/hpDRlLnLWGg/hqdefault.jpg alt='Tetris Effect: Announce trailer' loading='lazy'><span aria-label='Play'>▶</span></a>"
  frameborder="0"
  title="The best video game trailer ever made"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
	loading="lazy"
></iframe>

Puts an iframe on the page with embedded markup to display a thumbnail and a play button.

[Code sample](https://dev.to/haggen/lazy-load-embedded-youtube-videos-520g)

```html
<iframe
	width="560"
	height="315"
	src="https://www.youtube.com/embed/hpDRlLnLWGg"
	srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/hpDRlLnLWGg?autoplay=1><img src=https://img.youtube.com/vi/hpDRlLnLWGg/hqdefault.jpg alt='Tetris Effect: Announce trailer' loading='lazy'><span aria-label='Play'>▶</span></a>"
	frameborder="0"
	title="The best video game trailer ever made"
	allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
	allowfullscreen
	loading="lazy"
></iframe>
```

**Pros:**

- Before playback the only external request to YouTube is the thumbnail.

**Cons:**

- No support in older browsers, but it's easily progressively enhanceable.

## `<lite-youtube>` web components

**lite-youtube-embed**: [site](https://paulirish.github.io/lite-youtube-embed/), [repo](https://github.com/paulirish/lite-youtube-embed), [npm](https://www.npmjs.com/package/lite-youtube-embed) (`npm install lite-youtube-embed`)

**lite-youtube**: [repo](https://github.com/justinribeiro/lite-youtube), [npm](https://www.npmjs.com/package/@justinribeiro/lite-youtube) (`npm install @justinribeiro/lite-youtube`)

**Cons**

- Not sure about scriptability (as in, starting playback with JS).

## What about Vimeo?

- [slightlyoff/lite-vimeo](https://github.com/slightlyoff/lite-vimeo)
- [luwes/lite-vimeo-embed](https://github.com/luwes/lite-vimeo-embed)
