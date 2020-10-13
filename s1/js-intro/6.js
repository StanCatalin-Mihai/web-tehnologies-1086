let sampleString = 'i got {0} from {1}'
let sampleItems =['a car','somewhere']

const formatString = (inputString, items) =>
{
    console.log(sampleString.replace('{0}',sampleItems[0]).replace('{1}',sampleItems[1]))
}

formatString(sampleString,sampleItems)