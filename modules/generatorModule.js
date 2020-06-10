var ns1 =  window.Gus.ES6 || {};

ns1.GeneratorExamples = function GeneratorExamples(control){
    this.examplesCtl = control;
}

ns1.GeneratorExamples.prototype = function(){
    var simpleUse = function simpleUse(){
        // Using a generator example 1
        function *process() { yield 8000; yield 8001; } 
        let it = process(); 
        var result = it.next();
        console.log(`result: ${result}`);

        // Using a generator example 2 - get second yielded value
        var result1 = it.next();
        console.log(`result1: ${JSON.stringify(result1)}`);

        // Using a generator example 3 - reaching the end generator shut down
        var result2 = it.next();
        console.log(`result2: ${JSON.stringify(result2)}`);
        const newLocal = `<section> <h2> Generators </h2><h4> Example 1 Fisrt, second and generator shutdown</h4> 
        <pre><code class="language-javascript">   
        function *process() { yield 8000; yield 8001; } 
        let it = process(); 

        // first yielded valueng
        var result = it.next();
        console.log(\`result: \${JSON.stringify(result)}\`);

        // second yielded value
        var result1 = it.next();
        console.log(\`result1: \${JSON.stringify(result1)}\`);

        // reaching the end generator shut down
        var result2 = it.next();
        console.log(\`result2: \${JSON.stringify(result2)}\`);

        </code></pre>
        </section>
        <aside class="text-info bg-light mb-3">
            <cite title="Results">Result - </cite>&#9632; result: ${JSON.stringify(result)} &#9632;
            <br>&#9632; result1: ${JSON.stringify(result1)} &#9632;
            <br>&#9632; result2: ${JSON.stringify(result2)} &#9632;
        </aside>`;
        $(this.examplesCtl).append(newLocal);   
        
    },
    indefiniteGenerator = function indefiniteGenerator(){
        // Using a generator - indefenite iterator
        function *process1() { 
            let nextId = 7000; 
            while(true) 
                yield(nextId++); 
            
        } 
        let it1 = process1(); 
        it1.next();
        let result = it1.next().value;
        console.log(`result: ${result}`);

        // Using for of loop on generators
        let result1 = ``;
        for(let id of process1()){
            if(id > 7002) break;
            result1 += `${JSON.stringify(id, null, 2)}<br>`;
        };
        console.log(`result1 ${result1}`);

        const newLocal = `<section><h4> Example 2 indefenite iterator and for...of loop</h4> 
        <pre><code class="language-javascript">   
        // generator with indefenite iterator
        function *process1() { 
            let nextId = 7000; 
            while(true) 
                yield(nextId++); 
            
        } 
        let it1 = process1(); 
        it1.next();
        let result = it1.next().value;
        console.log(\`result: \${result}\`);

        // Using for of loop on generators
        let result1 = \`\`;
        for(let id of process1()){
            if(id > 7002) break;
            result1 += \`\${JSON.stringify(id, null, 2)}\`;
        };
        console.log(\`result1: \${result1}\`);

        </code></pre>
        </section>
        <aside class="text-info bg-light mb-3">
            <cite title="Results">Result - </cite>&#9632; result: ${result} &#9632;
            <br>&#9632; result1: ${result1} &#9632;
        </aside>`;
        $(this.examplesCtl).append(newLocal);   
    } 
    ;
    return {
        simpleUse,
        indefiniteGenerator
    }
}();
let GeneratorExamples = ns1.GeneratorExamples;
export {GeneratorExamples as default};