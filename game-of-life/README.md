# Kata Conway's game of life

## Rules
[wikipedia](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Rules)

## TO DO
The graphic part of this kata is already done.  
You must apply the rules specified in the link above.

- Any live cell with two or three live neighbours survives.
- Any dead cell with three live neighbours becomes a live cell.
- All other live cells die in the next generation. Similarly, all other dead cells stay dead.

```
* live cell
. dead cell

1.  *..     ...
    ...     ...
    ...     ...
    
2.  ***     .*.     ...
    ...     .*.     ...
    ...     ...     ...
    
3.  ...
    ...
    ...

```