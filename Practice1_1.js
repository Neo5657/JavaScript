function a (n){
    
var result = 100 * n;

var second = {
0:function(n){ result += 10 * 0; return third(n) },
1:function(n){ result += 10 * 1; return third(n) },
2:function(n){ result += 10 * 2; return third(n) },
3:function(n){ result += 10 * 3; return third(n) },
4:function(n){ result += 10 * 4; return third(n) },
5:function(n){ result += 10 * 5; return third(n) },
6:function(n){ result += 10 * 6; return third(n) },
7:function(n){ result += 10 * 7; return third(n) },
8:function(n){ result += 10 * 8; return third(n) },
9:function(n){ result += 10 * 9; return third(n) }
};

var third = function(n){
result += n;
return { run: function(){ return result; } };
};

return second;
}