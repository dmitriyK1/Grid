#[Grid](http://grumpywizards.github.io/Grid/)
Simple grid for flexible layouts.

Uses [flexbox](http://caniuse.com/#search=flex) to produce flexible easy to use classes for rows and columns.

##How to use
###Basic grid

    .grid {
      display: flex;
    }
    .cell {
      flex: 1;
      box-sizing: border-box;
    }

####Example

    <div class="grid">
      <div class="cell">first</div>
      <div class="cell">second</div>
      <div class="cell">third</div>
    </div>

This will create a simple flexible row of cells.


###Widths

    .cell-20 {
      flex: 0 0 20%;
    }

####Example

    <div class="grid">
      <div class="cell cell-20">first</div>
      <div class="cell">second</div>
      <div class="cell">third</div>
    </div>

In this example the first cell is 20% the width of the grid, the other two share the remaining space equally.


###Offsets

    .cell-offset-20 {
      margin-left: 20%;
    }

####Example

    <div class="grid">
      <div class="cell cell-10">first</div>
      <div class="cell cell-10 cell-offset-80">second</div>
    </div>

Adding `cell-offset-20` will add a `margin-left: 20%` to the cell, pushing it right.


###Wrapping

    .grid-wrap {
      flex-wrap: wrap;
    }

####Example

Here we have 2 cells, 50% and 66.6666% wide, but the grid is only 100% wide...

    <div class="grid">
      <div class="cell cell-50">first</div>
      <div class="cell cell-66">second</div>
    </div>

this means the cells are now in control and have broken out of their confinment!

    <div class="grid grid-wrap">
      <div class="cell cell-50">first</div>
      <div class="cell cell-66">second</div>
    </div>

Adding `grid-wrap` will push the second cell down under the first cell. **Why not just make this default behaviour?** Leaving this option to the developer provides more flexibility.


###Vertical alignment

    /* All cells */
    .grid-top {
      align-items: flex-start;
    }
    .grid-center {
      align-items: center;
    }
    .grid-bottom {
      align-items: flex-end;
    }

    /* Individual cells */
    .cell-top {
      align-self: flex-start;
    }
    .cell-center {
      align-self: center;
    }
    .cell-bottom {
      align-self: flex-end;
    }

####Example

    <div class="grid grid-bottom">
      <div class="cell cell-top">first</div>
      <div class="cell cell-center">second</div>
      <div class="cell">third</div> <!-- grid-bottom pushes this to the bottom -->
      <div class="cell">fourth
        <br>fourth
        <br>fourth
        <br>fourth
        <br>fourth
        <br>
      </div>
    </div>

Notice there are two vertical aligment rules being applied to this grid. A grid wide rule of `grid-bottom` that pushes everything to the bottom, and per cell alignment rules of `cell-top` and `cell-center` that vertically align the cells to the top and center of the grid respectively.


###Responsiveness

    @media (min-width: 24em) and (max-width: 48em) {
      .grid-medium-fit > .cell {
        flex: 1;
      }
      .grid-medium-full > .cell {
        flex: 0 0 100%;
        margin-left: 0;
      }
    }

####Example

Let's make this grid thing respond to different screen sizes...

    <div class="grid grid-small-full grid-medium-fit grid-large-full">
      <div class="cell cell-top">first</div>
      <div class="cell cell-center">second</div>
      <div class="cell">third</div> <!-- grid-bottom pushes this to bottom -->
      <div class="cell">fourth
        <br>fourth
        <br>fourth
        <br>fourth
        <br>fourth
        <br>
      </div>
    </div>

- `.grid-small-full` this rule makes the cells full width but only when the screen is small
- `.grid-medium-fit` makes the cells share the space, but only for medium screens
- `.grid-large-full` turns it all into columns again


###Utility classes

There are some handy "make visible when small" and "hide when large" rules for you to play with.

    .visible-small {
      display: none;
    }
    .hidden-medium {
      display: none;
    }
    .hidden-large {
      display: none;
    }
    

#####Credits
http://philipwalton.github.io/solved-by-flexbox/demos/grids/

http://ionicframework.com/docs/components/#grid

http://getbootstrap.com/css/#grid

http://css-tricks.com/snippets/css/a-guide-to-flexbox/
