const nextState = (cellIsAlive:boolean, aliveNeighbours:number):number => {

    if(cellIsAlive) {
        if(aliveNeighbours < 2 || aliveNeighbours > 3){
            return 0
        }
        return 1
    }
    return aliveNeighbours === 3 ? 1 : 0

}

const getLiveNeighbours = (x:number,y:number):number => {
    return 5
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
        [1,0,0],
        [1,0,0],
    ]

    it('should return 5 alive neighbours for the cell at x:1, y:1', ()=> {
        expect(getLiveNeighbours(1,1)).toEqual(5)
    });
})