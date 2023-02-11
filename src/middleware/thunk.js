
export const getAllProducts = ()=>{
return async (dispatch) => {
   fetch('https://fakestoreapi.com/products')
   .then((response)=>response.json())
   .then((data)=> dispatch({type:'GET_DATA', payload:data }))
   
}
}