// 모듈 생성
var Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

// 엔진 생성
var engine = Engine.create();

// 렌더러 생성
var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes: false,
    width: 800,
    height: 800,
  },
});


//공을 찍어내는 class 공장 생성

// class Ball {
//   constructor(x, y, radius, texture) {
//     this.body = Bodies.circle(x, y, radius, {
//       mass: 5,
//       restitution: 0.95,
//       friction: 0,
//       frictionAir: 0.01,
//       render: {
//         sprite: {
//             texture: texture
//         }
//       }
// });

// var ball1 = new Ball(200, 200, 60, "./images/ball1.svg");
// var ball2 = new Ball(200, 200, 60, "./images/ball2.svg");



//방법2 고안

// class Ball {
//   constructor(x, y, radius, texture) {
//     this.body = Bodies.circle(x, y, radius, {
//       mass: 5,
//       restitution: 0.95,
//       friction: 0,
//       frictionAir: 0.01,
//     });
//     this.body.render.sprite.texture = texture;
//   }
// }

// const ball1 = new Ball(200, 200, 60, "./images/ball1.svg");
// const ball2 = new Ball(200, 200, 60, "./images/ball2.svg");



// 공 생성
/* mass: 질량, restitution: 에너지 보존 정도
   friction: 물체 사이 마찰력,
  frictionAir: 공기 마찰력*/



var ball1 = Bodies.circle(200, 200, 45, {
  mass: 5, 
  restitution: 0.95,
  friction: 1,
  frictionAir: 0.01,
});
ball1.render.sprite.texture = "./images/ball1.svg";

var ball2 = Bodies.circle(200, 200, 45, {
  mass: 5, 
  restitution: 0.95,
  friction: 1,
  frictionAir: 0.01,
});
ball2.render.sprite.texture = "./images/ball2.svg";

var ball3 = Bodies.circle(200, 200, 45, {
  mass: 5, 
  restitution: 0.95,
  friction: 1,
  frictionAir: 0.01,
  render: {
    sprite: {
      texture: "./images/ball3.svg",
    },
  },
});

var ball4 = Bodies.circle(200, 200, 45, {
  mass: 5, 
  restitution: 0.95,
  friction: 1,
  frictionAir: 0.01,
  render: {
    sprite: {
      texture: "./images/ball4.svg",
    },
  },
});

var ball5 = Bodies.circle(200, 200, 45, {
  mass: 5, 
  restitution: 0.95,
  friction: 1,
  frictionAir: 0.01,
});
ball5.render.sprite.texture = "./images/ball5.svg";

var ball6 = Bodies.circle(200, 200, 45, {
  mass: 5, 
  restitution: 0.95,
  friction: 1,
  frictionAir: 0.01,
});
ball6.render.sprite.texture = "./images/ball6.svg";

var ball7 = Bodies.circle(200, 200, 45, {
  mass: 5, 
  restitution: 0.95,
  friction: 1,
  frictionAir: 0.01,
});
ball7.render.sprite.texture = "./images/ball7.svg";

var ball8 = Bodies.circle(200, 200, 45, {
  mass: 5, 
  restitution: 0.95,
  friction: 1,
  frictionAir: 0.01,
});
ball8.render.sprite.texture = "./images/ball8.svg";

var ball9 = Bodies.circle(200, 200, 45, {
  mass: 5, 
  restitution: 0.95,
  friction: 1,
  frictionAir: 0.01,
});
ball9.render.sprite.texture = "./images/ball9.svg";

var ball10 = Bodies.circle(200, 200, 45, {
  mass: 5, 
  restitution: 0.95,
  friction: 1,
  frictionAir: 0.01,
});
ball10.render.sprite.texture = "./images/ball10.svg";

var ball11 = Bodies.circle(200, 200, 45, {
  mass: 5, 
  restitution: 0.95,
  friction: 1,
  frictionAir: 0.01,
});
ball11.render.sprite.texture = "./images/ball11.svg";

var ball12 = Bodies.circle(200, 200, 45, {
  mass: 5, 
  restitution: 0.95,
  friction: 1,
  frictionAir: 0.01,
});
ball12.render.sprite.texture = "./images/ball12.svg";

var ball13 = Bodies.circle(200, 200, 45, {
  mass: 5, 
  restitution: 0.95,
  friction: 1,
  frictionAir: 0.01,
});
ball13.render.sprite.texture = "./images/ball13.svg";

