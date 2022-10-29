
const GetLocalData =(key)=>{

   try{ 
    let data = localStorage.getItem(key)
    data = JSON.parse(data);
    return data

}
catch(err){
return null;    
}
}

const SaveData = (key, value)=>{
localStorage.setItem(key, JSON.stringify(value))
}

export {GetLocalData, SaveData}