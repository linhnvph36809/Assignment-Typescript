export const setIdLocal = (id:string|null) => {
    const data = JSON.parse(localStorage.getItem("idProducts")) || [] ; 
    const isCheck = data.includes(id) 
    if(!isCheck){
        data.push(id)
        localStorage.setItem("idProducts",JSON.stringify(data))
    }
}
