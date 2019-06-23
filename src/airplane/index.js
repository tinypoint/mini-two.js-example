import React, { Component } from "react";
import ReactDOM from "react-dom";
import MiniTwo from "mini-two.js/dist/mini-two.js";
import airplanePng from "./assets/images/airplane.png";
import cloudsPng from "./assets/images/clouds.png";
import "./index.scss";

class App extends Component {
  componentDidMount() {
    var miniTwo = new MiniTwo({
      width: window.innerWidth,
      height: window.innerHeight
    });
    this.container.appendChild(miniTwo.elem, () => {
      miniTwo.render();
    });

    var sky = MiniTwo.createRect(window.innerWidth, window.innerHeight);
    var clouds0 = new MiniTwo.Image(cloudsPng).setScale(0.15).setXY(-220, 150);
    var clouds1 = new MiniTwo.Image(cloudsPng).setScale(0.3).setXY(-80, 50);
    var airplane = new MiniTwo.Image(airplanePng);
    var clouds2 = new MiniTwo.Image(cloudsPng).setScale(0.1).setXY(200, 80);
    var clouds3 = new MiniTwo.Image(cloudsPng).setScale(0.5).setXY(50, -105);

    sky.borderColor = "rgba(0,0,0,0)";
    sky.color = "lightblue";
    miniTwo.add(sky);
    miniTwo.add(clouds0);
    miniTwo.add(clouds1);
    miniTwo.add(airplane);
    miniTwo.add(clouds2);
    miniTwo.add(clouds3);
    // miniTwo.add(new MiniTwo.helper.Coordinate(miniTwo));
    miniTwo.play();
    miniTwo.onUpdate(times => {
      airplane.x = 30 * Math.sin(times / 900);
      airplane.y = 20 * Math.sin(times / 400) + 10;
      clouds0.x += 1.5;
      clouds0.x > miniTwo.width / 2 + (clouds0.width / 2) * clouds0.scale &&
        (clouds0.x = -miniTwo.width / 2 - (clouds0.width / 2) * clouds0.scale);
      clouds1.x += 1.2;
      clouds1.x > miniTwo.width / 2 + (clouds1.width / 2) * clouds1.scale &&
        (clouds1.x = -miniTwo.width / 2 - (clouds1.width / 2) * clouds1.scale);
      clouds2.x += 0.8;
      clouds2.x > miniTwo.width / 2 + (clouds2.width / 2) * clouds2.scale &&
        (clouds2.x = -miniTwo.width / 2 - (clouds2.width / 2) * clouds2.scale);
      clouds3.x += 2;
      clouds3.x > miniTwo.width / 2 + (clouds3.width / 2) * clouds3.scale &&
        (clouds3.x = -miniTwo.width / 2 - (clouds3.width / 2) * clouds3.scale);
      miniTwo.render();
    });

    window.addEventListener("resize", () => {
      miniTwo.resize(window.innerWidth, window.innerHeight);
      sky.width = miniTwo.width;
      sky.height = miniTwo.height;
      miniTwo.render();
    });
  }
  render() {
    return (
      <div
        ref={container => {
          this.container = container;
        }}
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
