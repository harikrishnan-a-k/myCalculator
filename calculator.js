
function getDisplayBar(){
    return document.querySelector('#displayBar').value;
}

function setDisplayBar(val){

    document.querySelector('#displayBar').value=val;
}

function addTODisplay(input){

    let exp =getDisplayBar();
    exp += input;
    setDisplayBar(exp);    

}

function result(){
    let exp =getDisplayBar();
    let expv2 =exp.replace('X','*');
    let ans=eval(expv2);
    setDisplayBar(ans);
}

function backSpace(){

    let exp =getDisplayBar();
    let expCut=exp.slice(0,exp.length-1);
    setDisplayBar(expCut);

}
function clean()
{
    setDisplayBar('');
}