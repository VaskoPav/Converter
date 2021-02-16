function convert(num){
    let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
                'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
                'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
                'ninety'];
    
    
    let numString = num.toString();
  
    if (num === 0) return 'zero';
  
    
    if (num < 20) {
      return ones[num];
    }
  
    if (numString.length === 2) {
      return tens[numString[0]] + ' ' + ones[numString[1]];
    }
  
    
    if (numString.length == 3) {
      if (numString[1] === '0' && numString[2] === '0')
        return ones[numString[0]] + ' hundred';
      else
        return ones[numString[0]] + ' hundred and ' + convert(+(numString[1] + numString[2]));
    }
  
    if (numString.length === 4) {
      let end = (numString[1] + numString[2] + numString[3]);
      if (end === 0) return ones[numString[0]] + ' thousand';
      if (end < 1000) return ones[numString[0]] + ' thousand and '+ convert(end);
      return tens[numString[0]] + ' thousand ' + convert(end);
    }

    if (numString.length === 5) {
        let end = (numString[1] + numString[2] + numString[3]+numString[4]);
        if (end === 0) return ones[numString[0]] + ' thousands';
        if (end < 1000) return ones[numString[0]] + ' thousands  and ' + convert(end);   //////* problem
        return ones[numString[0]] + convert(end);
    }
    if (numString.length === 6) {
        let end = (numString[1] + numString[2] + numString[3]+numString[4]+numString[5]);
        if (end === 0) return ones[numString[0]] + ' thousands hundreds';
        if (end < 100000) return ones[numString[0]] + ' thousands hundreds and ' + convert(end);  /////*problem
        return ones[numString[0]] + ' thousands hundreds ' + convert(end);
    }
    if (numString.length === 7) {
        let end = (numString[1] + numString[2] + numString[3]+numString[4]+numString[5]+numString[6]);
        if (end === 0) return ones[numString[0]] + ' milion';
        if (end < 10000000) return ones[numString[0]] + ' milion  and ' + convert(end);
        return ones[numString[0]] + ' milion ' + convert(end);
    }
    if (numString.length === 8) {
        let end = (numString[1] + numString[2] + numString[3]+numString[4]+numString[5]+numString[6]+numString[7]);
        if (end === 0) return ones[numString[0]] + ' bilion';
        if (end < 10000000) return ones[numString[0]] + ' bilion  and ' + convert(end);
        return ones[numString[0]] + ' bilion ' + convert(end);
    }


}
  
  let value = document.getElementById('value');
  let result = document.getElementById('result');
  
    value.addEventListener('change', function(){
    
    let val = value.value;
    result.innerHTML += convert(val);
})
  