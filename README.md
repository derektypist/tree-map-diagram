# Tree Map Diagram

The aim of the project is to visualize data with a treemap diagram using JSON Data.

The functionality is similar to https://codepen.io/freeCodeCamp/full/KaNGNR.

## UX

User stories taken from https://www.freecodecamp.org/learn/data-visualization/data-visualization-projects/visualize-data-with-a-treemap-diagram

As a user, my tree map should have a title with corresponding `id="title"`.

As a user, my tree map should have a description with a corresponding `id="description"`.

As a user, my tree map should have `rect` elements with a corresponding
`class="tile"` that represents the data.

There should be at least 2 fill colors used for the tiles.

Each tile should have the properties `data-name`, `data-category` and `data-value`
containing their corresponding name, category and value.

The area of each tile should correspond to the data-value amount: tiles with a
larger data-value should have a bigger area.

My tree map should have a legend with corresponding `id="legend"`.

My legend should have `rect` elements with a corresponding `class="legend-item"`.

The `rect` elements used in the legend should have at least 2 different fill colors.

As a user, I can mouse over an area and see a tooltip with a corresponding `id="tooltip"`
which displays more information about the area.

My tooltip should have a `data-value` property that corresponds to the `data-value`
of the active area.

This project uses Movie Sales.  The JSON Data is at 
`https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/movie-data.json`.

The children fields are name, category and value.

Category consists of Action, Drama, Adventure, Family, Animation, Comedy and Biography.

Colors for legend - category

* If category is Action, set the color to `orange`.
* If category is Drama, set the color to `yellow`.
* If category is Adventure, set the color to `lightblue`.
* If category is Family, set the color to `lightgreen`.
* If category is Animation, set the color to `lawngreen`.
* If category is Comedy, set the color to `darkseagreen`.
* If category is Biography, set the color to `pink`.

[Tree Map Wireframe](wireframes/wireframe-treemap-1.png) and [Legend Wireframe](wireframes/wireframe-treemap-legend.png)
are for illustration purposes.

## Features

This tree map includes a legend.  If there was more time, would include more
category types.

## Technologies

This project uses HTML5, CSS3, JavaScript, D3 and JSON.  Other technologies include
Google Fonts.

## Testing

Add `<script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>`
above `</html>`.  Preview `index.html` and select Run Tests.  If some or all the
test have failed, go back and edit the code until all tests have passed.

When hovering over an area, the fill color changes to lavender.  When leaving the area,
the fill color goes back to what it was.  For example, the animation area changes to lawngreen.

Once all tests have passed, the testing link may be deleted.

## Deployment

This project is deployed on [GitHub Pages](https://derektypist.github.io/tree-map-diagram) at the main branch.

## Credits

### Content

Did a Google Search on `freecodecamp treemap`.
HTML, CSS and JavaScript taken from [Notion](https://www.notion.so/Visualize-Data-with-a-Treemap-Diagram-1192d4ebd1164277b769f74eaf7a5d26),
which was accessed on 13 and 15 October 2020.

### Media

JSON Data taken from `https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/movie-data.json`.

### Acknowledgements

freecodecamp.org for the JSON Data (Movie Sales)

[YouTube Video](https://www.youtube.com/watch?v=wvfBn7GCCHk) and [Notion](https://www.notion.so/Visualize-Data-with-a-Treemap-Diagram-1192d4ebd1164277b769f74eaf7a5d26)
from [Ganesh H](https://www.youtube.com/channel/UCsbvkXO5gWeh4KI6GoIMThQ), which was accessed on 13 and 15 October 2020.



