function piramid(n) {
    if (n <= 1) {
        return 1;
    }
    return piramid(n - 1) + n
}

//console.log(piramid()) 
console.log(piramid(0))
console.log(piramid(1))
console.log(piramid(2))
console.log(piramid(3))
console.log(piramid(4))
console.log(piramid(5))
console.log(piramid(6))
console.log(piramid(100))
console.log(piramid(888))
