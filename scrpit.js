let parent=document.getElementById("crd");
console.log(parent);
parent.style.display="flex";
parent.style.flexWrap="wrap";
parent.style.gap="10px";

let numbers = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105];
for(i=0;i<numbers.length;i++){
    let child= document.createElement("p");
    parent.appendChild(child);
    if(numbers[i]%2==0){
        child.innerText=numbers[i];
        // child.style.cssText="display:flex, height:200px, width:400px, background-color:red, justify-content:center, align-item:center";
        child.style.backgroundColor="red";
        child.style.display="flex";
        child.style.height="200px";
        child.style.width="300px";
        child.style.justifyContent="center";
        child.style.alignItems="center";
        child.style.fontSize="25px";
        console.log(child);
    }
    if(numbers[i]%2!=0){
        child.innerText=numbers[i];
        // child.style.cssText="display:flex, height:200, width:400, background-color:blue, justify-content:center, align-item:center";
        child.style.backgroundColor="blue";
        child.style.display="flex";
        child.style.height="200px";
        child.style.width="300px";
        child.style.justifyContent="center";
        child.style.alignItems="center";
        child.style.fontSize="25px";
    }
}

