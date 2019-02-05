import React, { PureComponent } from "react";
import { Carousel } from "react-bootstrap";
export class Slider extends PureComponent {
  state = {
    slideData: [
      {
        slideImage: "https://via.placeholder.com/550",
        header: "Reprehenderit laboris non quis laboris",
        body:
          "  Commodo mollit est enim est aliqua qui consectetur pariatur qualiqua"
      },
      {
        slideImage: "https://via.placeholder.com/550",
        header: "Reprehenderit laboris non quis laboris",
        body:
          "  Commodo mollit est enim est aliqua qui consectetur pariatur qualiqua"
      },
      {
        slideImage: "https://via.placeholder.com/550",
        header: "Reprehenderit laboris non quis laboris",
        body:
          "  Commodo mollit est enim est aliqua qui consectetur pariatur qualiqua"
      }
    ]
  };
  returnSlides = () => {
    return this.state.slideData.map((ele, ind) => {
      return (
        <Carousel.Item>
          <img className="img-fluid w-100" src={ele.slideImage} alt="Slide 1" />
          <Carousel.Caption>
            <h1 className="text-black-50">{ele.header}</h1>
            <p className="text-black-50">{ele.body}</p>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });
  };
  // if it is a static carousel we just call render
  //otherwise we request data in componentWillMount method
  // We can use an array like ds and map to return slides //#endregion
  render() {
    return <Carousel>{this.returnSlides()}</Carousel>;
  }
}
