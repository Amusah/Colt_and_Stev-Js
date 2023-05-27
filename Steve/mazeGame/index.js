const { World, Engine, Render, Runner, Bodies, Body, Events } = Matter;
console.log(Matter);
console.log(Matter.Engine.create());
console.log(Matter.Render.create({}));

const horizontalCells = 4;
const verticalCells = 3;
const width = window.innerWidth;
const height = window.innerHeight;

const unitLengthX = width / horizontalCells;
const unitLengthY = height / verticalCells;

const engine = Engine.create();
//engine.world.gravity.y = 0;
const { world } = engine;
world.gravity.y = 0;
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
    Bodies.rectangle(width / 2, 0, width, 2, { isStatic: true }),
    Bodies.rectangle(width / 2, height, width, 2, { isStatic: true }),
    Bodies.rectangle(0, height / 2, 2, height, { isStatic: true}),
    Bodies.rectangle(width, height / 2, 2, height, { isStatic: true })
];
World.add(world, walls);

// maze generation
const shuffle = arr => {
    let counter = arr.length;
    while(counter > 0){
        const randIndex = Math.floor(Math.random() * counter);
        counter--;
        const temp = arr[counter]
        arr[counter] = arr[randIndex];
        arr[randIndex] = temp;
    }
    // for(let counter = arr.length; counter = 0; counter--){
    //     const randIndex = Math.floor(Math.random() * counter);
    //     const temp = arr[counter]
    //     arr[counter] = arr[randIndex]
    //     arr[randIndex] = temp;
    // }
    return arr;
}

const grid = Array(verticalCells).fill(null).map(() => Array(horizontalCells).fill(false));
//console.log(grid)

const verticals = Array(verticalCells).fill(null).map(() => Array(horizontalCells - 1).fill(false));

const horizontals = Array(verticalCells - 1).fill(null).map(() => Array(horizontalCells).fill(false));
//console.log(horizontals)

const startRow = Math.floor(Math.random() * verticalCells);
const startColumn = Math.floor(Math.random() * horizontalCells);
console.log(startRow, startColumn);

const stepThroughCell = (row, column) => {
    // if cell is visited at [row, column], then return
    if(grid[row][column]){
        return;
    }
    // Mark this cell as being visited
    grid[row][column] = true;
    // Assemble randomly-ordered list of neighbors
    const neighbors = shuffle([
        [row - 1, column, 'up'], // top neighbor
        [row, column + 1, 'right'], // right neighbor
        [row + 1, column, 'down'], // bottom neighbor
        [row, column - 1, 'left'] // left neighbor
    ]);//console.log(neighbors)

    // For each neighbor....
    for(let neighbor of neighbors){
        const [nextRow, nextColumn, direction] = neighbor;
    // See if that neighbor is out of bounds
        if(nextRow < 0 || nextRow >= verticalCells || nextColumn < 0 || nextColumn >= horizontalCells){
            continue;
        }
    // If neighbor is visited, continue to next neighbor
        if(grid[nextRow][nextColumn]){
            continue;
        }
    // Remove a wall from either horizontals or verticals array
        if(direction === 'left'){
            verticals[row][column - 1] = true;
        } else if(direction === 'right'){
            verticals[row][column] = true;
        } else if(direction === 'up'){
            horizontals[row - 1][column] = true;
        } else if(direction === 'down'){
            horizontals[row][column] = true;
        }

        stepThroughCell(nextRow, nextColumn);
    // Visit that next cell
    }
};
stepThroughCell(startRow, startColumn);

// horizontal walls
horizontals.forEach((row, rowIndex) => {
    row.forEach((open, columnIndex) => {
        if(open){
            return;
        }
        // drawing horizontal walls
        const wall = Bodies.rectangle(
            columnIndex * unitLengthX + unitLengthX / 2,
            rowIndex * unitLengthY + unitLengthY,
            unitLengthX,
            5,
            {
                label: 'wall',
                isStatic: true
            }
        );
        World.add(world, wall);
    });
});

// vertical walls
verticals.forEach((row, rowIndex) => {
    row.forEach((open, columnIndex) => {
        if(open){
            return;
        }
        // drawing vertical walls
        const wall = Bodies.rectangle(
            columnIndex * unitLengthX + unitLengthX,
            rowIndex * unitLengthY + unitLengthY / 2,
            5,
            unitLengthY,
            {
                label: 'wall',
                isStatic: true
            }
        );
        World.add(world, wall);
    });
});

// Goal
const goal = Bodies.rectangle(
    width - unitLengthX / 2,
    height - unitLengthY / 2,
    unitLengthX * 0.7,
    unitLengthY * 0.7,
    {
        label: 'goal',
        isStatic: true
    },
    
);
World.add(world, goal);

// Ball
const ballRadius = Math.min(unitLengthX, unitLengthY) / 4;
const ball = Bodies.circle(
    unitLengthX / 2,
    unitLengthY / 2,
    ballRadius,
    {
        label: 'ball'
    });
World.add(world, ball);

// handling keyboard events to move the ball around
document.addEventListener('keydown', event => {
    const { x, y } = ball.velocity;
    //console.log(event)
    if(event.code === 'KeyW' || event.code === 'ArrowUp'){
        //console.log('moved up');
        Body.setVelocity(ball, {x, y: y - 5});
    }
    if(event.code === 'KeyS' || event.code === 'ArrowDown'){
        //console.log('moved down');
        Body.setVelocity(ball, {x, y: y + 5});
    }
    if(event.code === 'KeyA' || event.code === 'ArrowLeft'){
        //console.log('moved left');
        Body.setVelocity(ball, { x: x - 5, y})
    }
    if(event.code === 'KeyD' || event.code === 'ArrowRight'){
        //console.log('moved right')
        Body.setVelocity(ball, { x: x + 5, y})
    }
});

// Detecting a win
Events.on(engine, 'collisionStart', (event) => {
    //console.log(event.pairs);
    event.pairs.forEach(collision => {
        const labels = ['ball', 'goal'];
        if(labels.includes(collision.bodyA.label) &&
         labels.includes(collision.bodyB.label)){
            world.gravity.y = 1;
            world.bodies.forEach(body => {
                if(body.label === 'wall'){
                    Body.setStatic(body, false);
                }
            })
         }
    })
});