const input=document.querySelector('.sentense')

const counter=(input)=>{
    const str=input.split(' ').join('')
    const result =[...str].reduce((prev, car)=>{
        prev[car]=prev[car]
            ?prev[car]+1
            :1
        return prev
    },{})
    
    const objResult={}
    return Object.entries(result)
        .sort((a,b)=>b[1]-a[1])  
        .map(el=>{        
            return ({...objResult,[el[0]]:el[1]})        
        })
        .reduce((result,item)=>{
        var key=Object.keys(item)[0]
        result[key]=item[key]
        return result
        },{})    
} 

const display=(arr)=>{
    const result=document.querySelector('.result')
    result.innerHTML= ''
    for(const [key, value] of Object.entries(arr)){
       
        result.innerHTML+= "[<span>"+key+" :"+value+"</span>]"+ " - "
    }
}


input.addEventListener('input',function(e){
    display(counter(e.target.value))
})
