/*giving it a named function to run after 4 seconds
function sayHello(){
    console.log('hello')
}

setTimeout(sayHello,4000)

//can also give it an anonymous function

setTimeout(function(){
    console.log('goodbye')
},6000)
// can also give it an anonymous arrow function
setTimeout (() =>{
    console.log('how is life going on the sunshine side?')
},5000)

//setInterval triggers repeatedly after a set amount of time
//this code will run forever - we can use ctrl+c to stop it.
//to clear out timers programmatically, we need to assign the timer to a variable 

/*const interval = setInterval(()=>{
    console.log('this is a function as well')
},2000)

setTimeout(()=>{
    //and then call clear interval and give it the setInterval we set up earlier 
    clearInterval(interval)
},6000)
*/

const button = document.getElementById('hidBtn');
const message = document.getElementById('message');

button.addEventListener('click', ()=>{
    message.hidden = false;
setTimeout(()=>{
    message.hidden = true;
},5000);
});
