////* what is clouser ?
////*  A closure is a combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. The closure is a function that allows you to access the parent function scope, even though it’s been removed from the execution context stack. 

//// Lexical scope defines how variable name are resolved in nested functions.
//// Nested child functions have access to the scope of their parent functions.

// global scope
let globalVariable = 1;

function parent() {
    // local scope or block scope
    const localVariable = 2;
    console.log("global var in parent", globalVariable);
    console.log("parent var", localVariable);

    function child() {
        const x = 5;
        console.log("child var", x);
        console.log("parent var in child", localVariable);
        console.log("global var in child", globalVariable);
        console.log(globalVariable += 5);
    }

    return child;
}

const result = parent();

result();

