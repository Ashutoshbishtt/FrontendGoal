const counterModule = function(){
    let counter =0;

    function privateLog(){
        console.log(counter);
    }

    return {
        increment : function(){
            counter++;
            privateLog();
        },
        decrement:function(){
            counter--;
            privateLog();
        },
        reset:function(){
            counter = 0;
        },
        getCounter:function(){
            return counter;
        }
    }
}