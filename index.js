// code your solution here
function saturdayFun(activity = "roller-skate" ){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(arg1){
    return function(arg = "special"){
        return `You are ${arg1}${arg}${arg1}!`
    }
}