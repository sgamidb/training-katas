export class GameOfLife{
  private readonly board: Array<number>;
  constructor(private readonly columns:number, private readonly rows: number) {
    this.board = [...Array(columns*rows)].map(()=>0 as const);
  }

  public getNextFrame(): Array<number>{
    return this.board;
  }
}
