function timeConversion(s) {
    let ap=s[8];
    if(ap==="A" && `${s[0]}${s[1]}`==="12"){
        s=s.replace("12","00")
    }else if(ap==="P" && `${s[0]}${s[1]}`!=="12"){
       s=s.replace(`${s[0]}${s[1]}`,parseInt(`${s[0]}${s[1]}`)+12)
    }
    let aux=s.slice(0,s.length-2);
    console.log(aux);
    return aux;
}

let s="10:05:45PM"
let s2="12:01:00AM"
let s3="12:40:22AM"
let s4="12:45:54PM"
timeConversion(s4);//"19:05:45", "00:01:00"