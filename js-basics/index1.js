// Object Oriented Programming 
// Core concepts of OOPs is Encapsulation, Abstraction, Inheritance, Polymorphism 

// object literal //
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     /* methods */
//     draw: function(){            
//         console.log('draw');
//     }
// };
// circle.draw();

// factory function

function createCircle(radius){
    return {
        radius,
        draw: function(){
            console.log("draw");
        }
    };
}
const circle = createCircle(1);
circle.draw()


// constructor function 

function Circle(radius){
    this.radius =radius;
    this.draw = function(){
       console.log('draw');
    }
}

const another = new Circle(1);