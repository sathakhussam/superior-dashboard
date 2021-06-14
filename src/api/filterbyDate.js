const filterByDates = (preference, arrayToFilter) => {
    let datefrom;
    // let dateto;
    let cac;
    
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

    // eslint-disable-next-line array-callback-return
    return arrayToFilter.filter(obj => {
      if (new Date(obj.createdOn) > datefrom) return obj
  })
}

export default filterByDates