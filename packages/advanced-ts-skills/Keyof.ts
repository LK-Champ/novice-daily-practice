{
  interface Person {
    x: number;
    y: string;
    z: boolean;
  }
  
  type keys = keyof Person

  type Obj =  {
    [p in keys]: Person[p];
  }

  const obj: Obj = {
    x: 1,
    y: '1',
    z: true
  }
}