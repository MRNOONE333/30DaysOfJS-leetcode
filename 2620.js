function createCounter(start) {
    let count = start;
    return function() {
      return count++;
    }
  }
  
  const counter = createCounter(10);
  console.log(counter());
  console.log(counter());
  console.log(counter());
  