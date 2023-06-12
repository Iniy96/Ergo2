const arr1=[0,5,8,6,2,6,5,1,3,6]

const filterArr = arr1.filter((item)=>{
    if(item === 6 ){
        return item
    }
})

const mapfilter = filterArr.map((item)=>{
    console.log(item);
}
)

console.log(filterArr);