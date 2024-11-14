function memoize(fn) {
    var keysval = {};
    var op;
    return function(...args) {
       const keys = args;
            if(keys in keysval){
                return keysval[keys];
            } else {
                keysval[keys]= fn(...args);
                return keysval[keys];
        }
        
    }
}