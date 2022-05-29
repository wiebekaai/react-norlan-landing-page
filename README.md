A React clone of this [landing page](https://norlanglass.com/pages/norlan-whisky-glass) for Norlan, originally made by my friends at Ask Phill.

# 🧐 Takeaways

- Small, looping videos add a nice dynamic touch to the design!
- You can show off on the desktop version while keeping the mobile version usable. An animation based on scroll for the [crossfade features section](/components/sections/crossfade-features.jsx) translates to a simple carousel on mobile.
- You can stagger CSS transitions using delays, see [header](/components/sections/hero-header.jsx).
- [react-scroll-parallax](https://react-scroll-parallax.damnthat.tv/docs/intro) makes implementing parallaxes a breeze. I do recommend reading about the parallax effect and plain javascript implementations to get a good understanding.
- `react-scroll-parallax` works fine on the [crossfade features section](/components/sections/crossfade-features.jsx). However, it does not play perfectly on larger screens. Here are some resources that could help when implementing a more stable solution:
  - [Let’s Make One of Those Fancy Scrolling Animations Used on Apple Product Pages](https://css-tricks.com/lets-make-one-of-those-fancy-scrolling-animations-used-on-apple-product-pages/)
  - [react-scroll-trigger](https://www.npmjs.com/package/react-scroll-trigger)
  - [react-gsap](https://bitworking.github.io/react-gsap/src-components-scroll-trigger#basic-usage)
