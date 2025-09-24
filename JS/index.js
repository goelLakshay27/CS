// const data = function msg(name) {
//     return name + "Welcome to JS";
// }
// const msg = data("Rahul ");
// console.log(msg);

// const data = (name) => {
//     return name + "Welcome to JS";
// }
// const result = data("Rahul ");
// console.log(result);

// (function() {
//     console.log("Hello");
// })();

// (() => {
//     console.log("Hello");
// })();

function selectlanguage(lang) {
    let data;
    if (lang == 'java') {
        function javaCompiler() {
            return "Java Compiler";
        }
        data = javaCompiler();
    } else if (lang == 'c') {
        function cCompiler() {
            return "C Compiler";
        }
        data = cCompiler();
    } else {
        data = "No Compiler Found";
    }
    return data;
}
console.log(selectlanguage('java'));