
    const reduce = function(sourceArray, reducer, total = sourceArray[0]) { 
        if (total != sourceArray[0]) {
            sourceArray.forEach((element) => {
                total = reducer(element, total) //total, because it is reducing it to a total value
            })
        } else {
            for (let i = 1; i < sourceArray.length; i++) { // if initial value which is sourceArray[0] then run else
                total = reducer(sourceArray[i], total)
            }
        }
        return total
    }


function map(sourceArray, afunction){
    const fullArray = []
    for (const element in sourceArray) { // for each element in the source array
        fullArray.push(afunction(sourceArray[element])) // put the elements from the source array
        //which are functions into the empty array
    }
    return fullArray
 }


