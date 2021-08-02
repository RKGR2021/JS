var text = '{"name":"John", "age":30, "city":"New York"}'

    

window.onload = function(){
    
    const option ={
        url:'https://jsonplaceholder.ir/photos',
        method:'GET',
        Headers:{
            'Accept':'application/json',
            'Content-Type':'application/json;charset=UTF-8'
        },
        data:{
            firstname:'Kourosh',
            lastname:'Kabiri'
        }
    }
    axios(option).then(response=>{
        console.log(response.data)
    }).catch(err=>console.log(err))
}