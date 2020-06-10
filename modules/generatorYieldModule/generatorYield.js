import GeneratorExamples from "../generatorModule.js";
var ns1 = window.Gus.ES6 || {}

ns1.GeneratorYieldExamples = function FunctionExtensions(control){
    GeneratorExamples.call(this, control);
}

ns1.GeneratorYieldExamples.prototype = Object.create(GeneratorExamples.prototype);
ns1.GeneratorYieldExamples.constructor = ns1.GeneratorYieldExamples;

ns1.GeneratorYieldExamples.prototype = function(){
    var yieldValuePassedIn = function yieldValuePassedIn(){
        // yield value passed in.
        function *process2() { 
            yield; 
        }
        let it2 = process2(); 
        var rst1 = it2.next();
        console.log(`rst1: ${JSON.stringify(rst1)}`);   

        const newLocal = `<section><h4> Example 3 yield value passed in</h4> 
        <pre><code class="language-javascript">   
        // yield value passed in.
        function *process2() { 
            yield; 
        }
        let it2 = process2(); 
        var rst1 = it2.next();
        console.log(\`rst1: \${JSON.stringify(rst1)}\`);   
        </code></pre>
        </section>
        <aside class="text-info bg-light mb-3">
            <cite title="Results">Result - </cite>&#9632; rst1: ${JSON.stringify(rst1)} &#9632;
        </aside>`;
        $(this.examplesCtl).append(newLocal);    
    },
    yieldNumber = function yieldNumber(){
        // yield value passed in 200.
        function * process(){ 
            let result = yield; 
            return (`the result is ${result}`); 
        }
        let it = process(); 
        it.next(); 
        let rst = it.next(200);
        console.log(`it.next(200) : ${JSON.stringify(rst)}`);
        const newLocal = `<section><h4> Example 4 yield value passed in</h4> 
        <pre><code class="language-javascript">   
        // yield value passed in 200.
        function * process(){ 
            let result = yield; 
            return (\`the result is \${result}\`); 
        }
        let it = process(); 
        it.next(); 
        let rst = it.next(200);
        console.log(\`it.next(200) : \${JSON.stringify(rst)}\`);  
        </code></pre>
        </section>
        <aside class="text-info bg-light mb-3">
            <cite title="Results">Result - </cite>&#9632; it.next(200): ${JSON.stringify(rst)} &#9632;
            
        </aside>`;
        $(this.examplesCtl).append(newLocal);    
    },
    yieldArray = function yieldArray(){
        // array yield.
        function * process(){ 
            let newArray = [yield, yield, yield];
            return (newArray); 
        }
        let it = process(); 
        it.next(); 
        it.next(2); 
        it.next(4); 
        let rst = it.next(42);
        console.log(`it.next(4) : ${JSON.stringify(rst)}`);
        const newLocal = `<section><h4> Example 5 yield value passed in</h4> 
        <pre><code class="language-javascript">   
        // array yield.
        function * process(){ 
            let newArray = [yield, yield, yield];
            return (newArray); 
        }
        let it = process(); 
        it.next(); 
        it.next(2); 
        it.next(4); 
        let rst = it.next(42);
        console.log(\`it.next(4) : \${JSON.stringify(rst)}\`);
        </code></pre>
        </section>
        <aside class="text-info bg-light mb-3">
            <cite title="Results">Result - </cite>&#9632; it.next(4): ${JSON.stringify(rst)} &#9632;
        </aside>`;
        $(this.examplesCtl).append(newLocal);    
    },
    yieldPrecedence = function yieldPrecedence(){
        // yield precedence.
        let value;
        function * process() { 
            value = 4 * (yield 42); 
            return value; 
        }
        let it = process(); 
        it.next(); 
        let rst = it.next(10);
        console.log(`it.next(10) : ${JSON.stringify(rst)}`);
        const newLocal = `<section><h4> Example 6 yield has lowest precedence</h4> 
        <pre><code class="language-javascript">   
        // yield precedence.
        let value;
        function * process() { 
            value = 4 * (yield 42); 
            return value; 
        }
        let it = process(); 
        it.next(); 
        let rst = it.next(10);
        console.log(\`it.next(10) : \${JSON.stringify(rst)}\`);
        </code></pre>
        </section>
        <aside class="text-info bg-light mb-3">
            <cite title="Results">Result - </cite>&#9632; it.next(10): ${JSON.stringify(rst)} &#9632;
        </aside>`;
        $(this.examplesCtl).append(newLocal);    
    },
    yieldWithArrays = function yieldWithArrays(){
        // yield with arrays
        function * process10() { 
            yield 42; 
            yield [1,2,3]; 
        }
        let it10 = process10(); 
        let rst10a = it10.next();
        let rst10b = it10.next();
        let rst10c = it10.next();
        console.log(`rst10a: ${JSON.stringify(rst10a)}`); 
        console.log(`rst10b: ${JSON.stringify(rst10b)}`); 
        console.log(`rst10c: ${JSON.stringify(rst10c)}`);
        const newLocal = `<section><h4> Example 7 yield with arrays</h4> 
        <pre><code class="language-javascript">   
        // yield with arrays
        function * process10() { 
            yield 42; 
            yield [1,2,3]; 
        }
        let it10 = process10(); 
        let rst10a = it10.next();
        let rst10b = it10.next();
        let rst10c = it10.next();
        console.log(\`rst10a: \${JSON.stringify(rst10a)}\`); 
        console.log(\`rst10b: \${JSON.stringify(rst10b)}\`); 
        console.log(\`rst10c: \${JSON.stringify(rst10c)}\`);
        </code></pre>
        </section>
        <aside class="text-info bg-light mb-3">
            <cite title="Results">Result - </cite>&#9632; rst10a: ${JSON.stringify(rst10a)} &#9632;
            <br>&#9632; rst10b: ${JSON.stringify(rst10b)} &#9632;
            <br>&#9632; rst10c: ${JSON.stringify(rst10c)} &#9632;
        </aside>`;
        $(this.examplesCtl).append(newLocal);    

    },
    yieldDelegation = function yiedDelegation(){
         // yield delegation
         function * process11() { 
            yield 42; 
            yield * [1,2,3]; 
        }
        let it11 = process11();
        let rst11a, rst11b, rst11c, rst11d, rst11e;
        rst11a = it11.next();
        rst11b = it11.next();
        rst11c = it11.next();
        rst11d = it11.next();
        rst11e = it11.next();
        console.log(`rst11a: ${JSON.stringify(rst11a)}`); 
        console.log(`rst11b: ${JSON.stringify(rst11b)}`); 
        console.log(`rst11c: ${JSON.stringify(rst11c)}`); 
        console.log(`rst11d: ${JSON.stringify(rst11d)}`); 
        console.log(`rst11e: ${JSON.stringify(rst11e)}`);   
        const newLocal = `<section><h4> Example 8 yield delegation</h4> 
        <pre><code class="language-javascript">   
        // yield precedence.
        // yield delegation
         function * process11() { 
            yield 42; 
            yield * [1,2,3]; 
        }
        let it11 = process11();
        let rst11a, rst11b, rst11c, rst11d, rst11e;
        rst11a = it11.next();
        rst11b = it11.next();
        rst11c = it11.next();
        rst11d = it11.next();
        rst11e = it11.next();
        console.log(\`rst11a: \${JSON.stringify(rst11a)}\`); 
        console.log(\`rst11b: \${JSON.stringify(rst11b)}\`); 
        console.log(\`rst11c: \${JSON.stringify(rst11c)}\`); 
        console.log(\`rst11d: \${JSON.stringify(rst11d)}\`); 
        console.log(\`rst11e: \${JSON.stringify(rst11e)}\`);   
        </code></pre>
        </section>
        <aside class="text-info bg-light mb-3">
            <cite title="Results">Result - </cite>&#9632; rst11a: ${JSON.stringify(rst11a)} &#9632;
            <br>&#9632; rst10b: ${JSON.stringify(rst11b)} &#9632;
            <br>&#9632; rst10c: ${JSON.stringify(rst11c)} &#9632;
            <br>&#9632; rst10b: ${JSON.stringify(rst11d)} &#9632;
            <br>&#9632; rst10c: ${JSON.stringify(rst11e)} &#9632;
        </aside>`;
        $(this.examplesCtl).append(newLocal);    

    }
    ;
    return{
        yieldValuePassedIn,
        yieldNumber,
        yieldArray,
        yieldPrecedence,
        yieldWithArrays,
        yieldDelegation
    }   
}();

let GeneratorYieldExamples = ns1.GeneratorYieldExamples;
export {GeneratorYieldExamples as default};