const { World, Engine, Render, Runner, Bodies } = Matter;
console.log(Matter);
console.log(Matter.Engine.create());
console.log(Matter.Render.create({}));

const width = 600;
const height = 600;

const engine = Engine.create();
const { world } = engine;
const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width,
        height,
        wireframes: true
    }
})
console.log(render);

Render.run(render);
Runner.run(Runner.create(), engine);


// Walls
const walls = [
    Bodies.rectangle(width / 2, 0, width, 40, { isStatic: true }),
    Bodies.rectangle(width / 2, height, width, 40, { isStatic: true }),
    Bodies.rectangle(0, height / 2, 40, height, { isStatic: true}),
    Bodies.rectangle(width, height / 2, 40, height, { isStatic: true })
];
World.add(world, walls);

// maze generation
const grid = Array(3).fill(null).map(() => Array(3).fill(false))
console.log(grid)
