const marks = {
    web: "",
    os: "", 
    java: "",
    dsa: "",
    sad: "",
    calcAvg: ()=>{
        let avg = (marks.web + marks.dsa + marks.java + marks.os + marks.sad) / 5;
        document.getElementById("avg").innerHTML = "AVG="+ avg;
    },
    totalAvg: ()=>{
        let total=  (marks.web + marks.dsa + marks.java + marks.os + marks.sad);
        document.getElementById("total").innerHTML = "Total="+ total ;
    }, 
    percent: ()=>{
        let percent = (marks.web + marks.dsa + marks.java + marks.os + marks.sad)*0.2;
        document.getElementById("percent").innerHTML = "percent="+ percent;
    }
}