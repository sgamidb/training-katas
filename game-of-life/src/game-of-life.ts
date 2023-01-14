export class GameOfLife{
  private readonly board: Array<Array<number>>;
  constructor(private readonly columns:number, private readonly rows: number) {
    this.board = [...Array(columns).map(() => Array(rows).map(()=>0))];
  }

  public getNextFrame(): Array<Array<number>>{
    return this.board;
  }
}

