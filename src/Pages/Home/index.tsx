import React, {useEffect} from "react";
import * as PIXI from "pixi.js";
// import img from "../../Assets/e14a11a6084040.jpg";
export default function Index() {
  useEffect(() => {
    const app = new PIXI.Application({
      view: document.getElementById("pixi") as HTMLCanvasElement,
      width: 500,
      height: 500,
      backgroundColor: 0x00cc99,
      antialias: true,
      transparent: false,
      resolution: 1,
    });
    // const root = document.getElementById("pixi-root");
    // root?.appendChild(app.view);
    // https://zcool-cloud-resource-test.oss-cn-beijing.aliyuncs.com/6f7d/91c5f9/976c78c4c31700.png
    const container = new PIXI.Container();
    app.stage.addChild(container);
    // const canvas = document.createElement("canvas");
    // const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = "http://localhost:3000/fakeimg.png";
    img.height = 100;
    img.width = 100;
    const texture = PIXI.Texture.from(img);
    const sprite = new PIXI.Sprite(texture);
    sprite.interactive = true;
    sprite.x = 100;
    sprite.y = 100;
    sprite.anchor.set(0.5);
    let diff = {x: 0, y: 0};
    const listener = function (e: any) {
      sprite.x = e.data.global.x - diff.x;
      sprite.y = e.data.global.y - diff.y;
    };
    sprite.on("pointerdown", (e) => {
      diff = {x: e.data.global.x - sprite.x, y: e.data.global.y - sprite.y};
      sprite.on("pointermove", listener);
    });
    sprite.on("pointerup", () => {
      sprite.off("pointermove", listener);
    });

    container.addChild(sprite);
    // ctx?.drawImage(img, 10, 10, img.width, img.height);
    // const baseTexture = PIXI.BaseTexture.from(canvas);
  }, []);
  return <canvas id="pixi"></canvas>;
}
