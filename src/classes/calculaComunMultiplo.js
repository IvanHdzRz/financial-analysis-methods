const calculaComunMultiplo=(numbers)=>{
    const primes=[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991 ];
    let divisible;
    let currentNumber;
    let currentPrime;
    let factors=[]
    //recorre numeros primos solo si hay numeros aun
    for(let primeIndex=0;primeIndex<primes.length&&numbers.length>0;primeIndex++){
      divisible=false;
      for(let numberIdex=0;numberIdex<numbers.length;numberIdex++){
        currentNumber=numbers[numberIdex];
        currentPrime=primes[primeIndex]
        //si es divisible entre el numero primo se reasigna el valor
        //y si añade el numero primo al array de factores
        if(currentNumber%currentPrime===0){
          //solo agrega un factor primo por cada recorrido completo al array
          if(!divisible){
            factors.push(currentPrime);
          }
          
          divisible=true;
          //console.log('antes de dividir')
          //console.log(numbers)
          numbers[numberIdex]=currentNumber/currentPrime;
          //console.log('el primo es '+currentPrime)
          //console.log(numbers)
        }
      }
      
      //si fue divisible sigue con el mismo numero primo
      //si no lo intentara con el siguiente
      primeIndex=divisible?primeIndex-1:primeIndex;
      //si hay un 1 en el array lo elimina ya que ese numero ya esta descompuesto totalmente en numeros primos
      numbers=numbers.filter(number=>number>1)
    }
    return factors.reduce((acum,value)=>acum*value,1);
    //return factors
  
  }

  export default calculaComunMultiplo