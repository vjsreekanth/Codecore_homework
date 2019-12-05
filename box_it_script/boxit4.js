let args = process.argv.slice(2);
let namesArr = [];
let lenArr = [];
for (let i = 0;i < args.length;i++){ 
    namesArr.push(args[i]);
    lenArr.push(args[i].length);
}
// To find maximum length of array:maxLength
let maxLength = 0;
if (args.length === 0){
    maxLength = 1;
}else{
    maxLength = Math.max.apply(null,lenArr);
}
//function to draw top border
function drawTopBorder(){
    const leftTopCorner = '┏';
    const rightTopCorner ='┓';
    const horizontalBar = '━';
    const topborder = leftTopCorner + horizontalBar.repeat(maxLength) + rightTopCorner;
    return topborder;
}
   

// function to draw middle border
function drawMiddleBorder(){
    const verticalBarLeft = '┣';
    const verticalBarright = '┫';
    const horizontalBar = '━';
    const middleBorder = verticalBarLeft + horizontalBar.repeat(maxLength) + verticalBarright;
    return middleBorder;
}

//function to draw bottom border
function drawBottomBorder(){
    let botLeftCorner = '┗';
    let botRightCorner = '┛';
    let horizontalBar = '━';
    const bottomBorder = botLeftCorner + horizontalBar.repeat(maxLength) + botRightCorner;
    return bottomBorder;
}
// function to draw bars around input strings
function drawBarsAround(str){
    let sideBar = '┃';
    let  barsAround = sideBar + str.padEnd(maxLength,' ') + sideBar; 
    return barsAround;
}
//function to make final output

function boxIt(namesArr){
    let boxArr = [];
    let nameslen = namesArr.length;
    let string = '';
   
    boxArr.push(drawTopBorder());
       for (let j= 0; j < nameslen;j++) {
           string = drawBarsAround(namesArr[j]);
           boxArr.push(string);
           if(j!== nameslen - 1){
               boxArr.push(drawMiddleBorder());
        }  
    }
       boxArr.push(drawBottomBorder()); 
 
       return boxArr.join('\n')
}
console.log(boxIt(namesArr));