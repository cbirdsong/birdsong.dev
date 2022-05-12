---
title: Sloppy `@supports` for flexbox gap
description: A rough way to do feature detection for flexbox `gap` using only CSS.
tags:
  - css
  - flexbox
  - progressive enhancement
---

## The Problem

[Flexbox gap](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-gap-row-gap-column-gap) is super handy, but it's a relatively recent addition to browsers, and there's not a great way to do feature detection using `@supports`. `@supports (gap: 1rem)` will be a false positive if the browser supports gap with grid layouts, and adding `@supports (flex-gap: 1rem)` [wasn't in the cards](https://github.com/w3c/csswg-drafts/issues/3559#issuecomment-557711824).

[You can run a bit of Javascript and add a class](https://ishadeed.com/article/flexbox-gap/) like in the old Modernizr days, but that feels so kludgy after getting used to the elegance of `@supports`.

## The Trick

`@supports selector()` entered browsers at roughly the same point as flexbox gap, which means it can be used as a rough proxy for support for flex gap. Define your gap value^[You could use a CSS custom property, but using a Sass variable or regular number will cover more old browsers.] and add it to both a flex container with `gap` _and_ half of it to the container's children as margin, which you remove inside an `@supports selector()`^[I went with `:first-child`, but the selector doesn't really matter as long as it's well-supported.]:

```scss
$gap: 1rem;

.flex {
	display: flex;
	flex-wrap: wrap;

	gap: $gap;

	> * {
		margin: $gap * 0.5;
		@supports selector(:first-child) {
			margin: 0;
		}
	}
}
```

## The Catch

Browsers that [support flex gap](https://caniuse.com/flexbox-gap) and [do not support `@supports selector()`](https://caniuse.com/mdn-css_at-rules_supports_selector) will apply both the gap _and_ the fallback margin, doubling up the amount of spacing. This will happen in at least 0.23% of browsers and at most 2.41%^[Feature support information and browser usage statistics taken from [caniuse's usage table](https://caniuse.com/usage-table) on May 11, 2022.].

<details>
<summary>More browser support information</summary>

According to caniuse, it will definitely be a false negative in:

- Chrome 83 (0.13%)
- Edge 83 (0.00%, we'll call it 0.005%)
- Opera 69-72 (~0.01%)
- Samsung Internet 13 (0.09%)

Amount of definite false negatives: **0.235%**

It _might_ be a false negative in this much larger percentage of browsers, as their support for `@supports selector()` is marked as unknown:

- Opera Mini (1.08%)
- UC Browser (0.85%)
- QQ Browser (0.17%)
- Baidu Browser (0.00%, we'll call it 0.005%)
- KaiOS Browser (0.07%)

Amount of possible false negatives: **2.175%**

Largest possible amount of false negatives: **2.41%**

</details>

## The Solution

A bit of space between elements is not the worst thing in the world, but if it's really undesirable for your design it might make sense to also wrap your gap declaration inside `@supports selector()`:

```scss
$gap: 1rem;

.flex {
	display: flex;
	flex-wrap: wrap;

	> * {
		margin: $gap * 0.5;
	}

	@supports selector(:first-child) {
		gap: $gap;

		> * {
			margin: 0;
		}
	}
}
```

<details>
<summary>Sass mixin</summary>

```scss
@mixin flex-gap($gap: 1.25em) {
	$gap-half: calc(#{$gap} * 0.5);

	@if type-of($gap) == "number" {
		$gap-half: $gap * 0.5;
	} @else if type-of($gap) == "list" {
		$gap-half: ();
		@each $value in $gap {
			$value-half: calc(#{$value} * 0.5);
			@if type-of($value) == "number" {
				$value-half: $value * 0.5;
			}
			$gap-half: append($gap-half, $value-half);
		}
	}

	> * {
		margin: $gap-half;
	}

	@supports selector(:first-child) {
		gap: $gap;

		> * {
			margin: 0;
		}
	}
}

.flex-gap-test-cases {
	@include flex-gap(1em);
	@include flex-gap(var(--gap));
	@include flex-gap(1em 0.5em);
	@include flex-gap(var(--gap-sm) 1.5em);
}
```

</details>
