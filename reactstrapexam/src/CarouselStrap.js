import { Carousel, UncontrolledCarousel } from "reactstrap";

function CarouselStrap() {
  const items = [
    {
      src: "https://newsimg.hankookilbo.com/2017/11/06/201711060912547465_1.jpg",
      altText: "냥이잔다",
      caption: "cat_1",
      header: "cat_1",
    },
    {
      src: "https://mblogthumb-phinf.pstatic.net/MjAxODA0MjZfMjYz/MDAxNTI0NzIxMTc3Njcz.7v4X5PUOho77WEvJVZg4zLIF34qR-ZZP6ptUeE6mr6Mg.kyWGGsJw5Z2-qHUydYu7O7c2iu1D6WKMwmjvf6lfOWog.PNG.thecontest/%EA%B3%A0%EC%96%91%EC%9D%B41.png?type=w800",
      altText: "냥이묘기",
      caption: "cat_2",
      header: "cat_2",
    },
    {
      src: "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/2D9/image/h_9JUWqGXTUGB9ZLyetUmpLpUhk.jpg",
      altText: "냥이노리기",
      caption: "cat_3",
      header: "cat_3",
    },
  ];
  return (
    <>
      <UncontrolledCarousel items={items} />
    </>
  );
}

export default CarouselStrap;
