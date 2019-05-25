module.exports = function main(num) {
    const led=[["._.","|.|","|_|"],["...","..|","..|"],["._.","._|","|_."],
                ["._.","._|","._|"],["...","|_|","..|"],["._.","|_.","._|"],
                ["._.","|_.","|_|"],["._.","..|","..|"],["._.","|_|","|_|"],
                ["._.","|_|","..|"]];

    
    var str=num.toString();
    var first=str[0],ret=[led[first][0],led[first][1],led[first][2]];
    for(let i=1;i<str.length;i++){
        let sub=str[i];
        ret[0]+=" "+led[sub][0];
        ret[1]+=" "+led[sub][1];
        ret[2]+=" "+led[sub][2];  
    }
   ret.push('');
    return ret.join('\n');
};