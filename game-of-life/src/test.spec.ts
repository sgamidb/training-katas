it('should be true', () => {

  const test = (input:number): number=>{
    return input;
  }

  expect(test(2)).toEqual(2);
})
