function runTest(testType){
    switch(testType){
        case"smoke":
        console.log("Smoke test")
        break;

        case"sanity":
        console.log("Sanity test")
        break

        case"Regression":
        console.log("Regression test")
        break;

        default:
            console.log("smoke Test")
    }


}
runTest("sanity")
runTest("Regression")
runTest("smoke")
runTest()