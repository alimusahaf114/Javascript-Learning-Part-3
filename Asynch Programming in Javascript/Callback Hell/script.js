function task1(callback){
    setTimeout(()=>{
        console.log("Task 1 is Complete");
        callback();
    } , 5000);
    
};
function task2(callback){
    setTimeout(()=>{
        console.log("Task 2 is Complete");
        callback();
    } , 3000);
    
};
function task3(callback){
    setTimeout(()=>{
        console.log("Task 3 is Complete");
        callback();
    } , 4000);
};
function task4(callback){
    setTimeout(()=>{
        console.log("Task 4 is Complete");
        callback();
    } , 2000);
};

task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                console.log("All the task are Completed.......");
                
            });
        });
    });
});




