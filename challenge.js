window.localStorageWithExpiry ={
setItem:function(key,value, expiryTime){
    let result={
        value,
        expiryTime:Date.now() + expiryTime
    };
    localStorage.setItem(key, JSON.stringify(result));
},

getItem:function(key){
    let data =localStorage.getItem(key);
    data=JSON.parse(data);

    if(data.expiryTime <= date.now()){
        localStorage.removeItem(key);
        return null;
    }
    return data.value;
},
removeItem:function(key){
    localStorage.removeItem(key);
},

};

localStorageWithExpiry.setItem("1","sqilco",2000);
setTimeout(()=>{
    console.log(localStorageWithExpiry.getItem("1"));
},1000)
