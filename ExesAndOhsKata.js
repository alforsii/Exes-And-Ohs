
function XO(str) {
    //code here
   let x=[];
  let y=[];
  let z=[];
  
  for(let i=0;i<str.length;i++){
    switch(str[i].toLowerCase()){
      case 'x':
        x.push(str[i]);
        break;
      case 'o':
        y.push(str[i]);
        break;
      default:
        z.push(str[i]);
        break;
    }
    
  }
  if(x.length===y.length){
  console.log(true);
}
else{
  console.log(false);
}
}

XO("ooxx");      // => true
XO("xooxx");     //=> false
XO("ooxXm");     // => true
XO("zpzpzpp");    //=> true // when no 'x' and 'o' is present should return true
XO("zzoo");      //=> false
