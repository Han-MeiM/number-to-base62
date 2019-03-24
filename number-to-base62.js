/* Number to Base62, up to 238328 */
/* nt62e for encode, nt62d for decode */

alpha62text = "0123456789QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
alpha62 = alpha62text.split('');

function nt62e(inp){
    if (inp > 3843){
        a = Math.floor (inp / 3844);
        x = inp - a * 3844; 
        b = Math.floor (x / 62); 
        c = x - b * 62; 
        return ("" + alpha62[a] + alpha62[b] + alpha62[c]);
    }

    if (inp > 61){ 
        a = Math.floor (inp / 62); 
        b = inp - a * 62;
        return ("" + alpha62[a] + alpha62[b]);
    }

    return (alpha62[inp]);
}

function nt62d(inp){
    ina = inp.split('');
    if (inp.length == 3){
        x = alpha62.indexOf(ina[0]);
        y = alpha62.indexOf(ina[1]);
        z = alpha62.indexOf(ina[2]);
        return (x * 3844 + y * 62 + z);
    }
    
    if (inp.length == 2){
        x = alpha62.indexOf(ina[0]);
        y = alpha62.indexOf(ina[1]);
        return (x * 62 + y);
    }
    
    return (alpha62.indexOf(ina[0]));
}