var ball14 = Bodies.circle(200, 200, 45, {
  mass: 5,
  restitution: 0.95,
  friction: 0,
  frictionAir: 0.01,
});
ball14.render.sprite.texture = "./images/ball14.svg";

var ball15 = Bodies.circle(200, 200, 45, {
  mass: 5, 
  restitution: 0.95,
  friction: 1,
  frictionAir: 0.01,
});
ball15.render.sprite.texture = "./images/ball15.svg";

var ball16 = Bodies.circle(200, 200, 45, {
  mass: 5, 
  restitution: 0.95,
  friction: 1,
  frictionAir: 0.01,
});
ball16.render.sprite.texture = "./images/ball16.svg";

var ball17 = Bodies.circle(200, 200, 45, {
  mass: 5, 
  restitution: 0.95,
  friction: 1,
  frictionAir: 0.01,
});
ball17.render.sprite.texture = "./images/ball17.svg";


var ball18 = Bodies.circle(200, 200, 45, {
  mass: 5, 
  restitution: 0.95,
  friction: 1,
  frictionAir: 0.01,
});
ball18.render.sprite.texture = "./images/ball18.svg";


var ball19 = Bodies.circle(200, 200, 45, {
  mass: 5, 
  restitution: 0.95,
  friction: 1,
  frictionAir: 0.01,
});
ball19.render.sprite.texture = "./images/ball19.svg";


var ball20 = Bodies.circle(200, 200, 45, {
  mass: 5, 
  restitution: 0.95,
  friction: 1,
  frictionAir: 0.01,
});
ball20.render.sprite.texture = "./images/ball20.svg";


var ball21 = Bodies.circle(200, 200, 45, {
  mass: 5, 
  restitution: 0.95,
  friction: 1,
  frictionAir: 0.01,
});
ball21.render.sprite.texture = "./images/ball21.svg";


var ball22 = Bodies.circle(200, 200, 45, {
  mass: 5, 
  restitution: 0.95,
  friction: 1,
  frictionAir: 0.01,
});
ball22.render.sprite.texture = "./images/ball22.svg";


var ball23 = Bodies.circle(200, 200, 45, {
  mass: 5, 
  restitution: 0.95,
  friction: 1,
  frictionAir: 0.01,
});
ball23.render.sprite.texture = "./images/ball23.svg";


var ball24 = Bodies.circle(200, 200, 45, {
  mass: 5, 
  restitution: 0.95,
  friction: 1,
  frictionAir: 0.01,
});
ball24.render.sprite.texture = "./images/ball24.svg";


var ball25 = Bodies.circle(200, 200, 45, {
  mass: 5, 
  restitution: 0.95,
  friction: 1,
  frictionAir: 0.01,
});
ball25.render.sprite.texture = "./images/ball25.svg";


var ball26 = Bodies.circle(200, 200, 45, {
  mass: 5, 
  restitution: 0.95,
  friction: 1,
  frictionAir: 0.01,
});
ball26.render.sprite.texture = "./images/ball26.svg";


var ball27 = Bodies.circle(200, 200, 45, {
  mass: 5, 
  restitution: 0.95,
  friction: 1,
  frictionAir: 0.01,
});
ball27.render.sprite.texture = "./images/ball27.svg";


var ball28 = Bodies.circle(200, 200, 45, {
  mass: 5, 
  restitution: 0.95,
  friction: 1,
  frictionAir: 0.01,
});
ball28.render.sprite.texture = "./images/ball28.svg";

var ball29 = Bodies.circle(200, 200, 45, {
  mass: 5, 
  restitution: 0.95,
  friction: 1,
  frictionAir: 0.01,
});
ball29.render.sprite.texture = "./images/ball29.svg";

var ball30 = Bodies.circle(200, 200, 45, {
  mass: 5, 
  restitution: 0.95,
  friction: 1,
  frictionAir: 0.01,
});
ball30.render.sprite.texture = "./images/ball30.svg";

var ball31 = Bodies.circle(200, 200, 45, {
  mass: 5, 
  restitution: 0.95,
  friction: 1,
  frictionAir: 0.01,
});
ball31.render.sprite.texture = "./images/ball31.svg";

