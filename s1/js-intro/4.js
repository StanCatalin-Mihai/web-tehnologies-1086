const sampleString = 'the quick brown fox jumps over the lazy dog'

const fdist = (phrase) =>
{
    const items = phrase.split(/[\s.]/)
    const result= {}
    for (const item of items)
    {
        if (item in result)
        {
            result[item]++
        }
        else
        {
            result[item] = 1
        }
    }
    for (const word in result){
        result[word] = result[word] / items.length
    }
    return result
}

const fdistchar = (phrase) =>
{
    const items = phrase.split('')
    const result= {}
    for (const item of items)
    {   
        if (item !== ' ')
        {
            if (item in result)
            {
                result[item]++
            }
            else
            {
                result[item] = 1
            }
        }
    }
    for (const letter in result){
        result[letter] = result[letter] / items.length
    }
    return result
}
console.log(fdist(sampleString))
console.log(fdistchar(sampleString))