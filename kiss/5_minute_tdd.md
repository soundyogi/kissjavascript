# Write your own TDD / BDD Test Harness in 5 Minutes

// expressions are values

// step one: a (naive) harness    

    //  evaluates and logs an expression (trueish / falsy)
    function assert(expr, msg){
        expr ? console.log(`:_D pass - ${expr} --  ${msg}`): console.log(`:(( fail - ${expr} -- expected: ${msg}`)
    }

    
    // group for asserts
    function group(msg, f){
        console.log("")
        console.log("### "+msg)
        f()
    }

    
    group("self test group", function(){
        assert(true, "true")
        assert(false, "false")
    })

// step two: something to test

    function sum(...x){
        return x.reduce(function(a,b){
            return a + b
        })
    }


// step three: tests!

    group("tests for function sum to make sure it acutally does what it says", function(){

            assert(sum(3,3),"3+3 is 6")
            assert(sum(-12,100),"-12+100 is 88")
            assert(sum(1,1,1,1),"1+1+1+1 is 4")
    })
    
    
//next time we will implement bdd and tdd
// after that async testing
// after that we will talk about testing strategies for when you work in the browser (naive-harness -> tape in node)

//make it tdd

    // TDD
    var test = group
    var ok = assert
    
    
//ok now bdd

    // BDD
    var describe = group
    var it = group
    var expect = assert