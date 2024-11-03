var createCounter = function(init) {
    let present = init;
    return {
        increment:()=> ++present,
        decrement:()=> --present,
        reset:()=> present = init,
    }
};
const counter = createCounter(5)
counter.increment();
counter.reset();
counter.decrement();