const ordersHome = (orders, preference) => {
    const newOrders = orders.sort(function(a, b) {
        var keyA = new Date(a.createdOn),
          keyB = new Date(b.createdOn);
        // Compare the 2 dates
        if (keyA > keyB) return -1;
        if (keyA < keyB) return 1;
        return 0;
    })

    let toReturn = filterByDates(preference, newOrders, new Date())

    return toReturn
}

export {ordersHome}

const filterByDates = (preference, arrayToFilter, cac) => {
  let datefrom;
  let dateto;
  var month_name = function(dt){
    const mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
      return mlist[dt];
    };
  var ReturnArray = {}

  if (preference === "year") {
    let myArr = Array(12).fill(0)
    const Detail = []
    const Name = []
    myArr.map((val, idx) => {
      let myVar
      if (idx === 4){
        myVar = parseInt(cac.getMonth()-(idx-1))
      }else if (parseInt(cac.getMonth()-(idx-1)) <=0) {
        myVar = 12+(parseInt(cac.getMonth()-(idx-1)))
      } else {
        myVar = parseInt(cac.getMonth()-(idx-1))
      }
      myVar += 1
      const notDone = parseInt(cac.getMonth()-(idx-1))
      const myIDENT = arrayToFilter.filter(obj => {
        if (notDone < 0) {
          if (new Date(obj.createdOn) <= new Date(`${myVar}-${cac.getDate()}-${cac.getFullYear()-1}`) && new Date(obj.createdOn) >= new Date(`${myVar-1}-${cac.getDate()}-${cac.getFullYear()}`)) return true 
        } else {
          if (new Date(obj.createdOn) <= new Date(`${myVar}-${cac.getDate()}-${cac.getFullYear()}`) && new Date(obj.createdOn) >= new Date(`${myVar-1}-${cac.getDate()}-${cac.getFullYear()}`)) return true 
        }
      })
      const yearss = (notDone < 0) ? cac.getFullYear() - 1 : cac.getFullYear()
      if (myIDENT.length > 0) {
        Detail.push((myIDENT.map(obj => parseInt(obj.cost)).reduce((a, b) => a+b)))
        Name.push(`${month_name(myVar-1)} ${yearss}`)
      }
      else{
        Detail.push(0)
        Name.push(`${month_name(myVar-1)} ${yearss}`)
      }
    })
    ReturnArray["names"] = Name
    ReturnArray["value"] = Detail

  }

  if (preference == "week") {
    datefrom = new Date()
    const days = [0,0,0,0,0,0,0]
    let toReturnValues;
    let toReturnLabels = []
    toReturnValues = (days.map((val, idx) => {
      const newDay = new Date(`${datefrom.getMonth()+1}/${datefrom.getDate()-idx}/${datefrom.getFullYear()}`)
      const newDayBefore = new Date(`${datefrom.getMonth()+1}/${idx == 0 ? datefrom.getDate() - 1 : datefrom.getDate()-idx+1}/${datefrom.getFullYear()}`)
      toReturnLabels.push(`${datefrom.getMonth()+1}/${datefrom.getDate()-idx}/${datefrom.getFullYear()}`)
      return arrayToFilter.filter((val) => {
        if(newDay < new Date(val.createdOn) && newDayBefore > new Date(val.createdOn)) return val
      })
    }))
    let valueToUse = toReturnValues.map(val => val.map(obj => parseFloat(obj.cost)))
    valueToUse = valueToUse.map(val => val.length > 0 ? val.reduce((a,b) => a+b): val[0] ? val[0] : 0)
    ReturnArray = {names: toReturnLabels, value: valueToUse}
  }
  if (preference == "month") {
    datefrom = new Date()
    const days = [0,0,0,0]
    let toReturnValues;
    let toReturnLabels = []
    toReturnValues = (days.map((val, idx) => {
      let newDay;
      let newDayBefore;
      // Checking if the days that we are subtracting are less than 0
      if (datefrom.getDate()-(idx*7) <= 0) {
        newDay = new Date(`${datefrom.getMonth()}/${30+(datefrom.getDate()-(idx*7))}/${datefrom.getFullYear()}`)}
      // Subtract no of weeks
      else newDay = new Date(`${datefrom.getMonth()+1}/${datefrom.getDate()-(idx*7)}/${datefrom.getFullYear()}`)
      // A week before
      if (datefrom.getDate()-((idx-1)*7) <= 0){
         newDayBefore = new Date(`${datefrom.getMonth()}/${30+(datefrom.getDate()-((idx-1)*7))}/${datefrom.getFullYear()}`)}
      else newDayBefore = new Date(`${datefrom.getMonth() + 1}/${(datefrom.getDate()-((idx-1)*7))}/${datefrom.getFullYear()}`)
      // Label
      toReturnLabels.push(`Week ${idx+1}`)
      return arrayToFilter.filter((val) => {
        if(newDay < new Date(val.createdOn) && newDayBefore > new Date(val.createdOn)) return val.cost
      })
    }))
    let valueToUse = toReturnValues.map(val => val.map(obj => parseFloat(obj.cost)))
    valueToUse = valueToUse.map(val => val.length > 0 ? val.reduce((a,b) => a+b): val[0] ? val[0] : 0)
    ReturnArray = {names: toReturnLabels, value: valueToUse}
    // console.log(ReturnArray)
  }

  // eslint-disable-next-line array-callback-return
  return ReturnArray
}

export default filterByDates