// Immediately Invoked Function Expressions (IIFE)

//###interview Question: Why do we need IIFE??
// IIFE is used to execute the function imediately, this is used because 
// whenever we fetch data from global, there is chance of pollution in it, 
//so to avoid the pollution we use IIFE

//Syntax

(function database(){   //Named IIFE
    console.log(`Database Connected`);
})();   // Always a IIFE function should end with ';'

((name)=>{          // Simple IIFE
    console.log(`DB Connected, ${name}`);
})('Thor');




