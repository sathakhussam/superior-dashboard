import API from './api'


const topSellingCars = (allOrders) => {
    var toReturn = {
        
    }
    
    var newArr = {}

    allOrders.map(async obj => {
        if (newArr[obj.car]) newArr[obj.car].push(obj)
        else newArr[obj.car] = [obj]
    })

    var newMethodArr = Object.values(newArr).map((val) => {
        return {id: val[0].car, noOfCars: val.length}
    })
    
    // newMethodArr = newMethodArr.map(async(val) => {
    //     let SepName;       
    //     return {id: val.id, noOfCars: val.noOfCars}
    // })

    newArr = newMethodArr.sort(function(a,b){
        if (a.noOfCars < b.noOfCars)
           return -1;
        else if (a.noOfCars === b.noOfCars)
           return 0;
        else
           return 1;
    });

    toReturn["seperatedByCar"] = newArr

    return toReturn;
} 

const topSellingCarsWithName = async (allOrders) => {
    const toReturn = await Promise.all(topSellingCars(allOrders).seperatedByCar.map(async (value) => {
        return {id: value.id, noOfCars: value.noOfCars, name: await (await API.get(`cars/${value.id}`)).data.data.name}
    }))
        console.log(toReturn.map())
    const finalreturn = {values: Object.values(toReturn), labels: Object.keys(toReturn)}
    finalreturn["labels"] = finalreturn.labels.map(val => {
        if (val.length > 6)  {
            const tempVar = `${val.slice(0, 7)}..`
            return tempVar.charAt(0).toUpperCase() + tempVar.toLowerCase().slice(1)
        }
        return val.charAt(0).toUpperCase() + val.toLowerCase().slice(1)
    })
}
 
const topSellingCategory = async (allOrders) => {

    let toReturn = {
        SUV: 0,
        convertibles: 0,
        luxury: 0,
        sports: 0,
        special: 0,
    }

    let newArr ={}

    allOrders.map(async obj => {
        if (newArr[obj.car]) newArr[obj.car].push(obj)
        else newArr[obj.car] = [obj]
    })

    var newMethodArr = Object.values(newArr).map((val) => {
        return {id: val[0].car, cars: val}
    })

    let neww = await Promise.all(newMethodArr.map(async (val) => {
        let newVar = await (await API.get(`cars/${val.cars[0].car}`)).data.data.type
        console.log(val.cars.length)
        toReturn[newVar] += val.cars.length
    }))


    const finalreturn = {values: Object.values(toReturn), labels: Object.keys(toReturn)}
    finalreturn["labels"] = finalreturn.labels.map(val => {
        if (val.length > 6)  {
            const tempVar = `${val.slice(0, 7)}..`
            return tempVar.charAt(0).toUpperCase() + tempVar.toLowerCase().slice(1)
        }
        return val.charAt(0).toUpperCase() + val.toLowerCase().slice(1)
    })
    return finalreturn
}

const topSellingBrands = async (allOrders) => {

    let toReturn = {}

    let newArr ={}

    allOrders.map(async obj => {
        if (newArr[obj.car]) newArr[obj.car].push(obj)
        else newArr[obj.car] = [obj]
    })

    var newMethodArr = Object.values(newArr).map((val) => {
        return {id: val[0].car, cars: val}
    })

    let neww = await Promise.all(newMethodArr.map(async (val) => {
        let newVar = await (await API.get(`cars/${val.cars[0].car}`)).data.data.brand
        toReturn[newVar] += 1
        if (toReturn[newVar]) toReturn[newVar] += val.cars.length
        else if (!toReturn[newVar]) toReturn[newVar] = val.cars.length
    }))

    const finalreturn = {values: Object.values(toReturn), labels: Object.keys(toReturn)}
    finalreturn["labels"] = finalreturn.labels.map(val => {
        if (val.length > 6) return `${val.slice(0, 5)}..`
        return val
    })
    return finalreturn
}

export {topSellingCarsWithName, topSellingCategory, topSellingBrands}