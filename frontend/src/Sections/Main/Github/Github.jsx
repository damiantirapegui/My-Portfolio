import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";
import "./Github.css";

export function Github() {
  const images = [
    "/assets/figma-mockup.png",
    "/assets/figma-mockup_body.png",
    "/assets/figma-mockup_footer.png",
    "/assets/pig_game.png",
    "/assets/Solaris.png",
    "/assets/todo.png",
  ];

  const settings = {
    infinite: true,
    slidesToShow: 3, // Visar tre bilder
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500, // Byter bild var tredje sekund
    centerMode: true, // Gör den mittersta rutan större
    speed: 1500,
    centerPadding: "100px", // Skapar lite extra padding runt den mittersta bilden
  };

  return (
    <>
      <div className="github-container" id="github">
        <div className="github-carousel">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="image-container">
                <img
                  src={image}
                  alt={`project-${index}`}
                  className="carousel-image"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="button-container">
          <a href="https://github.com/damiantirapegui">
            <button type="button" className="github-button">
              Go To My Github
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
