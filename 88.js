var merge = function(nums1, m, nums2, n) {
    for(let i = 0; i < n; i ++) {
        nums1[m+i] = nums2[i]
    }
    return nums1.sort(function(a,b) {return a-b})
};

console.log(merge([1,-2,3,0,0,0],3,[2,-5,6],3));

// function www(a,b) {
//     return a - b
// }
// console.log([-2,-4,-1].sort(www));