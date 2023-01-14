import {GameOfLife} from "./game-of-life.js";

const nextState = (cellIsAlive:boolean, aliveNeighbours:number):number => {

    if(cellIsAlive) {
        if(aliveNeighbours < 2 || aliveNeighbours > 3){
            return 0
        }
        return 1
    }
    return aliveNeighbours === 3 ? 1 : 0

}


const getLiveNeighbours = (board: Array<Array<number>>, x:number,y:number):number => {
    const isInBoard = ([i, j]: number[]): boolean => i >= 0 && j >= 0 && i < board.length && j < board[i].length;
    const potentialNeighboursPositions = [
        [-1, -1], [-1, 0], [-1, 1], [0, -1], [1, 0], [1, 1], [0, 1], [1, -1]
    ];

    return potentialNeighboursPositions.map(([ i,j]) => [i + x, j + y])
      .filter(isInBoard)
      .reduce((aliveCells, [ i, j ]) => aliveCells += board[i][j], 0);
}

describe('given a living cell', function () {
    const isAlive = true


    it('should be alive if 2 or 3 alive neighbours',  ()=> {

        expect(nextState(isAlive,3)).toEqual(1)
    });

    it('should be dead if less than 2 alive neighbours',  ()=> {

        expect(nextState(isAlive,1)).toEqual(0)
    });

    it('should be dead if more than 3 alive neighbours',  ()=> {

        expect(nextState(isAlive,4)).toEqual(0)
    });
});

describe('given dead cell',  ()=> {
    const isAlive = false
    it('should be alive if 3 alive neighbours',  ()=> {
        expect(nextState(isAlive,3)).toEqual(1)

    });
    it('should stay dead if 2 alive neighbours',  ()=> {
        expect(nextState(isAlive,2)).toEqual(0)

    });

});


describe('Given the following board',()=> {
    const givenArray = [
        [1,1,1],
        [1,0,1],
        [1,0,0],
    ]

    it.each([
      [1,1,6],
      [0,0,2],
      [2,2,1],
    ])('should return 5 alive neighbours for the cell at x:%s, y:%s', (x, y , aliveNumber)=> {
        expect(getLiveNeighbours(givenArray, x,y)).toEqual(aliveNumber)
    });
})



describe("init game of life", () => {
    it("tmp", () => {
        const initialBoard = [
            [ 0, 0 , 0],
            [ 0, 0 , 0],
            [ 0, 0 , 0]
        ]

        const expectedBoard = [
            [ 0, 0 , 0],
            [ 0, 0 , 0],
            [ 0, 0 , 0]
        ]
        const gameOfLife = new GameOfLife(3, 3)

        const res = gameOfLife.getNextFrame();

        expect(res).toStrictEqual(expectedBoard)
    })
})
