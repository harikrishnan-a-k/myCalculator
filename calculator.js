
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
    let expv2 =exp.replace(/X/g,'*');
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
document.querySelectorAll('button').forEach(function(el){ 
    el.addEventListener('click',function(e){
    let  arg=e.target.value;
    switch (arg) {
        case '=':result();
            
            break;
        case 'C':clean();
            
            break;
        case '<-':backSpace();
            
            break;
            
    
        default:addTODisplay(arg);
            break;
    }
});

});
//document.addEventListener()