var ball32 = Bodies.circle(200, 200, 45, {
  mass: 5, 
  restitution: 0.95,
  friction: 1,
  frictionAir: 0.01,
});
ball32.render.sprite.texture = "./images/ball32.svg";

var ball33 = Bodies.circle(200, 200, 45, {
  mass: 5, 
  restitution: 0.95,
  friction: 1,
  frictionAir: 0.01,
});
ball33.render.sprite.texture = "./images/ball33.svg";

var ball34 = Bodies.circle(200, 200, 45, {
  mass: 5, 
  restitution: 0.95,
  friction: 1,
  frictionAir: 0.01,
});
ball34.render.sprite.texture = "./images/ball34.svg";


var ball35 = Bodies.circle(200, 200, 45, {
  mass: 5, 
  restitution: 0.95,
  friction: 1,
  frictionAir: 0.01,
});
ball35.render.sprite.texture = "./images/ball35.svg";


var ball36 = Bodies.circle(200, 200, 45, {
  mass: 5, 
  restitution: 0.95,
  friction: 1,
  frictionAir: 0.01,
});
ball36.render.sprite.texture = "./images/ball36.svg";

var ball37 = Bodies.circle(200, 200, 45, {
  mass: 5, 
  restitution: 0.95,
  friction: 1,
  frictionAir: 0.01,
});
ball37.render.sprite.texture = "./images/ball37.svg";

var ball38 = Bodies.circle(200, 200, 45, {
  mass: 5, 
  restitution: 0.95,
  friction: 1,
  frictionAir: 0.01,
});
ball38.render.sprite.texture = "./images/ball38.svg";

var ball39 = Bodies.circle(200, 200, 45, {
  mass: 5, 
  restitution: 0.95,
  friction: 1,
  frictionAir: 0.01,
});
ball39.render.sprite.texture = "./images/ball39.svg";

var ball40 = Bodies.circle(200, 200, 45, {
  mass: 5, 
  restitution: 0.95,
  friction: 1,
  frictionAir: 0.01,
});
ball40.render.sprite.texture = "./images/ball40.svg";

var ball41 = Bodies.circle(200, 200, 45, {
  mass: 5, 
  restitution: 0.95,
  friction: 1,
  frictionAir: 0.01,
});
ball41.render.sprite.texture = "./images/ball41.svg";

var ball42 = Bodies.circle(200, 200, 45, {
  mass: 5, 
  restitution: 0.95,
  friction: 1,
  frictionAir: 0.01,
});
ball42.render.sprite.texture = "./images/ball42.svg";

var ball43 = Bodies.circle(200, 200, 45, {
  mass: 5, 
  restitution: 0.95,
  friction: 1,
  frictionAir: 0.01,
});
ball43.render.sprite.texture = "./images/ball43.svg";

var ball44 = Bodies.circle(200, 200, 45, {
  mass: 5, 
  restitution: 0.95,
  friction: 1,
  frictionAir: 0.01,
});
ball44.render.sprite.texture = "./images/ball44.svg";

var ball45 = Bodies.circle(200, 200, 45, {
  mass: 5, 
  restitution: 0.95,
  friction: 1,
  frictionAir: 0.01,
});
ball45.render.sprite.texture = "./images/ball45.svg";

// 공 추가 연습
// var boxB = Bodies.circle(450, 500, 60, 80);
// var boxC = Bodies.circle(300, 200, 60, 80);
// var boxD = Bodies.circle(300, 100, 60, 80);
// var ball = Matter.Bodies.circle(200, 200, 60, 80,);

// 45개의 원 추가(일괄)
// var stack = Matter.Composites.stack(202, 40, 5, 10, 0, 0, function (x, y) {
//   // 반지름이 50px
//   return Matter.Bodies.circle(x, y, Matter.Common.random(50, 50), {
//     restitution: 0.6,
//     friction: 0.1,
//     render: { fillStyle: Matter.Common.choose(["#57B04A", "red", "orange"]),
// },
//   });
// });

