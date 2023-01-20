import {Board, GameOfLife, getLiveNeighbours, nextState} from "./game-of-life.js";



describe('given a living cell', function () {
  const isAlive = true


  it('should be alive if 2 or 3 alive neighbours', () => {

    expect(nextState(isAlive, 3)).toEqual(1)
  });

  it('should be dead if less than 2 alive neighbours', () => {

    expect(nextState(isAlive, 1)).toEqual(0)
  });

  it('should be dead if more than 3 alive neighbours', () => {

    expect(nextState(isAlive, 4)).toEqual(0)
  });
});

describe('given dead cell', () => {
  const isAlive = false
  it('should be alive if 3 alive neighbours', () => {
    expect(nextState(isAlive, 3)).toEqual(1)

  });
  it('should stay dead if 2 alive neighbours', () => {
    expect(nextState(isAlive, 2)).toEqual(0)

  });

});


describe('Given the following board', () => {
  const givenArray = [[1, 1, 1], [1, 0, 1], [1, 0, 0],]

  it.each([[1, 1, 6], [0, 0, 2], [2, 2, 1],])('should return 5 alive neighbours for the cell at x:%s, y:%s', (x, y, aliveNumber) => {
    expect(getLiveNeighbours(givenArray, x, y)).toEqual(aliveNumber)
  });
})


describe("init game of life", () => {
  it("init should return an empty board", () => {
    const initialBoard: Board = {
      cols: 3, rows: 3, board: [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
    }

    const expectedBoard = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
    const gameOfLife = new GameOfLife(initialBoard)

    const res = gameOfLife.getNextFrame();

    expect(res.board).toStrictEqual(expectedBoard)
  });

    it("nextFrame 2", () => {
        const initialBoard: Board = {
            cols: 3,
            rows: 3,
            board: [
              [1, 0, 0],
              [0, 0, 0],
              [0, 0, 0]
           ]
        }

        const expectedBoard = [
          [0, 0, 0], [0, 0, 0], [0, 0, 0]]
        const gameOfLife = new GameOfLife(initialBoard)

        const res = gameOfLife.getNextFrame();

        expect(res.board).toStrictEqual(expectedBoard)
    });

    it("nextFrame 2", () => {
        const initialBoard: Board = {
            cols: 3,
            rows: 3,
            board: [
                [1, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ]
        }

        const expectedBoard = [
            [0, 0, 0], [0, 0, 0], [0, 0, 0]]
        const gameOfLife = new GameOfLife(initialBoard)

        const res = gameOfLife.getNextFrame();

        expect(res.board).toStrictEqual(expectedBoard)
    });

    it("nextFrame 3", () => {
        const initialBoard: Board = {
            cols: 3,
            rows: 3,
            board: [
                [1, 1, 1],
                [0, 0, 0],
                [0, 0, 0]
            ]
        }

        const expectedBoard = [
            [0, 1, 0], [0, 1, 0], [0, 0, 0]]
        const gameOfLife = new GameOfLife(initialBoard)

        const res = gameOfLife.getNextFrame();

        expect(res.board).toStrictEqual(expectedBoard)
    });

    it("nextFrame 4", () => {
        const initialBoard: Board = {
            cols: 3,
            rows: 3,
            board: [
                [0, 0, 0],
                [1, 1, 1],
                [0, 0, 0]
            ]
        }

        const expectedBoard = [
            [0, 0, 0],
            [1, 1, 1],
            [0, 0, 0]]
        const gameOfLife = new GameOfLife(initialBoard)
        gameOfLife.getNextFrame();
        const res = gameOfLife.getNextFrame();

        expect(res.board).toStrictEqual(expectedBoard)
    });
})
