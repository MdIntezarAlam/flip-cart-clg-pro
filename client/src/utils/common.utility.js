//I want to truncate
// a text or line with ellipsis using JavaScript 
//to cut the text use this functions
//after length 50 it will be  cut

export const addElips = (text) => {
    if (text.length > 50) {
      return  text.substring(0, 50) + '...';
    }
    return text
}