let genderType="female";
function printGender(){
    let colour="brown";
    console.log("Function-level colour:", colour)
    if(genderType === "female"){
        var age=30;
    
        let colour="pink";
        console.log("Inside if block colour:" ,colour)

    
}
console.log("Age outside if block:",age)

}
printGender()
console.log("Global gender type:" ,genderType)
genderType="male"
console.log("Changed Global gender type:" ,genderType)
printGender()