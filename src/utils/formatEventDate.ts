export const formatEventDate = (dates) => {
    if (!dates.length) return "";
  
    const firstDate = dates[0].split(" "); // ["13", "Abril"]
    const lastDate = dates[dates.length - 1].split(" "); // ["21", "Abril"]
  
    const startDay = firstDate[0];
    const endDay = lastDate[0];
    const month = firstDate[1].toUpperCase(); // Para deixar em maiúsculas
  
    return `${startDay} a ${endDay} ${month}`;
  };