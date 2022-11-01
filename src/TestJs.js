

function 기계() {
    this.q = 'strike';
    this.w = 'snowball';
}

기계.prototype.name = 'kim'

var nunu = new 기계();

console.log(nunu);
console.log(기계);
console.log(기계.prototype);
console.log(nunu.name);


var Array = [4,2,1]; //사람
var Array = new Array(4,2,1); //컴퓨터
Array.sort();

Array.prototype.함수 = function(){};
var Array = [4,2,1];

Array.함수();