// // SVG 이미지 파일의 배열
// var svgTextures = [
//   './images/ball1.svg',
//   './images/ball2.svg',
//   './images/ball3.svg',
//   './images/ball4.svg',
//   './images/ball5.svg',
//   './images/ball6.svg',
//   './images/ball7.svg',
//   './images/ball8.svg',
//   './images/ball9.svg',
//   './images/ball10.svg',
//   './images/ball11.svg',
//   './images/ball12.svg',
//   './images/ball13.svg',
//   './images/ball14.svg',
//   './images/ball15.svg',
//   './images/ball16.svg',
//   './images/ball17.svg',
//   './images/ball18.svg',
//   './images/ball19.svg',
//   './images/ball20.svg',
//   './images/ball21.svg',
//   './images/ball22.svg',
//   './images/ball23.svg',
//   './images/ball24.svg',
//   './images/ball25.svg',
//   './images/ball26.svg',
//   './images/ball27.svg',
//   './images/ball28.svg',
//   './images/ball29.svg',
//   './images/ball30.svg',
//   './images/ball31.svg',
//   './images/ball32.svg',
//   './images/ball33.svg',
//   './images/ball34.svg',
//   './images/ball35.svg',
//   './images/ball36.svg',
//   './images/ball37.svg',
//   './images/ball38.svg',
//   './images/ball39.svg',
//   './images/ball40.svg',
//   './images/ball41.svg',
//   './images/ball42.svg',
//   './images/ball43.svg',
//   './images/ball44.svg',
//   './images/ball45.svg',
// ];

// const addBall = () => {
//   const HEADS = []
//   const amount = 45
//   for (let i = 0; i < amount; i++) {
//     const radius = random(50, 50)
//     const textureIndex = Math.floor(Math.random() * svgTextures.length); // 무작위 텍스처 선택
//     const balls = Bodies.circle(
//       200,
//       200,
//       radius,
//       radius,
//       {
//        mass: 5,
//        restitution: 0.95,
//        friction: 0,
//        frictionAir: 0.01,
// 	      render: {
//           sprite: {
//             texture:
//             svgTextures[textureIndex],
//             xScale: 1,
//             yScale: 1,
//           },
//         },
//       }
//     )

 var svgBall = [
   ball1,
   ball2,
   ball3,
   ball4,
   ball5,
   ball6,
   ball7,
   ball8,
   ball9,
   ball10,
   ball11,
   ball12,
   ball13,
   ball14,
   ball15,
   ball16,
   ball17,
   ball18,
   ball19,
   ball20,
   ball21,
   ball22,
   ball23,
   ball24,
   ball25,
   ball26,
   ball27,
   ball28,
   ball29,
   ball30,
   ball31,
   ball32,
   ball33,
   ball34,
   ball35,
   ball36,
   ball37,
   ball38,
   ball39,
   ball40,
   ball41,
   ball42,
   ball43,
   ball44,
   ball45 ]




// 벽과 바닥 만들기
var ground = Bodies.rectangle(400, 770, 800, 60, { isStatic: true });
var rightWall = Bodies.rectangle(800, 350, 60, 810, { isStatic: true });
var rightWall2 = Bodies.rectangle(800, 710, 170, 70, { isStatic: true });
var leftWall = Bodies.rectangle(10, 350, 60, 810, { isStatic: true });
var leftWall2 = Bodies.rectangle(50, 750, 80, 150, { isStatic: true });
var topWall = Bodies.rectangle(0, 0, 1550, 60, { isStatic: true });

// 마우스로 물체 움직이기
var mouseConstraint = Matter.MouseConstraint.create(engine, {
  element: render.canvas,
  constraint: {
    stiffness: 0.2,
    render: {
      visible: false
    }
  }
});



Matter.World.add(engine.world, mouseConstraint);




// 월드에 모든 충돌체 추가
World.add(engine.world, [
  ground,
  rightWall,
  rightWall2,
  leftWall,
  leftWall2,
  topWall,
  ball1,
  ball2,
  ball3,
  ball4,
  ball5,
  ball6,
  ball7,
  ball8,
  ball9,
  ball10,
  ball11,
  ball12,
  ball13,
  ball14,
  ball15,
  ball16,
  ball17,
  ball18,
  ball19,
  ball20,
  ball21,
  ball22,
  ball23,
  ball24,
  ball25,
  ball26,
  ball27,
  ball28,
  ball29,
  ball30,
  ball31,
  ball32,
  ball33,
  ball34,
  ball35,
  ball36,
  ball37,
  ball38,
  ball39,
  ball40,
  ball41,
  ball42,
  ball43,
  ball44,
  ball45
]);

// 엔진 실행
Engine.run(engine);

// 렌더러 실행
Render.run(render);
