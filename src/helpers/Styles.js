/**-------------------------------------------------- 
  This function takes a HEX color and turn it into a 
  RGB or RGBA depending on user choise (alpha), 
  then with that color it returns a Object and add
  the property needed. 
  (check ReactNative style properties name guide)
  --------------------------------------------------**/
export const alphaHexStyle = (name, hex, alpha) => {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16),
        hash = {};

    if (alpha) {
      const val = `rgba(${r},${g},${b},${alpha})`
      if (name === "none") return val
      hash[name] = val
    } else {
      const val = `rgb(${r},${g},${b})`
      if (name === "none") return val
      hash[name] = val
    }
      
    return hash
}

/**-------------------------------------------------- 
  This function takes a HEX color and turn it darker
  based on the percentage (float) you give.
  --------------------------------------------------**/
export const darkerColor = (hex, percent) => {   
    var f = parseInt(hex.slice(1),16),
        t = percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,
        G=f>>8&0x00FF,
        B=f&0x0000FF;
    return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
}