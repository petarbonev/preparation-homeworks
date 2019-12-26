let score = -1;

if(score >= 1 && score <= 3){
    console.log(score * 10);
}else if(score >= 4 && score <= 6){
    console.log(score * 100)
}else if(score >= 7 && score <= 9){
    console.log(score * 1000)
}else {
    console.log('Invalid Score')
}