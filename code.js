// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    if (typeof input !== 'string' && typeof input !== 'boolean'){
        return false;
    }
    else if (input === true){
        return "Hello, World!"
    } else if (input === false){
        return "Hello, World!"
    }
    return "Hello, " + input + "!";
}

