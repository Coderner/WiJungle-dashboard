export const processData = (data) => {
   
    const alertCategories = {};
    const attackFrequencyMap = {};
    
    data?.forEach(event => {

      const minute = event.timestamp.slice(11, 16); 
      attackFrequencyMap[minute] = (attackFrequencyMap[minute] || 0) + 1;

      const category = event?.alert?.category;
      if (alertCategories[category]) {
        alertCategories[category] += 1;
      } else {
        alertCategories[category] = 1;
      }
    });

    const protocolCounts = data.reduce((acc, curr) => {
      const proto = curr.proto;
      acc[proto] = (acc[proto] || 0) + 1;
      return acc;
    }, {});
  
    const categoryData = Object.keys(alertCategories).map(key => ({ name: key, value: alertCategories[key] }));
    const protocolsData = Object.keys(protocolCounts).map(proto => ({
      proto,
      count: protocolCounts[proto],
    }));
    const attacksFreq = Object.keys(attackFrequencyMap).map(minute => ({
      minute,
      attacks: attackFrequencyMap[minute],
    }));
  
    return {
      attacksFreq,
      categoryData,
      protocolsData
    };
}
  