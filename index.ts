const fn = new Function(
  `
    const test: string = 'hi';
    return test;
  `
);

console.log(fn());
