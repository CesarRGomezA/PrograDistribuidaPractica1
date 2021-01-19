function a() {
    b();
}

function b() {
    c();
}

function c() {
    console.log("Fincion C");
}

function x() {
    y();
}

function y() {
    z();
}

function z() {
    console.log("Fincion Z");
}

setTimeout(x, 0);
a();