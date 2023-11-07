let items=[
];

const adding=() =>{
    let date=document.querySelector('.dueDate').value;
    let dateTo=document.querySelector('.toDate').value;
    let name=document.querySelector('.myToDo').value;
    if(!name=='' && (!date=='')){
    
        items.push({name,date,dateTo})
        
    }
 
   
    
    html()
    document.querySelector('.myToDo').value='';
    document.querySelector('.dueDate').value=''
    document.querySelector('.toDate').value=''
}
html()

function html(){
    let todoListhtml='';
    if(items.length<=0){
        document.querySelector('.todoList').innerHTML='there is no item yet'
    }
    else{

    for(let i=0;i<items.length;i++){
        const todo=items[i];
        //const name= items.name;
        //const date=items.date;
        const {name,date,dateTo}=todo
        
        const htmlIn=`<div class ="name">${name}</div>
        <div>  From   ${date} </div> 
        <div> To ${dateTo} </div>
        <div>
        <button onclick="items.splice(${i},1);adding()">Delete</button></div>
        `
        todoListhtml +=htmlIn;
        document.querySelector('.todoList').innerHTML=todoListhtml;
        console.log(name)


    }
}

}

