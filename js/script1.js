//Hi again dear teacher :)
//Please comment this page after checking

let a = 146;
let b = 73;
let c = 98;

if (a <= b) {
    if (b <= c) {
        console.log(a, b, c);
    } else if (a <= c) {
        console.log(a, c, b);
    } else {
        console.log(c, a, b);
    }
} else if (c <= b) {
    console.log(c, b, a);
} else if (a <= c) {
    console.log(b, a, c);
} else {
    console.log(b, c, a);
}