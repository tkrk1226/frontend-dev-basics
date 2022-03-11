/**
 * 
 *  Class Rect
 * 
 */

class Rect {
    constructor(w,h){
        this.w = w;
        this.h = h;
    }

    draw (){
        console.log(`Rect=(w=${this.w}, h=${this.h})를 그렸습니다.`);
    }
}

// test01

const rect01 = new Rect(10,20);
const rect02 = new Rect(30,40);

rect01.draw();
rect02.draw();

/**
 * 
 * cf. 생성자 함수(prototype) 기반
 * 
 */

const Circle = function(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
}
Circle.prototype.draw = function(){
    console.log(`Circle=(x=${this.x}, y=${this.y}, z=${this.z})를 그렸습니다.`);
}

const c01 = new Circle(10,20,30);
const c02 = new Circle(30,40,50);

c01.draw();
c02.draw();

/**
 * 
 * extends 상속
 * 
 */

class Shape {
    constructor(bgColor, lnColor){ // backGround, lineColor
        this.bgColor = bgColor;
        this.lnColor = lnColor;
    }

    draw(){
        console.log('그릴 수 없습니다.');
    }

    area(){
        console.log('구할 수 없습니다.');    
    }

}

class Triangle extends Shape {
    
    constructor(w,h){
        super('red', 'black');
        this.w = w;
        this.h = h;
    }

    // @Override, TypeScript에서는 한다.
    draw(){
console.log(`Triangle(w=${this.w}, h=${this.h}, bgColor=${this.bgColor}, lncolor=${this.lnColor})를 그렸습니다.`)
    }
}

const t1 = new Triangle(10,20);
t1.draw();
t1.area();








