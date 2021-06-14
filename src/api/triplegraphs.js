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
    return await Promise.all(topSellingCars(allOrders).seperatedByCar.map(async (value) => {
        return {id: value.id, noOfCars: value.noOfCars, name: await (await API.get(`cars/${value.id}`)).data.data.name}
    }))
}
 
const topSellingCategory = async (allOrders) => {

    let toReturn = {
        SUV: 0,
        Convertible: 0,
        Luxury: 0,
        Sports: 0,
        Special: 0,
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
        toReturn[newVar] += 1
    }))

    return toReturn
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

    return toReturn
}

export {topSellingCarsWithName, topSellingCategory, topSellingBrands}