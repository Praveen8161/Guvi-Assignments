let a = ['3 3', '87 21 34', '89 32 78', '12 23 45'];
let [r,c] = a[0].split(" ");
let arr = [];
for (var i=1;i<=r;i++){
    arr.push(...a[i].split(" "))
}
arr.sort((a,b) => a-b);
let start = 0;
let end = +c;
for (var j=0;j<r;j++){
    console.log(arr.slice(start,end).join(" "));
    start += +c;
    end += +c;
}
