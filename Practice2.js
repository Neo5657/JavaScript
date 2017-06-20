window.$ = function counter(sum) {
    return {
        add : function (num) {
            sum += num;
            return counter(sum);
        },
        result: function(){
            return sum;
        }
    };
};
$(1).add(2).add(3).add(99).result() === 105;
$(1).add(2).add(3).result() === 6;