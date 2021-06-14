/* eslint-disable array-callback-return */
const RevenueWidget = (currData) => {
    var arrayOfCosts = currData.map(item => {
      return item.cost
    })

    var historyCosts = [0, 0, 0, 0, 0, 0 ,0]

    historyCosts.map((item, idx) => {
      let cac = new Date();
      let datefrom = new Date(cac.getFullYear(), cac.getMonth(), cac.getDate()-7+idx);
      let dateto = new Date(cac.getFullYear(), cac.getMonth(), cac.getDate()-7+(idx+1));

      let val = currData.filter(obj => {
        if ((new Date(obj.createdOn) >= datefrom) && (new Date(obj.createdOn) <= dateto)) return obj
      })
      historyCosts[idx] = val.map(obj => obj.cost).reduce((a,b)=> a+b,0)
    })


    var toReturn = {
      currentCosts : arrayOfCosts,
      totalCurrentCost: arrayOfCosts.reduce((a,b) => a+b,0),
      historyOfCostsByDate: historyCosts,

    }
    toReturn["percentage"] = ((toReturn.totalCurrentCost-toReturn.totalPreviousCost)/toReturn.totalPreviousCost)
    return toReturn
}


// const filterByDates = (preference, arrayToFilter) => {
//     let datefrom;
//     let dateto;
//     let cac;
    
//     if (preference == "day") {
//       cac = new Date();
//       datefrom = new Date(cac.getFullYear(), cac.getMonth(), cac.getDate()-1);
//       dateto = new Date(cac.getFullYear(), cac.getMonth(), cac.getDate()+1);
//     }
//     else if (preference == "week") {
//       cac = new Date();
//       datefrom = new Date(cac.getFullYear(), cac.getMonth(), cac.getDate()-7);
//       dateto = new Date(cac.getFullYear(), cac.getMonth(), cac.getDate()+1);
//     }
//     else if (preference == "month") {
//       cac = new Date();
//       datefrom = new Date(cac.getFullYear(), cac.getMonth(), cac.getDate()-30);
//       dateto = new Date(cac.getFullYear(), cac.getMonth(), cac.getDate()+1);
//     }
//     else if (preference == "year") {
//       cac = new Date();
//       datefrom = new Date(cac.getFullYear()-1, cac.getMonth(), cac.getDate());
//       dateto = new Date(cac.getFullYear(), cac.getMonth(), cac.getDate()+1);
//     }
//     console.log(datefrom, dateto, preference)

//     return arrayToFilter.filter(obj => {
//       if (new Date(obj.createdOn) >= datefrom) return obj
//   })
// }

const OrderWidget = (currOrder) => {
  const toReturn = {
    totalCurrentOrders: currOrder.length,
  }
  
  return toReturn
}


const UserWidget = (currUsers, prevUsers) => {
  const toReturn = {
    totalCurrentUsers: currUsers.length,
  }
  
  return toReturn
}

const GrowthWidget = (currData, prevData) => {
  const toReturn = {
    growthData: currData.map(item => item.cost).reduce((a,b) => a+b,0) - prevData.map(item => item.cost).reduce((a,b) => a+b,0)/prevData.map(item => item.cost).reduce((a,b) => a+b,0)
  }

  return toReturn
}

export {RevenueWidget, OrderWidget, UserWidget, GrowthWidget}