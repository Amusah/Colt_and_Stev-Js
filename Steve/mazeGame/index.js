const { World, Engine, Render, Runner, Bodies } = Matter;
console.log(Matter);
console.log(Matter.Engine.create());
console.log(Matter.Render.create({}));

const cells = 3;
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
const shuffle = arr => {
    // let counter = arr.length;
    // while(counter > 0){
    //     const randIndex = Math.floor(Math.random() * counter);
    //     counter--;
    //     const temp = arr[counter]
    //     arr[counter] = arr[randIndex];
    //     arr[randIndex] = temp;
    // }
    for(let counter = arr.length; counter = 0; counter--){
        const randIndex = Math.floor(Math.random() * counter);
        const temp = arr[counter]
        arr[counter] = arr[randIndex]
        arr[randIndex] = temp;
    }
    return arr;
}

const grid = Array(cells).fill(null).map(() => Array(cells).fill(false));
//console.log(grid)

const verticals = Array(cells).fill(null).map(() => Array(cells - 1).fill(false));

const horizontals = Array(cells - 1).fill(null).map(() => Array(cells).fill(false))
//console.log(horizontals)

const startRow = Math.floor(Math.random() * cells);
const startColumn = Math.floor(Math.random() * cells);
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
        if(nextRow < 0 || nextRow >= cells || nextColumn < 0 || nextColumn >= cells){
            continue;
        }
    // If neighbor is visited, continue to next neighbor
        if(grid[nextRow][nextColumn]){
            continue;
        }
    // Remove a wall from either horizontals or verticals array

    // Visit that next cell
    }
};

stepThroughCell(startRow, startColumn);
//console.log(grid)