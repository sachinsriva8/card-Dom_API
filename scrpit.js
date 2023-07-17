let parent=document.getElementById("crd");
parent.style.cssText="display: flex; flex-wrap:wrap; gap:10px;";

let child;

let numbers = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110];
for(i=0;i<numbers.length;i++){
    child= document.createElement("p");
    parent.appendChild(child);
    if(numbers[i]%2==0){
        child.innerText=numbers[i];
        var css_even="display:flex; height:200px; width:400px; background-color:red; justify-content:center; align-items:center;";
        child.style.cssText=css_even;
    }
    if(numbers[i]%2!=0){
        child.innerText=numbers[i];
        var css_odd="display:flex; height:200px; width:400px; background-color:blue; justify-content:center; align-items:center;";
        child.style.cssText= css_odd;
    }

    child.addEventListener("mouseover", (e)=>{
        // console.log(e.target);
        e.target.style.cssText+=`background-color:green; color:gold; transform:scale(1.1); border-radius:10px; position:relative; z-index=2;`
    })
    child.addEventListener("mouseout", (e)=>{
        if(e.target.innerText%2==0){
            e.target.style.cssText=css_even;
        }else{
            e.target.style.cssText=css_odd;
        }
    })
}





