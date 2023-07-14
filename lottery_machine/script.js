// 모듈 생성
let Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

// 엔진 생성
let engine = Engine.create();

// 렌더러 생성
let render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes: false,
    width: 800,
    height: 800,
  },
});


//볼 45개 생성
const svgBalls = Array.from({
  length: 45
}, (_, index) => {
  const ball = Bodies.circle(200, 200, 45, {
    mass: 5,
    restitution: 0.95,
    friction: 1,
    frictionAir: 0.01,
  });
  ball.render.sprite.texture = `./images/ball${index + 1}.svg`;
  return ball;
});


// 벽과 바닥 만들기
let ground = Bodies.rectangle(400, 770, 800, 60, {
  isStatic: true
});
let rightWall = Bodies.rectangle(800, 350, 60, 810, {
  isStatic: true
});
let rightWall2 = Bodies.rectangle(800, 710, 170, 70, {
  isStatic: true
});
let leftWall = Bodies.rectangle(10, 350, 60, 810, {
  isStatic: true
});
let leftWall2 = Bodies.rectangle(50, 750, 80, 150, {
  isStatic: true
});
let topWall = Bodies.rectangle(0, 0, 1550, 60, {
  isStatic: true
});

// 마우스로 물체 움직이기
let mouseConstraint = Matter.MouseConstraint.create(engine, {
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
  ...svgBalls,
]);

// 엔진 실행
Engine.run(engine);

// 렌더러 실행
Render.run(render);