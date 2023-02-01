import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

const splide = new Splide(".splide", {
  perPage: 3,
  rewind: true,
});
splide.mount();
