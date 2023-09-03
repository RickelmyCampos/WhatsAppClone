
const today=new Date()
export const todayDateFormated=()=>{
    const day=today.getDate().toString().padStart(2,'0')
    const month=(today.getMonth()+1).toString().padStart(2,'0')
    const year=today.getFullYear()
    const dateFormated=`${day}/${month}/${year}`
   // console.log( dateFormated,"UTC") 
   return dateFormated
}
export const dateFormated=(date:Date)=>{
    const day=date.getDate().toString().padStart(2,'0')
    const month=(date.getMonth()+1).toString().padStart(2,'0')
    const year=date.getFullYear()
    const dateFormated=`${day}/${month}/${year}`
   // console.log( dateFormated,"UTC") 
   return dateFormated
}
export const hourFormated=(date:Date)=>{
    const hour=date.getHours().toString().padStart(2,'0')
    const min=date.getMinutes().toString().padStart(2,'0')
    
    const hourFormated=`${hour}:${min}`
    //console.log( hourFormated,"UTC") 
   return hourFormated
}
export const getConversationDateOrHour=(date:Date)=>{
    const dateFormat=dateFormated(date)
    if(dateFormated(today)===dateFormat){
        return hourFormated(date)
    }
    
   return dateFormat
}
