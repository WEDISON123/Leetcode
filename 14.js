var longestCommonPrefix = function(strs) {
    if(strs[0] == '') {
        return ''
    }
    var arr = []
    for(let item of strs) {
        arr.push(item.length)
    }
    len = Math.min(...arr)
    console.log(len);
    var res = k = ''
    for(let i = 0; i < len; i ++) {
        res += strs[0][i]
        console.log(res,'/');
        for(let j of strs) {
            console.log(res,j.indexOf(res),'//');
            if(j.indexOf(res) == -1 || j.indexOf(res) != 0 ) {
                return k
            }
        }
        k = res
        console.log(k,'k');
    }
    return k
};

console.log(longestCommonPrefix(["c","acc","ccc"]));