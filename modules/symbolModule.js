(function(ns1){
    'use strict'
    ns1.ES6ObjSymbolModule = function ES6ObjSymbolModule(examples){
        this.examplesCtl = examples;
    }
    ns1.ES6ObjSymbolModule.prototype = function(){
        var symbolSyntax = function symbolSyntax(){
            let eventSymbol = Symbol('resize event');
            console.log(`typeof eventSymbol: ${typeof eventSymbol}`);
            console.log(`eventSymbol.toString(); ${eventSymbol.toString()}`);
        
            const CALCULATE_EVENT_SYMBOL=Symbol('calculate event');
            console.log(`CALCULATE_EVENT_SYMBOL.toString(): ${CALCULATE_EVENT_SYMBOL.toString()}`);
        
            let s = Symbol.for('event');
            console.log(`s.toString(): ${s.toString()}`);
        
            let s2 = Symbol('event');
            console.log(`s === s2: ${s === s2}`);
        
            let s3 = Symbol.for('event');
            console.log(`s === s3: ${s === s3}`);
        
            let description = Symbol.keyFor(s3);
            console.log(`description: ${description}`);
        
            let article={
                title:'WhitefaceMountain',
                [Symbol.for('article')]:'MyArticle'
            };
            let value = article[Symbol.for('article')];
            console.log(`value: ${value}`);
        
            console.log(Object.getOwnPropertySymbols(article)); 
            const newLocal = `<section> <h2> Symbol syntax </h2><h4> Example 1 Basic use of symbol</h4> 
            <pre><code class="language-javascript">   
            let eventSymbol = Symbol('resize event');
            console.log(\`typeof eventSymbol: \${typeof eventSymbol}\`);
            console.log(\`eventSymbol.toString(); \${eventSymbol.toString()}\`);
            
            // Constants
            const CALCULATE_EVENT_SYMBOL=Symbol('calculate event');
            console.log(\`CALCULATE_EVENT_SYMBOL.toString(): \${CALCULATE_EVENT_SYMBOL.toString()}\`);
        
            // Using symbol registry - will create or return existing symbol without creating unique symobol for same key string.
            let s = Symbol.for('event');
            console.log(\`s.toString(): \${s.toString()}\`);
        
            // Always creates unique value.
            let s2 = Symbol('event');
            console.log(\`s === s2: \${s === s2}\`);
        
            // Get symbol from registry to stop duplicate keys.
            let s3 = Symbol.for('event');
            console.log(\`s === s3: \${s === s3}\`);
        
            // Get key
            let description = Symbol.keyFor(s3);
            console.log(\`description: \${description}\`);
        
            // symbols for objects literals
            let article={
                title:'WhitefaceMountain',
                [Symbol.for('article')]:'MyArticle'
            };
            let value = article[Symbol.for('article')];
            console.log(\`value: \${value}\`);
        
            // Can get property names but cannot use Object.getOwnPropertyNames()
            console.log(Object.getOwnPropertySymbols(article)); 
            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632;typeof eventSymbol : ${typeof eventSymbol} &#9632;
                <br>&#9632;eventSymbol.toString() : ${eventSymbol.toString()}&#9632;
                <br>&#9632;CALCULATE_EVENT_SYMBOL.toString() : ${CALCULATE_EVENT_SYMBOL.toString()} &#9632;
                <br>&#9632;s.toString() : ${s.toString()} &#9632;
                <br>&#9632;s === s2 : ${s === s2} &#9632;
                <br>&#9632;s === s3 : ${s === s3} &#9632;
                <br>&#9632;Symbol.keyFor(s3) : ${ Symbol.keyFor(s3)} &#9632;
                <br>&#9632;value : ${value} &#9632;
                <br>&#9632;Object.getOwnPropertySymbols(article) :  ${Object.getOwnPropertySymbols(article)[0].toString()}&#9632;; 
            </aside>`;
            $(this.examplesCtl).append(newLocal);
        },
        symbolSyntax1 = function symbolSyntax1(){
            let Blog = function(){};
            let blog = new Blog();
            console.log(`blog.toString(): ${blog.toString()}`);
        
            let Blog1 = function(){};
            Blog1.prototype[Symbol.toStringTag] = '`Blog1Class`';
            let blog1 = new Blog1();
            console.log(`blog1.toString(): ${blog1.toString()}`);

            const newLocal = `<section><h4> Example 2 metaprogramming override toString()</h4> 
            <pre><code class="language-javascript">
            let Blog = function(){};
            let blog = new Blog();
            console.log(\`blog.toString(): \${blog.toString()}\`);
        
            let Blog1 = function(){};
            Blog1.prototype[Symbol.toStringTag] = 'Blog1Class';
            let blog1 = new Blog1();
            console.log(\`blog1.toString(): \${blog1.toString()}\`);
            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; blog.toString() :  ${blog.toString()}&#9632;
                <br>&#9632; blog1.toString() : ${blog1.toString()}&#9632;
            </aside>`;   
            $(this.examplesCtl).append(newLocal);
        },
        symbolSyntax2 = function symbolSyntax2(){
            let values=[8,12,16];
            console.log(`[].concat(values): ${JSON.stringify([].concat(values))}`);
        
            let values1=[8,12,16];
            values1[Symbol.isConcatSpreadable] = false;
            console.log(`[].concat(values1): ${JSON.stringify([].concat(values1))}`);

            const newLocal = `<section><h4> Example 2 metaprogramming using symbols in array</h4> 
            <pre><code class="language-javascript">
            let values=[8,12,16];
            console.log(\`[].concat(values): \${[].concat(values)}\`);
        
            let values1=[8,12,16];
            values1[Symbol.isConcatSpreadable] = false;
            console.log(\`[].concat(values1): \${[].concat(values1)}\`);;
            </code></pre>  
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; [].concat(values):  ${JSON.stringify([].concat(values))}&#9632;
                <br>&#9632; [].concat(values1): ${JSON.stringify([].concat(values1))}&#9632;
            </aside>`;    ;
            $(this.examplesCtl).append(newLocal);
        };
        return {
            symbolSyntax,
            symbolSyntax1,
            symbolSyntax2
        }
    }();
})(window.Gus.ES6 = window.Gus.ES6 || {});

let ES6ObjSymbolModule = Gus.ES6.ES6ObjSymbolModule;
export {ES6ObjSymbolModule as default};