const filterByDates = (preference, arrayToFilter, customDate) => {
    let datefrom;
    // let dateto;
    let cac;
    // console.log(customDate)
    
    if (preference === "day") {
      cac = new Date();
      datefrom = new Date(cac.getFullYear(), cac.getMonth(), cac.getDate()-1);
    //   dateto = new Date(cac.getFullYear(), cac.getMonth(), cac.getDate()+1);
    }
    else if (preference === "week") {
      cac = new Date();
      datefrom = new Date(cac.getFullYear(), cac.getMonth(), cac.getDate()-7);
    //   dateto = new Date(cac.getFullYear(), cac.getMonth(), cac.getDate()+1);
    }
    else if (preference === "month") {
      cac = new Date();
      datefrom = new Date(cac.getFullYear(), cac.getMonth(), cac.getDate()-30);
    //   dateto = new Date(cac.getFullYear(), cac.getMonth(), cac.getDate()+1);
    }
    else if (preference === "year") {
      cac = new Date();
      datefrom = new Date(cac.getFullYear()-1, cac.getMonth(), cac.getDate());
    //   dateto = new Date(cac.getFullYear(), cac.getMonth(), cac.getDate()+1);
    }
    
    else if (preference === "custom") {
      const tempTime1 = `${customDate}`.split("-")
      const justNow = (tempTime1[2])
      tempTime1.pop()
      tempTime1.splice(1, 0 , justNow)
      const finalTime = tempTime1.join("-")
      return arrayToFilter.filter(obj => {
          // console.log(new Date(obj.createdOn) > new Date(finalTime))
          if (new Date(obj.createdOn) > new Date(finalTime)) return obj
      })
    }

    // eslint-disable-next-line array-callback-return
    return arrayToFilter.filter(obj => {
      if (new Date(obj.createdOn) > datefrom) return obj
  })
}

export default filterByDates