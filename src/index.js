module.exports = function check(str, bracketsConfig) {
  // your solution

    if ((str.length==0)||((str.length%2)!=0)) return false;
    let i=0;
    if (str.length<=1) return false;
    let resArr=[];
    let subArr=[];  
      while (i<str.length-1) {
      subArr=bracketsConfig.find(item=>(item[0]===str[i])||item[1]===str[i]);
       // console.log(subArr);
    if (str[i]===subArr[0] && str[i+1]===subArr[1]) i++
        else if (str[i]!==subArr[1]) resArr.push(str[i])
             else if (resArr.length===0) 
               if (subArr[0]===subArr[1]) resArr.push(str[i])
                     else return false
                else if (resArr[resArr.length-1]===subArr[0])
                       resArr.pop()
                      else resArr.push(str[i])
        i++; 
      }
       subArr=bracketsConfig.find(item=>(item[0]===str[str.length-1])||item[1]===str[str.length-1]);
    if (str.length==2) resArr[0]=subArr[0];
      //console.log(subArr, resArr);
       if (str[str.length-1]!==subArr[1]) return false
          else if (resArr.length>1) return false
                else return true; 
    } //end function