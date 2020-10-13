// Initialise and Define Variables
let movieURL = 'https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/movie-data.json';
let movieData;
let canvas = d3.select('#canvas');
let tooltip = d3.select('#tooltip');

// Draw Tree Map
let drawTreeMap = () => {

    // Set Up Hierarchy
    let hierarchy = d3.hierarchy(movieData, (node) => {
        return node['children'];
    }).sum((node) => {
        return node['value'];
    }).sort((node1, node2) => {
        return node2['value'] - node1['value'];
    });

    // Create Tree Map
    let createTreeMap = d3.treemap().size([1000, 600]);
    createTreeMap(hierarchy);
    
    // Set Up Movie Tiles
    let movieTiles = hierarchy.leaves();
    console.log(movieTiles);

    // Set Up Block
    let block = canvas.selectAll('g')
        .data(movieTiles)
        .enter()
        .append('g')
        .attr('transform', (movie) => {
            return 'translate(' + movie['x0'] + ', ' + movie['y0'] + ')';
        });


};