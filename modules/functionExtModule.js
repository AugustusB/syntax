var ns1 = window.Gus.ES6 || {}

ns1.FunctionExtensions = function FunctionExtensions(control){
    this.examplesCtl = control;
}

ns1.FunctionExtensions.prototype = function(){
    var functionName = function functionName(){
        let fn = function calc(){
            return 0;
        }
        console.log(`fn.name: ${fn.name}`);

        let fn1 = () => 0;
        console.log(`fn1.name: ${fn1.name}`);

        let newFn = fn1;
        console.log(`newFn.name: ${newFn.name}`);

        const newLocal = `<section><h2>Function extensions </h2><h4> Example 1 Function.Name</h4>  
        <pre><code class="language-javascript">
        let fn = function calc{
            return 0;
        }
        console.log(\`fn.name: \${fn.name}\`);

        let fn1 = () => 0;
        console.log(\`fn1.name: \${fn1.name}\`);

        let newFn = fn1;
        console.log(\`newFn.name: \${newFn.name}\`);
        </code></pre>   
        </section>
        <aside class="text-info bg-light mb-3">
            <cite title="Results">Result - </cite>&#9632; fn.name: ${fn.name} &#9632;
            <br>&#9632; fn1.name: ${fn1.name} &#9632;
            <br>&#9632; newFn.name: ${newFn.name} &#9632;
        </aside>`;
        $(this.examplesCtl).append(newLocal);
    },
    functionClass = function functionClass(){
        class Calculator{
            constructor(){}
            add(){}
        }
        let c = new Calculator();
        console.log(`Calculator.name: ${Calculator.name}`);
        console.log(`c.name: ${c.name}`);
        console.log(`c.add.name: ${c.add.name}`);
        const newLocal = `<section><h4> Example 2 Class.Name</h4>  
        <pre><code class="language-javascript">
        class Calculator{
            constructor(){}
            add(){}
        }
        let c = new Calculator();
        console.log(\`Calculator.name: \${Calculator.name}\`);
        console.log(\`c.name: \${c.name}\`);
        console.log(\`c.add.name: \${c.add.name}\`);
        </code></pre>   
        </section>
        <aside class="text-info bg-light mb-3">
            <cite title="Results">Result - </cite>&#9632; Calculator.name: ${Calculator.name} &#9632;
            <br>&#9632; c.name: ${c.name} &#9632;
            <br>&#9632; c.add.name: ${c.add.name} &#9632;
        </aside>`;
        $(this.examplesCtl).append(newLocal);
    }
    ;
    return {
        functionName,
        functionClass
    }
}();
let FunctionExtensions = ns1.FunctionExtensions;
export {FunctionExtensions as default}