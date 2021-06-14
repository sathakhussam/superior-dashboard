const ordersHome = (orders) => {
    const newOrders = orders.sort(function(a, b) {
        var keyA = new Date(a.createdOn),
          keyB = new Date(b.createdOn);
        // Compare the 2 dates
        if (keyA > keyB) return -1;
        if (keyA < keyB) return 1;
        return 0;
    })

    let toReturn = filterByDates("year", newOrders, new Date())

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
      const notDone = parseInt(cac.getMonth()-(idx-1))
      console.log(myVar)
      const myIDENT = arrayToFilter.filter(obj => {
        if (notDone < 0) {
          if (new Date(obj.createdOn) <= new Date(`${myVar}-${cac.getDate()}-${cac.getFullYear()-1}`) && new Date(obj.createdOn) >= new Date(`${myVar-1}-${cac.getDate()}-${cac.getFullYear()}`)) return true 
        } else {
          if (new Date(obj.createdOn) <= new Date(`${myVar}-${cac.getDate()}-${cac.getFullYear()}`) && new Date(obj.createdOn) >= new Date(`${myVar-1}-${cac.getDate()}-${cac.getFullYear()}`)) return true 
        }
      })
      const yearss = (notDone < 0) ? cac.getFullYear() - 1 : cac.getFullYear()
      if (myIDENT.length > 0) {
        console.log("here")
        Detail.push((myIDENT.map(obj => parseInt(obj.cost)).reduce((a, b) => a+b)))
        Name.push(`${month_name(myVar-1)} ${yearss}`)
      }
      else{
        Detail.push(0)
        Name.push(`${month_name(myVar-1)} ${yearss}`)
      }
    })
    // console.log(Name, Detail)
    ReturnArray["names"] = Name
    ReturnArray["value"] = Detail

  }

  // eslint-disable-next-line array-callback-return
  return ReturnArray
}

export default filterByDates