const primeCheck = (number) =>{
    let c=1
    for(let i = 2; i<= number ** 1/2; i++)
    {
        if(number%i === 0)
        {
            console.log(`Numarul ${number} nu este prim`)
            c=0
            break
        }
    }
    if(c==1)
    {
        console.log(`Numarul ${number} este prim`)
    }
}

primeCheck(0)
primeCheck(1)
primeCheck(5)
primeCheck(6)
primeCheck(113)
primeCheck(1131332)
primeCheck(11313213132)