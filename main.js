

for(let year=2004;year<=2040;year++){
    let date=new Date(year,0,1)
    let a=date.getDay()

    if(a===0){
        document.write(`Jan 1 in ${year} are Sunday <br><br>`)
    }
// else{
//     document.write(`Jan 1 in ${year} are not Sunday`)

// }    
}



