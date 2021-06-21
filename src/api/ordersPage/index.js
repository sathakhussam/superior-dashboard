import {topSellingCarsWithName} from '../triplegraphs'
import api from '../api'

const OrderHome = async (orders, from, to, brand, type) => {
    let newOrders = orders.sort(function(a, b) {
        var keyA = new Date(a.createdOn),
          keyB = new Date(b.createdOn);
        // Compare the 2 dates
        if (keyA > keyB) return -1;
        if (keyA < keyB) return 1;
        return 0;
    })

    if (from && to) {
        const fromDate = new Date(from)
        const toDate = new Date(to)

        newOrders = newOrders.filter((val) => {
            if (new Date(val.createdOn) >= fromDate && new Date(val.createdOn) <= toDate) return val
        })
    }
    else if (from) {
        const fromDate = new Date(from)

        newOrders = newOrders.filter((val) => {
            if (new Date(val.createdOn) >= fromDate) return val
        })
    }
    else if (to) {
        const toDate = new Date(to)

        newOrders = newOrders.filter((val) => {
            if (new Date(val.createdOn) <= toDate) return val
        })
    }
    
    // const carNames = await topSellingCarsWithName(newOrders)
    
    // console.log(carNames)
    if (brand || type) {
        newOrders = await Promise.all(newOrders.map(async val => {
            const car = await api.get(`cars/${val.car}`)
            // console.log(car.data.data)
            return {...val, brand: car.data.data.brand, type: car.data.data.type}
        }))

        if (brand) {
            newOrders = newOrders.filter(val => {
                if (val.brand.toLowerCase().includes(brand.toLowerCase())) return val
            })
        }

        if (type) {
            newOrders = newOrders.filter(val => {
                if (val.type.toLowerCase().includes(type.toLowerCase())) return val
            })
        }
    } 

    return newOrders
}

export {OrderHome}