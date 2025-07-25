import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Олена",
    text: "Дуже задоволена покупкою! Якість на висоті, доставка швидка.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Ігор",
    text: "ShopBoom — це сучасний сервіс та великий вибір товарів!",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Марія",
    text: "Рекомендую всім друзям! Зручний сайт і приємні ціни.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 4,
    name: "Андрій",
    text: "Оперативна підтримка та якісний товар. Дякую!",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* секція заголовка */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Відгуки наших клієнтів
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Відгуки
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            ShopBoom — це якість, сервіс та довіра!
          </p>
        </div>

        {/* Картки відгуків */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6" key={data.id}>
                <div
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-gray-800 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-400">{data.text}</p>
                      <h1 className="text-xl font-bold text-white">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-white/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
