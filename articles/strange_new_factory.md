# A Strange way to understand "new" in javascript and es6 classes

//lets say: I want to make an Object with the property iam = "jj"

    var results = {}

//what about a factory that returns this?
// new will ignore it and when its invoked it works aswell


    function factory_this(){
        this.iam = "jj"
    
        return this
    }

    results.factory_this = ( factory_this.call({}) )
    results.new_factory_this = ( new factory_this() )
    
//a factory

    function foo_factory_es5_support(){
        var obj = {}
        
        if (!arguments) obj = this
        
        obj.iam = 3
        
        return obj
    }

//a es5 "class" (it is a function that is invoked with the new keyword)

    function foo_class() {
            this.iam = "jj"
    }

    results.foo_class = ( new foo_class )

// so what a class basicylla does is this:

    function foo(){
    var self = this
    self.iam = 3
    this.iam = "jj"
    return this
    }

    results.foo = ( foo.call({}) )

// aswell as 

    results.obj_create = Object.create(null) // no prototype needed
    results.obj_create.iam = "jj"

//when we really wanted was an object literal i.e. "anonymous object"

    results.literal = ( {iam: "jj"} )


    console.table(results)