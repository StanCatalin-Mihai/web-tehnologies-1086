const helloparam = nume => {
    console.log(`hello, ${nume}!`)
}

helloparam('catalin')

const fibonacci = (n) => {
    switch(n){
        case 0: 
        case 1:
            return 1
        default: return fibonacci(n-1)+fibonacci(n-2)
    }
}
console.log(fibonacci(10))

if(process.argv.length < 3){
    console.log('node 3.js <fibonacci index>')
}
else
{
    const param = parseInt(process.argv[2])
    if(isNaN(param))
    {
        console.log('parameter must be an int')
    }else
    {
    console.log(fibonacci(param))
    }
}