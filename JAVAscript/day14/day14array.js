// for in loop ko array ke sath nahi lete hai 
const arr=[23,4,5,76];
arr.name="Deepak";  //Ye bhi print kara dega (as a key value)
arr.age=34;
// array ka index ko varible nahi ho sakta hai n 
// for in loop sab print kar dega 
for(let key in arr)
{
    console.log(key);
}

// ye normal kam karega 
for(let i=0;i<arr.length;i++)
{
    console.log(i,arr[i]);
}