const { World, Engine, Render, Runner, Bodies } = Matter;
console.log(Matter)
console.log(Matter.Engine.create())
console.log(Matter.Render.create({}))
const engine = Engine.create();
const { world } = engine;
const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: 800,
        height: 600
    }
})
console.log(render);

Render.run(render);
Runner.run(Runner.create(), engine);

const shape = Bodies.rectangle(200, 200, 50, 50, {
    isStatic: true
});
World.add(world, shape);
