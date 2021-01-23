'use strict';

function myFunction(){
var user = prompt('What is your name ?');
alert('Welcome'+user);
var Name = prompt('your name is bisher nobani? Y/N');
if(Name.toLowerCase() ==='y' || Name.toLowerCase() ==='yes')
{
    alert('correct');
}
else{
    alert('wrong');
}
var Age = prompt('Are you 27 ? Y/N');
if(Age.toLowerCase() ==='y'|| Age.toLowerCase()==='yes')
{
    
    alert('wrong');
}
else{
    alert('correct');
    
    
}
var major = prompt ('Are you software eng ? Y/N');
if(major.toLowerCase()==='y'|| major.toLowerCase()==='yes')
{

    alert('wrong');
    
}
else{
    alert('correct');
}
var nationalty = prompt('Are you jordanian ? Y/N');
if(nationalty.toLowerCase()==='y'|| nationalty.toLowerCase()==='yes')
{
    alert('correct');
}
else{
    alert('wrong');
}
var car = prompt('My fav car ferrari? Y/N');
if(car.toLowerCase()==='y'|| car.toLowerCase()==='yes')
{
    alert('correct');
}
else{
    alert('wrong');
}

var exp = prompt('How many years of experiance in android programming'); 
var answer_6 = 0;
while(!exp===2 || answer<4)
{   
    if(parseInt(exp) > 2) {
        alert('Too high');
        exp = prompt('How many years of experiance in android programming');
        answer++;
    } 
    else if(parseInt(exp)<2){
        alert('Too low');
        exp = prompt('How many years of experiance in android programming');
        answer++;
    }    
}

var attempt = 0;
var exper = false;
var exp = 2;

while (attempt < 4) {
    var number = parseInt(prompt('How many years of experiance in android programming'));

    if (number > exp) {
        alert('too high');

    }
    else if (number < exp) {
        alert('too low');

    }
    else if (number == exp) {
        alert('correct');
        exper = true;
        break;
    }
    attempt++;
}

if (!exper) {
}

var fav_country = ['italy','germany','spain'];

for (var x=0; x<6;x++)
{
    var answer_7 = prompt('what is my fav country? ');  

    if(answer_7 == fav_country[0] || answer_7 == fav_country[1] || answer_7 == fav_country[2])
    {
        alert('correct');

        number_of_answers++;

        break;
        }
        else   {
            alert('wrong'); 
        }
}

alert('here is the right answers ' + fav_country);


}

myFunction();