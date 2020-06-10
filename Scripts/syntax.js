(function(ns1, ns2){
    'use strict'
    ns2.ES6Obj = function ES6Obj(){
        this.codeRunning = "in ES6Obj";
        // Private methods //testing changes 
        const DEFAULT = 'body #codeExamples';
        var mySyntaxSample = () => {
            let findElem = 'body';

            // Example 1 - Is not hoisted.
            let err1 = undefined;
            try {
                console.log(productId1);
                let productId1 = 12;
            } catch (error) {
                err1 = error;
            }
            console.log(`let is not hoisted err1.message: ${err1.message}`)
            const newLocal1 = `<section><h2 class="h2">LET</h2><h4 class="h4">Example 1 - Is not hoisted.</h4>  
            <pre>
            <code class="language-javascript">
            let err1 = undefined;
            try {
                console.log(productId2);
                let productId1 = 12;
            } catch (error) {
                err1 = error;
            }
            console.log(\`let is not hoisted err1.message: \${err1.message}\`)
            </code>
            </pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; let is not hoisted err1.message: ${err1.message} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal1); 

            // Exampe 2 - Can be block scoped.
            let productId2 = 12;
            {
                let productId2 = 2000;
            }
            console.log(`let is block scoded  : ${productId2}`);
            const newLocal2 = `<section><h4 class="h4">Example 2 - Can be block scoped.</h4>  
            <pre>
            <code class="language-javascript">
            let productId2 = 12
            {
                let productId2 = 2000;
            }
            console
            </code>
            </pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; let is block scoded : ${productId2} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal2); 

            // Example 3 - let is scoped to the block and cannot be referenced outside
            let err3 = undefined;
            try {
                {
                    let productId3 = 12
                }
                console.log(productId3)
            } catch (error) {
                err3 = error;
                console.log(err3.message);
            }
            const newLocal3 = `<section><h4 class="h4">Example 3 - let is scoped to the block and cannot be referenced outside</h4>  
            <pre>
            <code class="language-javascript">
            let err3 = undefined;
            try {
                {
                    let productId3 = 12
                }
                console.log(productId3)
            } catch (error) {
                err3 = error;
                console.log(err3.message);
            }
            </code>
            </pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; let variables cannot be referenced outside scope err3.message : ${err3.message} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal3); 

            // Examdple 4 - productId4 is in The Temporal Dead zone in function
            function updateProductId (){
                productId4 = 12
            };5
            let productId4 = null;
            updateProductId();
            console.log(`The Temporal Dead Zone in function, productId4 : ${productId4}`);

            const newLocal4 = `<section><h4 class="h4">Example 4 - productId4 is in The Temporal Dead zone in function</h4>  
            <pre>
            <code class="language-javascript">
            function updateProductId (){
                productId4 = 12
            };
            let productId4 = null;
            updateProductId();
            console.log(productId4)
            </code>
            </pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; The Temporal Dead Zone in function, productId4 : ${productId4} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal4); 

            // Example 5 - Closure sample issue with for statement 
            var updateProd5 = [];
            for (var index = 0; index < 2; index++) {
                updateProd5.push(function () {return index;});
            }
            console.log(`closure issue with for statement, updateProd5[0](): ${updateProd5[0]()},  updateProd5[1](): ${updateProd5[1]()}`)
            const newLocal5 = `<section><h4 class="h4">Example 5 - Closure sample issue with for statement </h4>  
            <pre>
            <code class="language-javascript">
            var updateProd5 = [];
            for (var index = 0; index < 2; index++) {
                updateProd5.push(function () {return index;});
            }
            </code>
            </pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; closure issue with for statement  updateProd5[0](): ${updateProd5[0]()},  updateProd5[1](): ${updateProd5[1]()}&#9632
            </aside>`;
            $(DEFAULT).append(newLocal5); 

            // working with const
            const MARK_PCT = 100;
            console.log(`Result - const MARK_PCT : ${MARK_PCT}`)

            const newLocal1Constant = `<section><h2 class="h2">Constant</h2><h4 class="h4">Example 1 - Declaration.</h4>  
            <pre>
            <code class="language-javascript">
            const MARK_PCT = 100;
            </code>
            </pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; const MARK_PCT : ${MARK_PCT} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal1Constant); 


            if(MARK_PCT > 0){
                const MARK_PCT = 10;
            }
            console.log(`Result - const has block scope MARK_PCT : ${MARK_PCT}`);

            const newLocal2Constant = `<section><h4 class="h4">Example 2 - const has block scope.</h4>  
            <pre>
            <code class="language-javascript">
            const MARK_PCT = 100;
            if(MARK_PCT > 0){
                const MARK_PCT = 10;
            }
            console.log(\`Result - const has block scope MARK_PCT : \${MARK_PCT}\`);
            </code>
            </pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; const has block scope MARK_PCT : ${MARK_PCT} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal2Constant); 
 
            document.addEventListener('click', function() {
                console.log(`ES5 this in events :  ${this}` );
            });

            document.addEventListener('click',() =>{
                console.log(`ES6 this in events with arrow functions : ${this}`);
            } );
            const newLocal1Arrow = `<section><h2 class="h2">Arrow functions</h2><h4 class="h4">Example 1 - events attached with arrow function notation.</h4>  
            <pre>
            <code class="language-javascript">
            // Arrow functions 
            document.addEventListener('click', function() {
                console.log(\`ES5 this in events :  \${this}\` );
            });

            document.addEventListener('click',() =>{
                console.log(\`ES6 this in events with arrow functions : \${this}\`);
            } );
            </code>
            </pre>
            </section>
            <aside class="text-info bg-light mb-3">
                    <cite title="Results">Result - </cite>&#9632; arrow function <br>console.log : ES5 this in events : [object HTMLDocument]
                    <br>console.log : ES6 this in events with arrow functions : [object Object]
                    &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal1Arrow); 

            var arrowfunc1 = (count, tax) => count *2 * ( 1+ tax);
            console.log(`arrowfunc1(10, .01) : ${arrowfunc1(10, .01)}`);

            const newLocal2Arrow = `<section><h4 class="h4">Example 2 - Arrow function.</h4>  
            <pre>
            <code class="language-javascript">
            var arrowfunc1 = (count, tax) => count *2 * ( 1+ tax);
            console.log(\`arrowfunc1(10, .01) : \${arrowfunc1(10, .01)}\`);
            </code>
            </pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; arrowfunc1(10, .01) : ${arrowfunc1(10, .01)} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal2Arrow); 

            var invoice1 = {
                number : 123,
                process : function () {
                    return this;
                }
            };
            console.log(`this is invoice1: ${JSON.stringify(invoice1.process())}`);

            const newLocal3Arrow = `<section><h4 class="h4">Example3 - None arrow function and this is invoice1.</h4>  
            <pre>
            <code class="language-javascript">
            var invoice1 = {
                number : 123,
                process : function () {
                    return this;
                }
            };
            console.log(\`this is invoice1: \${JSON.stringify(invoice1.process())}\`);
            </code>
            </pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; this : ${JSON.stringify(invoice1.process())} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal3Arrow);

            var invoice2 = {
                number : 123,
                process : () => {
                    return this;
                }
            };
            console.log(`this is set to the context of the code we are running: ${JSON.stringify(invoice2.process())}`);
            const newLocal4Arrow = `<section><h4 class="h4">Example4 - Arrow function and this is set to the context of the code we are running.</h4>  
            <pre>
            <code class="language-javascript">
            var invoice2 = {
                number : 123,
                process : () => {
                    return this;
                }
            };
            console.log(\`this is Window: \${JSON.stringify(invoice2.process())}\`);
            </code>
            </pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; this is set to the context of the code we are running: ${JSON.stringify(invoice2.process())} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal4Arrow);

            var invoice3 = {
                number : 123,
                process : function () {
                    return () => this;
                }
            }
            console.log(`this is: ${JSON.stringify(invoice3.process()())}`);
            const newLocal5Arrow = `<section><h4 class="h4">Example5 - Arrow function and this.</h4>  
            <pre>
            <code class="language-javascript">
            var invoice3 = {
                number : 123,
                process : function () {
                    return () => this;
                }
            };
            console.log(\`this is: \${JSON.stringify(invoice3.process()())}\`);
            </code>
            </pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; this is: ${JSON.stringify(invoice3.process()())} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal5Arrow);

            var invoice4 = {
                number : 123,
                process : function () {
                    return () => this;
                }
            }
            var invoice5 = {
                number : 456                
            };

            invoice4.process().bind(invoice5)();
            console.log(`this is: ${JSON.stringify(invoice4.process().bind(invoice5)())}`);
            const newLocal6Arrow = `<section><h4 class="h4">Example6 - Arrow function does not support bind.</h4>  
            <pre>
            <code class="language-javascript">
            var invoice4 = {
                number : 123,
                process : function () {
                    return () => this;
                }
            };
            var invoice5 = {
                number : 456                
            };

            invoice4.process().bind(invoice5);
            console.log(\`this is: \${JSON.stringify(invoice4.process().bind(invoice5)())}\`);
            </code>
            </pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; this is: ${JSON.stringify(invoice4.process().bind(invoice5)())} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal6Arrow);

            
            var invoice6 = {
                number : 123,
                process : function () {
                    return () => this;
                }
            }
            var invoice7 = {
                number : 456                
            };

            invoice6.process().call(invoice7);
            console.log(`this is: ${JSON.stringify(invoice6.process().call(invoice7))}`);
            const newLocal7Arrow = `<section><h4 class="h4">Example7 - Arrow function does not support call or apply.</h4>  
            <pre>
            <code class="language-javascript">
            var invoice6 = {
                number : 123,
                process : function () {
                    return () => this;
                }
            };
            var invoice7 = {
                number : 456                
            };

            invoice4.process().call(invoice5);
            console.log(\`this is: \${JSON.stringify(invoice6.process().call(invoice7)}\`);
            </code>
            </pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; this is: ${JSON.stringify(invoice6.process().call(invoice7))} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal7Arrow);
            
            var getInvoice = () => 123;
            var getInvoice1 = {
                number: 123,
                getNumberI: () => this.number
            };
            
            console.log(`getInvoice.hasOwnProperty(\'prototype\'): ${getInvoice.hasOwnProperty('prototype')}`);
            console.log(`getInvoice1.hasOwnProperty(\'number\'): ${getInvoice1.hasOwnProperty('number')}`);
            console.log(`getInvoice1.hasOwnProperty('getNumber'): ${getInvoice1.hasOwnProperty('getNumber')}`);

            const newLocal8Arrow = `<section><h4 class="h4">Example8 - Arrow function does not have access to prototype.</h4>  
            <pre>
            <code class="language-javascript">
            var getInvoice = () => 123;
            var getInvoice1 = {
                number: 123,
                getNumberI: () => this.number
            };
            console.log(\`getInvoice.hasOwnProperty('prototype'): \${getInvoice.hasOwnProperty('prototype')}\`);
            console.log(\`getInvoice1.hasOwnProperty('number'): \${getInvoice1.hasOwnProperty('number')}\`);
            console.log(\`getInvoice1.hasOwnProperty('getNumber'): \${getInvoice1.hasOwnProperty('getNumber')}\`);
            </code>
            </pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; getInvoice.hasOwnProperty('prototype'): ${getInvoice.hasOwnProperty('prototype')} &#9632;
                    <br>&#9632; getInvoice1.hasOwnProperty('number'): ${getInvoice1.hasOwnProperty('number')} &#9632;
                    <br>&#9632; getInvoice1.hasOwnProperty('getNumber'): ${getInvoice1.hasOwnProperty('getNumber')} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal8Arrow);
            
        },

        defaultsFunctionParam1 = () => {
            var getProduct = (productId = 10001) => productId;
            console.log(`getProduct(): ${getProduct()}`);
            const newLocal = `<section><h2 class="h2">Default Function Parameters</h2><h4 class="h4">Example 1 - No arguments passed to function </h4>  
            <pre><code class="language-javascript">

            var getProduct = (productId = 10001) => productId;
            console.log(\`getProduct(): \${getProduct()}\`);
            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; getProduct(): ${getProduct()} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal);
        },
        
        defaultsFunctionParam2 = () =>{
            var getPoduct = (productId = 10001, type = 'software') => `${productId}, ${type}`;
            console.log(`getPoduct(undefined, 'hardware'): ${getPoduct(undefined, 'hardware')}`)

            const newLocal = `<section><h4 class="h4">Example 2 - Arguments undefined passed to function </h4>  
            <pre><code class="language-javascript">

            var getPoduct = (productId = 10001, type = 'software') => \`\${productId}, \${type}\`;
            console.log(\`getPoduct(undefined, 'hardware'): \${getPoduct(undefined, 'hardware')}\`)

            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; getPoduct(undefined, 'hardware'): ${getPoduct(undefined, 'hardware')} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal);
        },
        
        defaultsFunctionParam3 = () =>{
            var getTotal = (price , tax = price * 0.07) => price + tax;
            console.log(`getTotal(5.00): ${getTotal(5.00)}`)

            const newLocal = `<section><h4 class="h4">Example 3 - Arguments passed to function used in default</h4>  
            <pre><code class="language-javascript">

            var getTotal = (price , tax = price * 0.07) => price + tax;
            console.log(\`getTotal(5.00): \${getTotal(5.00)}\`)

            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; getTotal(5.00): ${getTotal(5.00)} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal);
        },
        
        defaultsFunctionParam4 = () =>{
            var getPoduct = (productId = 10001, type = 'software') => `${productId}, ${type}`;
            console.log(`getPoduct(undefined, 'hardware'): ${getPoduct(undefined, 'hardware')}`)

            const newLocal = `<section><h4 class="h4">Example 4 - Arguments undefined passed to function </h4>  
            <pre><code class="language-javascript">

            var getPoduct = (productId = 10001, type = 'software') => \`\${productId}, \${type}\`;
            console.log(\`getPoduct(undefined, 'hardware'): \${getPoduct(undefined, 'hardware')}\`)

            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; getPoduct(undefined, 'hardware'): ${getPoduct(undefined, 'hardware')} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal);
        },

        defaultsFunctionParam5 = () =>{
            var baseRate = 0.07;
            var getTotal = (price , tax = price * baseRate) => price + tax;
            console.log(`getTotal(5.00): ${getTotal(5.00)}`)

            const newLocal = `<section><h4 class="h4">Example 5 - Arguments passed to function with outside variables</h4>  
            <pre><code class="language-javascript">

            var baseRate = 0.07;
            var getTotal = (price , tax = price * baseRate) => price + tax;
            console.log(\`getTotal(5.00): \${getTotal(5.00)}\`)

            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; getTotal(5.00): ${getTotal(5.00)} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal);
        },

        defaultsFunctionParam6 = () =>{
            var getBaseRate = () => 0.07;
            var getTotal = (price , tax = price * getBaseRate()) => price + tax;
            console.log(`getTotal(5.00): ${getTotal(5.00)}`)

            const newLocal = `<section><h4 class="h4">Example 6 - Arguments passed to function with outside functions</h4>  
            <pre><code class="language-javascript">

            var getBaseRate = () => 0.07;
            var getTotal = (price , tax = price * getBaseRate()) => price + tax;
            console.log(\`getTotal(5.00): \${getTotal(5.00)}\`)

            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; getTotal(5.00): ${getTotal(5.00)} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal);
        },

        defaultsFunctionParam7 = () =>{
            try {
                var getTotal = (price = adjustment, adjustment = 1.00) => price + adjustment;
                console.log(`getTotal(): ${getTotal()}`);

            } catch (error) {
                const newLocal = `<section><h4 class="h4">Example 7 - Variable not declared before use in function parameter</h4>  
                <pre><code class="language-javascript">
    
                var getTotal = (price = adjustment, adjustment = 1.00) => price + adjustment;
                console.log(\`getTotal(): \${getTotal()}\`)
    
                </code></pre>
                </section>
                <aside class="text-info bg-light mb-3">
                    <cite title="Results">Result - </cite>&#9632; getTotal(): ${error.message} &#9632;
                </aside>`;
                $(DEFAULT).append(newLocal);    
            }
            
        },

        defaultsFunctionParam8 = () =>{
            var getTotal = new Function('price = 20.00', 'return price');
            console.log(`getTotal(): ${getTotal()}`);

            const newLocal = `<section><h4 class="h4">Example 8 - Default parameters work in dynamic functions</h4>  
            <pre><code class="language-javascript">

            var getTotal = new Function('price = 20.00', 'return price');
            console.log(\`getTotal(): \${getTotal()}\`)

            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; getTotal(): ${getTotal()} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal);    
        },

        rest1 = () => {
            var showCategories = (productId, ...categories) => categories
            var showCategoriesArray = showCategories(123, 'search', 'advertising');
            console.log(`showCategoriesArray instanceof Array: ${showCategoriesArray instanceof Array}`);
            console.log(`showCategoriesArray : ${JSON.stringify(showCategoriesArray)}`);

            const newLocal = `<section><h2 class="h2">Rest</h2><h4 class="h4">Example 1 - Rest gathers up rest of the argument into an array </h4>   
            <pre><code class="language-javascript">

            var showCategories = (productId, ...categories) => categories
            var showCategoriesArray = showCategories(123, 'search', 'advertising');
            
            console.log(showCategoriesArray instanceof Array: \${showCategoriesArray instanceof Array});
            console.log(showCategoriesArray : \${JSON.stringify(showCategoriesArray)});

            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; showCategoriesArray instanceof Array: ${showCategoriesArray instanceof Array} &#9632;
                <br>&#9632; console.log(showCategoriesArray : ${JSON.stringify(showCategoriesArray)});&#9632;
            </aside>`;
            $(DEFAULT).append(newLocal); 
        
        },
        rest2 = () => {
            var showCategories = (productId, ...categories) => categories
            var showCategoriesEmptyArray = showCategories(123);
            console.log(`showCategoriesEmptyArray instanceof Array: ${showCategoriesEmptyArray instanceof Array}`);
            console.log(`showCategoriesEmptyArray : ${JSON.stringify(showCategoriesEmptyArray)}`);

            const newLocal = `<section><h4 class="h4">Example 2 - Rest gathers up rest of the argument into an empty array </h4>   
            <pre><code class="language-javascript">

            var showCategories = (productId, ...categories) => categories
            var showCategoriesEmptyArray = showCategories(123);
            
            console.log(showCategoriesEmptyArray instanceof Array: \${showCategoriesEmptyArray instanceof Array});
            console.log(showCategoriesEmptyArray : \${JSON.stringify(showCategoriesEmptyArray)});

            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; showCategoriesEmptyArray instanceof Array: ${showCategoriesEmptyArray instanceof Array} &#9632;
                <br>&#9632; console.log(showCategoriesEmptyArray : ${JSON.stringify(showCategoriesEmptyArray)});&#9632;
            </aside>`;
            $(DEFAULT).append(newLocal); 
        
        },
        rest3 = () => {
            var showCategories = function (productId, ...categories) { return arguments.length;}
            var argumentLength = showCategories(123, 'search', 'advertising');
            console.log(`argumentLength : ${argumentLength}`);

            const newLocal = `<section><h4 class="h4">Example 3 - Rest and argument length (Note: arrow functions do not have arguements object) </h4>   
            <pre><code class="language-javascript">

            var showCategories = function (productId, ...categories) { return arguments.length;}
            var argumentLength = showCategories(123, 'search', 'advertising');
            
            console.log(argumentLength : \${argumentLength});

            </code></pre>
            </section>
                <aside class="text-info bg-light mb-3">
                    <cite title="Results">Result - </cite>&#9632; argumentLength: ${argumentLength} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal); 
        },

        rest4 = () => {
            var showCategories = new Function('productId', '...categories',  'return categories;');
            var categories = showCategories(123, 'search', 'advertising');
            console.log(`categories : ${JSON.stringify(categories)}`);

            const newLocal = `<section><h4 class="h4">Example 4 - Rest with dynamic functions</h4>   
            <pre><code class="language-javascript">

            var showCategories = new Function('productId', '...categories',  'return categories;');
            var argumentLength = showCategories(123, 'search', 'advertising');
            
            console.log(categories : \${JSON.stringify(categories)});

            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; categories: ${JSON.stringify(categories)} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal); 
        },

        spreadOpperator1 = () => {
            var getMaxPrice = () =>{
                var prices=[12,20,18];
                return Math.max(...prices);
            }
            var maxPrice = getMaxPrice();
            console.log(`getMaxPrice ${maxPrice}`);
            const newLocal = `<section><h2 class="h2">Spread opperator</h2><h4 class="h4">Example 1 - Spread as a parameter to a function </h4>  
            <pre><code class="language-javascript">

            var getMaxPrice = () =>{
                var prices=[12,20,18];
                return Math.max(...prices);
            }
            var maxPrice = getMaxPrice();
            console.log(\`getMaxPrice(): \${maxPrice}\`);
            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; getMaxPrice(): ${maxPrice} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal);
        },
        spreadOpperator2 = () => {
            var copyArray = () =>{
                var prices = [12,20,18];
                return [...prices];
            }
            var arr = copyArray();
            console.log(`copyArray(): ${JSON.stringify(arr)}`);
            const newLocal = `<section><h4 class="h4"> Example 2 - assign spread to a variable to create new array</h4>
            <pre><code class="language-javascript">      
            var copyArray = () =>{
                var prices = [12,20,18];
                return [...prices];
            }
            var arr = copyArray();
            console.log(\`copyArray(): \${SON.stringify(arr)}\`);
            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; copyArray(): ${JSON.stringify(arr)} &#9632;
            </aside>`;;
            $(DEFAULT).append(newLocal);
        },
        spreadOpperator3 = (prices) => {
            var createArray1 = () => Array(...[,,]);
            console.log(`createArray1(): ${JSON.stringify(createArray1())}`);

            var createArray2 = () => [...[,,]];
            console.log(`createArray2(): ${JSON.stringify(createArray2())}`);

            var createArray3 = () => ['A', 'B', ...'MNOP', 'E'];
            console.log(`createArray3(): ${JSON.stringify(createArray3())}`);

            const newLocal = `<section><h4 class="h4"> Example 3 - Using spread operator to create new arrays</h4>
            <pre><code class="language-javascript">      
            var createArray1 = () => Array(...[,,]);
            console.log(\`createArray1(): \${JSON.stringify(createArray1())}\`);

            var createArray2 = () => [...[,,]];
            console.log(\`createArray2(): \${JSON.stringify(createArray2())}\`);

            var createArray3 = () => ['A', 'B', ...'MNOP', 'E'];
            console.log(\`createArray3(): \${JSON.stringify(createArray3())}\`);
            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; createArray1(): ${JSON.stringify(createArray1())} &#9632;
                <br>&#9632; createArray2(): ${JSON.stringify(createArray2())} &#9632;
                <br>&#9632; createArray3(): ${JSON.stringify(createArray3())} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal);
        },
        spreadOpperator4 = () => {
            var getMathMax = () => Math.max(...'78965410')
            console.log(`getMathMax(): ${getMathMax()}`);
            const newLocal = `<section><h4 class="h4"> Example 4 - Spread out a string</h4>
            <pre><code class="language-javascript">      
            var getMathMax = () => Math.max(...'78965410')
            console.log(\`getMathMax(): \${getMathMax()}\`);
            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; getMathMax(): ${getMathMax()} &#9632;
            </aside>`;;
            $(DEFAULT).append(newLocal);
        },

        objectLiteral1 = () => {
            var price=5.99, quantity=30;
            var product = {price, quantity};
            
            console.log(`product: ${JSON.stringify(product)}`)

            const newLocal = `<section><h2> Object Literals Extensions</h2><h4> Example 1 No need to repeat name of property</h4> 
            <pre><code class="language-javascript">   
            var price=5.99, quantity=30;
            var product = {price, quantity};
            
            console.log(\`product: \${JSON.stringify(product)}\`)
            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; product: ${JSON.stringify(product)} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal);
        },

        objectLiteral2 = () =>{
            var price=5.99, quantity=30;
            var productView = 
                {
                    price, 
                    quantity,
                    calculateValue() {
                        return this.price * this.quantity
                    }
                };

            console.log(`productView.calculateValue(): ${productView.calculateValue()}`)

            const newLocal = `<section><h4> Example 2 New notation adding function to object literals</h4> 
            <pre><code class="language-javascript">   
            var price=5.99, quantity=30;
            var productView = 
                {
                    price, 
                    quantity,
                    calculateValue() {
                        return this.price * this.quantity
                    }
                };
            console.log(\`productView.calculateValue(): \${productView.calculateValue()}\`)
            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; productView.calculateValue(): ${productView.calculateValue()} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal);
        }, 

        objectLiteral3 = () =>{
            var method='doIt';
            var productView = {
                    [method+"-001"]() {
                        return "in a method";
                    }
                }
            console.log(`productView['doIt-001'](): ${productView['doIt-001']()}`)

            const newLocal = `<section><h4> Example 3 Dynamic properties in object literals</h4> 
            <pre><code class="language-javascript">   
            var method='doIt';
            var productView = {
                    [method+"-001"]() {
                        return "in a method";
                    }
                }
            console.log(\`productView['doIt-001'](): \${productView['doIt-001']()}\`)
            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; productView['doIt-001']: ${productView['doIt-001']()} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal);
        }, 
        objectLiteral4 = () =>{
            var ident='productId';
            var productView={
                get[ident](){return true;},
                set[ident](value){}
            };
            console.log(`productView.productId: ${productView.productId}`);
            let newLocal = `<section><h4> Example 4 Getters and Setters in object literals</h4> 
            <pre><code class="language-javascript">   
            var ident='productId';
            var productView = {
                get[ident](){return true;},
                set[ident](value){}
            };
            console.log(\`productView.productId: \${productView.productId}\`);
            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; productView.productId: ${productView.productId} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal);
        },
        objectLiteral5 = () =>{
            var price=5.99,quantity=10; 
            var productView =
            {
                price,
                quantity,
                "calculatevalue"(){return this.price*this.quantity} 
            };
            console.log(`productView["calculatevalue"]: ${productView["calculatevalue"]()}`);
            const newLocal = `<section><h4> Example 5 String function name in object literals</h4>
            <pre><code class="language-javascript"> 
            var price=5.99,quantity=10; 
            var productView =
            {
                price,
                quantity,
                "calculatevalue"(){return this.price*this.quantity} 
            };
            console.log(\`productView["calculatevalue"]: \${productView["calculatevalue"]()}\`);
            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; productView["calculatevalue"]: ${productView["calculatevalue"]()} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal);

        },

        forOfLoop = () => {
            var categories = ['hardware', 'software', 'vapoware'];
            var cat = () => {
                var rtn = '';
                for (const iterator of categories) {
                    rtn += `${iterator}, `;
                }
                return rtn.trim().slice(0, -1);
            }         
            console.log(`cat(): ${cat()}`)

            var stringForCount = 'ABCDEFGH'
            var count = 0;
            var getCount = () => {
                for (const iterator of stringForCount) {
                   count++; 
                }
                return count;
            }
            var val = getCount();

            console.log(`getCount(): ${val}`);

            const newLocal = `<section><h2>For of loop</h2><h4> Example 1 all for of loop examples</h4> 
            <pre><code class="language-javascript">   
            var categories = ['hardware', 'software', 'vapoware'];
            var cat = () => {
                var rtn = '';
                for (const iterator of categories) {
                    rtn += \`\${iterator}, \`;
                }
                return rtn.trim().slice(0, -1);
            }         
            console.log(\`cat(): \${cat()}\`)

            var stringForCount = 'ABCDEFGH'
            var count = 0;
            var getCount = () => {
                for (const iterator of stringForCount) {
                   count++; 
                }
                return count;
            }
            var val = getCount();

            console.log(\`getCount(): \${val}\`);

            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; cat(): ${cat()} &#9632;
                <br>&#9632; getCount(): ${val} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal);
        },

        octalsAndBinaries = () => {
            var octalValue = 0o10, binaryValue = 0b10;
            console.log(`octalValue = ${octalValue}`);
            console.log(`binaryValue = ${binaryValue}`);

            const newLocal = `<section><h2>Octals and Binary</h2><h4> Example 1 octals and binaries</h4> 
            <pre><code class="language-javascript">   
            var octalValue = 0o10, binaryValue = 0b10;
            console.log(\`octalValue = \${octalValue}\`);
            console.log(\`binaryValue = \${binaryValue}\`);

            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; octalValue: ${octalValue} &#9632;
                <br>&#9632; binaryValue: ${binaryValue} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal);
        },

        templateLiterals1 = () => {
            let invoiceNumber = 1350;
            console.log(`Invoice Number = ${invoiceNumber}`);

            console.log(`Invoice Number ${'INV-' + invoiceNumber}`);

            let message = `A
            B
            C`;
            console.log(message);

            const newLocal = `<section><h2>Templte Literals</h2><h4> Example 1</h4> 
            <pre><code class="language-javascript">   
            let invoiceNumber = 1350;
            console.log(\`Invoice Number = \${invoiceNumber}\`);

            console.log(\`Invoice Number = \${'INV-' + invoiceNumber}\`);

            let message = \`A
            B
            C\`;
            console.log(message);

            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; Invoice Number = ${invoiceNumber} &#9632;
                <br>&#9632; Invoice Number =  ${'INV-' + invoiceNumber} &#9632;
                <br>&#9632; ${message} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal);
        },
        
        templateLiterals2 = () => {
            var showMessage = (message) => {
                let invoiceNumber = 99;
                return message;
            }
            let invoiceNumber = 1350;
            console.log(`showMessage(): ${showMessage(`Invoice Number: ${invoiceNumber}`)}`);

            const newLocal = `<section><h4> Example 2 interpolation before function call</h4> 
            <pre><code class="language-javascript">   
            var showMessage = (message) => {
                let invoiceNumber = 99;
                return message;
            }
            let invoiceNumber = 1350;
            console.log(\`showMessage(): \${showMessage(\`Invoice Number: \${invoiceNumber}\`)}\`);

            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; showMessage(): ${showMessage(`Invoice Number: ${invoiceNumber}`)} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal);
        },

        templateLiterals3 = () => {
            var processInvoice = (segments) => segments;
            var temp = processInvoice `template`;
            console.log(`temp: ${JSON.stringify(temp)}`);

            const newLocal = `<section><h4> Example 3 Tagged template literal</h4> 
            <pre><code class="language-javascript">   
            var processInvoice = (segments) => segments;
            var temp = processInvoice \`template\`;
            console.log(\`temp: \${JSON.stringify(temp)}\`);

            </code></pre>
            <section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; temp: ${JSON.stringify(temp)} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal);
        },

        templateLiterals4 = () => {
            var processInvoice = (segments, ...values) => ({ segments, values });
            let invoiceNumber = 1350;
            let amount = 20.99;
            var temp = processInvoice `Invoice number: ${invoiceNumber} for ${amount}`;
            console.log(`temp: ${JSON.stringify(temp)}`);

            const newLocal = `<section><h4> Example 4 Tagged template literal more complex</h4> 
            <pre><code class="language-javascript">   
            var processInvoice = (segments, ...values) => ({ segments, values });
            let invoiceNumber = 1350;
            let amount = 20.99;
            var temp = processInvoice \`Invoice number: \${invoiceNumber} for ${amount}\`;
            console.log(\`temp: \${JSON.stringify(temp)}\`);
            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; temp: ${JSON.stringify(temp)} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal);
        },

        destructor1 = () =>{
            let salary = ['32000','50000','75000'];
            let[ low, average, high] = salary;
            console.log(`average : ${average}`); 
            const newLocal = `<section><h2> Destructuring </h2><h4> Example 1 </h4> 
            <pre><code class="language-javascript">   
            let salary = ['32000','50000','75000'];
            let[ low, average, high] = salary;
            console.log(\`average : \${average}\`);
            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; average : ${average} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal);
        },
        destructor2 = () => {
            let salary = ['32000','50000'];
            let [low, average, high] = salary;
            console.log(`high : ${high}`);
            const newLocal = `<section><h4> Example 2 </h4> 
            <pre><code class="language-javascript">   
            let salary = ['32000','50000'];
            let [low,average,high] = salary;
            console.log(\`high : \${high}\`)
            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; high : ${high} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal);
        },
        destructor3 = () => {
            let salary = ['32000','50000','75000'];
            let [low, ,high] = salary;
            console.log(`high : ${high}`); 
            const newLocal = `<section><h4> Example 3 </h4> 
            <pre><code class="language-javascript">   
            let salary = ['32000','50000','75000'];
            let [low,,high] = salary;
            console.log(\`high : \${high}\`);
            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; high : ${high} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal);
        },
        destructor4 = () => {
            let salary=['32000','50000','75000'];
            let [low, ...remaining] = salary;
            console.log(`remaining: ${JSON.stringify(remaining)}`);
            const newLocal = `<section><h4> Example 4 with Rest parameter</h4> 
            <pre><code class="language-javascript">   
            let salary=['32000','50000','75000'];
            let [low,...remaining] = salary;
            console.log(\`remaining: \${JSON.stringify(remaining)}\`);
            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; remaining: ${JSON.stringify(remaining)} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal);
        },
        destructorDefault5 = () => {
            let salary=['32000','50000'];
            let[low, average, high = '88000']=salary;
            console.log(`high : ${high}`);
            const newLocal = `<section><h4> Example 5 destructuring with defaults </h4> 
            <pre><code class="language-javascript">   
            let salary=['32000','50000'];
            let[low, average, high = '88000']=salary;
            console.log(\`high : \${high}\`);
            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; high : ${high} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal);
           
        },
        destructorNestedArrays6 = () => {
            var salary = ['32000','50000',['88000','99000']];
            var[low, average, [actualLow, actualHigh]] = salary;
            console.log(`actualLow : ${actualLow}`);
            const newLocal = `<section><h4> Example 6 Destructuring nested arrays</h4> 
            <pre><code class="language-javascript">   
            let salary = ['32000','50000',['88000','99000']];
            let[low, average, [actualLow, actualHigh]] = salary;
            console.log(\`actualLow : \${actualLow}\`);
            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; actualLow : ${actualLow} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal);
        },
        destructorFrunctionPara7 = () => {
            var reviewSalary = ([low, average], high = '88000') => average
            console.log(`reviewSalary(['32000','50000']: ${reviewSalary(['32000','50000'])}`);
            const newLocal = `<section><h4> Example 7 Destructuring function parameters</h4> 
            <pre><code class="language-javascript">   
            var reviewSalary = ([low, average], high = '88000') => average
            console.log(\`reviewSalary(['32000','50000']: \${reviewSalary(['32000','50000'])}\`);
            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; reviewSalary(['32000','50000']: ${reviewSalary(['32000','50000'])} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal);
           
        },
        destructorObject8 = () => {
            var salary = {
                myNum: '100',
                low:'32000',
                average:'50000',
                high:'75000'
            };
            var {low, average, high} = salary;
            console.log(`high : ${high}`);
            const newLocal = `<section><h4> Example 8 destructuring object literals with declaration</h4> 
            <pre><code class="language-javascript">   
            var salary = {
                myNum: '100',
                low:'32000',
                average:'50000',
                high:'75000'
            };
            var {low, average, high} = salary;
            console.log(high);
            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; high : ${high} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal);
           
        },
        destructorObject9 = () => {
            let salary = {
                low:'32000',
                average:'50000',
                high:'75000'
            }; 
            let {low:newLow, average:newAverage, high:newHigh } = salary;
            console.log(`newHigh : ${newHigh}`);  
            const newLocal = `<section><h4> Example 9 destructuring object literals with declaration and renaming</h4> 
            <pre><code class="language-javascript">   
            let salary = {
                low:'32000',
                average:'50000',
                high:'75000'
            }; 
            let {low:newLow, average:newAverage, high:newHigh } = salary;
            console.log(\`newHigh : \${newHigh}\`);    
            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; newHigh : ${newHigh} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal);
        },
        destructorObject10 = () => {
            var salary = {
                low:'32000',
                average:'50000',
                high:'75000'
            };
            var newLow,newAverage,newHigh;
            ({low:newLow, average:newAverage, high:newHigh} = salary);
            console.log(`newHigh : ${newHigh}`); 
            const newLocal = `<section><h4> Example 10 destructuring with assignment and renaming </h4> 
            <pre><code class="language-javascript">   
            var salary = {
                low:'32000',
                average:'50000',
                high:'75000'
            };
            var newLow, newAverage, newHigh;
            ({low:newLow, average:newAverage, high:newHigh} = salary);
            console.log(\`newHigh : \${newHigh}\);   
            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; newHigh : ${newHigh} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal);
           
        },
        advDestructorObject11 = () => {
            let [high, low,] = [500, 200]; 
            console.log(`high:${high} low:${low}`);
            const newLocal = `<section><h4> Example 11 Edge case destructuring when last variable is missing</h4> 
            <pre><code class="language-javascript">   
            let [high, low,] = [500, 200]; 
            console.log(\`high:\${high} low:\${low}\`);
            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; high : ${high} low : ${low} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal);
        },
        advForDestructorObject12 = () => {
            var destructuringUsingFor = () => {
                var arrayOfIbjects = [];
                for(let [a,b] of [[5,10]]){
                    arrayOfIbjects.push({a, b});
                } 
                return arrayOfIbjects; 
            }
            var arrayResult = destructuringUsingFor();
            console.log(`arrayResult: ${JSON.stringify(arrayResult)}`);
                
            const newLocal = `<section><h4> Example 12 Desctructuring using for</h4> 
            <pre><code class="language-javascript">   
            var destructuringUsingFor = () => {
                var arrayOfIbjects = [];
                for(let [a,b] of [[5,10]]){
                    arrayOfIbjects.push({a, b});
                } 
                return arrayOfIbjects; 
            }
            var arrayResult = destructuringUsingFor();
            console.log(\`arrayResult: \${JSON.stringify(arrayResult)}\`);
            
            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; arrayResult: ${JSON.stringify(arrayResult)} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal);
        }, 
        advThrowDestructorObject13 = () => {
            var throwErrsUsingDestructuring = () => {
                try{
                    throw[123,'message'];
                }catch([invoiceNum,errorMessage]){
                    return `invoiceNum: ${invoiceNum} errorMessage : ${errorMessage}`;
                }
            }
            console.log(`throwErrsUsingDestructuring(): ${throwErrsUsingDestructuring()}`);
           
            const newLocal = `<section><h4> Example 13 Desctructuring in try catch blocks</h4> 
            <pre><code class="language-javascript">   
            var throwErrsUsingDestructuring = () => {
                try{
                    throw[123,'message'];
                }catch([invoiceNum,errorMessage]){
                    return \`invoiceNum: \${invoiceNum} errorMessage : \${errorMessage}\`;
                }
            }
            console.log(\`throwErrsUsingDestructuring(): \${throwErrsUsingDestructuring()}\`);
            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; throwErrsUsingDestructuring(): ${throwErrsUsingDestructuring()} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal);
        },
        advDestructorObject14 = () => {
            let high, low;
            var getResult = () => ({high, low} = {high:500, low:200});
            var result = getResult();
            console.log(`result: ${JSON.stringify(result)}`);
            const newLocal = `<section><h4> Example 14 destructuring object literals</h4> 
            <pre><code class="language-javascript">   
            let high, low;
            var getResult = () => ({high, low} = {high:500, low:200});
            var result = getResult();
            console.log(\`result: \${JSON.stringify(result)}\`);
            console.log(getResult());
            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; result: ${JSON.stringify(result)} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal);
        },

        destructorObject15 = () => {
            var salary = {
                myNum: '100',
                low:'32000',
                average:'50000',
                high:'75000',
                gridMain : {
                    gMin: 9,
                    gHigh: 100
                }
            };

            var result = (p, {high, low, gridMain}) => `${p}  ${high}  ${low}  ${gridMain.gHigh}`;
            var rtn = result('hi', salary);
            console.log(`rtn: ${rtn}`);
            const newLocal = `<div class="a"><h4> Example 15 </h4> 
            <pre><code class="language-javascript">   
            var salary = {
                myNum: '100',
                low:'32000',
                average:'50000',
                high:'75000',
                gridMain : {
                    gMin: 9,
                    gHigh: 100
                }
            };
            var result = (p, {high, low, gridMain}) => \`\${p}  \${high}  \${low}  \${gridMain.gHigh}\`;
            var rtn = result('hi', salary);
            console.log(\`rtn: \${rtn}\`);
            </code></pre>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; rtn : ${rtn} &#9632;
            </aside>`;
            $(DEFAULT).append(newLocal);
        }, 
        
        stringExtensions = () => {
            let title = 'SantaBarbaraSurfRiders';
            console.log(title.startsWith('Santa'));
            console.log(title.endsWith('Rider'));
            console.log(title.includes('ba'));

            const newLocal = `<div class="a"><h2> String extensions - is </h2><h4> Example 1 </h4>  
            <pre><code class="language-javascript">
            let title = 'SantaBarbaraSurfRiders';
            console.log(title.startsWith('Santa'));
            console.log(title.endsWith('Rider'));
            console.log(title.includes('ba'));
            </code></pre>   
            <b>title.startsWith('Santa') :  ${title.startsWith('Santa')}<br>
            title.endsWith('Rider') : ${title.endsWith('Rider')}<br>
            title.includes('ba') : ${title.includes('ba')}
            </div>`;
            $(DEFAULT).append(newLocal);
        }, 
        stringExtensionsImogi = () => {
            var title="Surfer's \u{1f3c4} Blog";
            console.log(title);

            // Length of astral plane charactor
            var surfer="\u{1f3c4}";
            console.log(surfer.length);

            var output = String.raw`Surfer's \u{1f3c4} Blog`;

            // Normalise length
            console.log(Array.from(surfer).length);

            // Another way to Normalise
            var surfer1 = "\u{1f30a}\u{1f3c4}\u{1f40b}";
            console.log(Array.from(surfer1).length);
            console.log(surfer1);

            // Wrong size of string
            var title1 = "Mazatla\u{0301}n";
            console.log(title1 + '' + title1.length);
 
            // Correcting the length of string by normalising
            console.log(title1 + '' + title1.normalize().length);

            // just for fun
            var title2 = "Big \u{1f40b} eat little \u{1F41F}";
            console.log(title2);

            // Ascii 
            console.log(title.normalize().codePointAt(7).toString(16));

            // Repeat 
            let waveSurfer = '\u{1f30a}\u{1f3c4}';
            console.log(waveSurfer.repeat(10));
            
            const newLocal = `<div class="a"><h2> String extensions - is </h2><h4> Example 1 </h4>  
            <pre><code class="language-javascript">
            var title="Surfer's \\u{1f3c4} Blog";
            console.log(title);

            // Length of astral plane charactor
            var surfer= "\\u{1f3c4}\\";
            console.log(surfer.length);

            // Normalise length
            console.log(Array.from(surfer).length);

            // Another Normalise example
            var surfer1 = "\\u{1f30a}\\u{1f3c4}\\u{1f40b}";
            console.log(Array.from(surfer1).length);
            console.log(surfer1);

            // Wrong length of string, should be 8 but is 9
            var title1 = "Mazatla\\u0301n";
            console.log(title1 + ''+ title1.length);

            // Correcting the length of string by normalising
            console.log(title1 + '' + title1.normalize().length);

            // just for fun
            var title2 = "Big \\u{1f40b} eat little \\{u1F41F}";
            console.log(title2);

            // Ascii 
            console.log(title1.normalize().codePointAt(7).toString(16));

            // Imogi hex to string
            console.log(String.fromCodePoint(0x1f3c4));

            // Repeat 
            let waveSurfer = '\\u{1f30a}\\u{1f3c4}';
            console.log(waveSurfer.repeat(10));

            </code></pre> 
            </div>  
            <div style = "font-size : 200%;"><b>${output} :  ${title}<br>
            surfer.length : ${surfer.length} <br>
            Array.from(surfer).length : ${Array.from(surfer).length} <br>
            surfer1 ; ${surfer1}<br>
            title1 - title1.length : ${title1} - ${title1.length}<br>
            title1 - title1.normalize().length : ${title1} - ${title1.normalize().length}<br>
            Big \\u{1f40b} eat little \\u1F41F : ${title2}
            title1.normalize().codePointAt(7).toString(16) : ${title1.normalize().codePointAt(7).toString(16)}<br>
            String.fromCodePoint(0x1f3c4) : ${String.fromCodePoint(0x1f3c4)} <br>
            waveSurfer.repeat(10) : ${waveSurfer.repeat(10)}
            </div>`;
            $(DEFAULT).append(newLocal);
        },
       
        generators  = () => {

            // example 6 - yield value passed in.
            function *process2() { 
                yield; 
            }
            let it2 = process2(); 
            var rst1 = it2.next();
            console.log(rst1);

            // example 7 - yield value passed in 200.
            function * process3(){ 
                let result = yield; 
                return (`the result is ${result}`); 
            }
            let it3 = process3(); 
            it3.next(); 
            let rst3 = it3.next(200);
            console.log(`example 7 it3.next(200) : ${rst3}`);

            // example 8 - array yield.
            function * process4(){ 
                let newArray = [yield, yield, yield];
                return (newArray); 
            }
            let it4 = process4(); 
            it4.next(); 
            it4.next(2); 
            it4.next(4); 
            let rst4 = it4.next(42);
            console.log(`example 8 it4.next(4) : ${rst4}`);

            // example 9 - yield precedence.
            let value9;
            function * process9() { 
                value9 = 4 * (yield 42); 
                return value9; 
            }
            let it9 = process9(); 
            it9.next(); 
            let rst9 = it9.next(10);
            console.log(`example 9 it9.next(10) : ${rst9}`);

            // example 10 - yield with arrays
            function * process10() { 
                yield 42; 
                yield [1,2,3]; 
            }
            let it10 = process10(); 
            let rst10a = it10.next();
            let rst10b = it10.next();
            let rst10c = it10.next();
            console.log(rst10a); 
            console.log(rst10b); 
            console.log(rst10c);

            // example 11 - yield delegation
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
            console.log(rst11a); 
            console.log(rst11b); 
            console.log(rst11c); 
            console.log(rst11d); 
            console.log(rst11e);

            // example 12 - yield and exception handling
            function * process12() { 
                try{ 
                    yield 9000; 
                    yield 9001; 
                    yield 9002; 
                } catch(e) {}
            }
            let it12 = process12(); 
            let rst12a, rst12b, rst12c;
            rst12a = it12.next();
            rst12b = it12.throw('foo');
            rst12c = it12.next();
            console.log(rst12a); 
            console.log(rst12b); 
            console.log(rst12c);

            // example 13 - yield gracefully stopping
            function * process13() { 
                yield 9000; 
                yield 9001; 
                yield 9002; 
            }
            let it13 = process13(); 
            let rst13a, rst13b, rst13c;
            rst13a = it13.next();
            rst13b = it13.return('foo');
            rst13c = it13.next();
            console.log(rst13a);
            console.log(rst13b);
            console.log(rst13c);

            const newLocal = `<div class="a"><h2>Generators</h2><h4> Example 1 </h4>  
            <pre><code class="language-javascript">
            // Using a generator example 1 - get first yielded value
            function *process() { yield 8000; yield 8001; } 
            let it = process();
            console.log(it.next());<br> 

            // Using a generator example 2 - get second yielded value
            var result1 = it.next(); 
            console.log(result1);<br>

            // Using a generator example 3 reaching the end generator shut down
            var result2 = it.next();
            console.log(result2);<br>

            // Using a generator example 4 indefenite iterator
            function *process1() { 
                let nextId = 7000; 
                while(true) 
                    yield(nextId++); 
                
            } 
            let it1 = process1(); 
            it1.next();
            let result3 = it1.next().value;
            console.log(result3);<br>

            // Example 5 - Using for of loop on generators
            var rst = \`ids: \`;
            for(let id of process1()){
                if(id > 7002) break;
                rst = rst + \`\${JSON.stringify(id, null, 2)}<br>\`
            };
            console.log(rst);

            // example 6 - yield value passed in.
            function *process2() { 
                yield; 
            }
            let it2 = process2(); 
            var rst1 = it2.next();
            console.log(rst1);

            // example 7 - yield value passed in 200.
            function *process3(){ 
                let result = yield; 
                return (\`the result is \${result}\`); 
            }
            let it3 = process(); 
            it3.next(); 
            let rst3 = it3.next(200);
            console.log(\`example 7 it3.next(200) : \${rst}\`);

            // example 8 - array yield.
            function * process4(){ 
                let newArray = [yield, yield, yield];
                return (newArray[2]); 
            }
            let it4 = process4(); 
            it4.next(); 
            it4.next(2); 
            it4.next(4); 
            let rst4 = it4.next(42);
            console.log(\`example 8 it4.next(42) : \${rst4}\`);

            // example 9 - yield precedence.
            function * process9() { 
                let value9 = 4 * (yield 42); 
                return value9;  
            }
            let it9 = process9(); 
            it9.next(); 
            let rst9 = it9.next(10);
            console.log(\`example 9 it9.next(10) : \${rst9}\`);

            // example 10 - yield with arrays
            function * process10() { 
                yield 42; 
                yield [1,2,3]; 
            }
            let it10 = process10(); 
            let rst10a = it10.next();
            let rst10b = it10.next();
            let rst10c = it10.next();
            console.log(rst10a); 
            console.log(rst10b); 
            console.log(rst10c);

            // example 11 - yield delegation
            function * process11() { 
                yield 42; 
                yield * [1,2,3]; 
            }
            let it11 = process11();
            let rst11a, rst11b, rst11c, rst11d, rst11e;
            rst11a = it11.next().value;
            rst11b = it11.next().value;
            rst11c = it11.next().value;
            rst11d = it11.next().value;
            rst11e = it11.next().value;
            console.log(rst11a); 
            console.log(rst11b); 
            console.log(rst11c); 
            console.log(rst11d); 
            console.log(rst11e);

            // example 12 - yield and exception handling
            function * process12() { 
                try{ 
                    yield 9000; 
                    yield 9001; 
                    yield 9002; 
                } catch(e) {}
            }
            let it12 = process12(); 
            let rst12a, rst12b, rst12c;
            rst12a = it12.next();
            rst12b = it12.throw('foo');
            rst12c = it12.next();
            console.log(rst12a); 
            console.log(rst12b); 
            console.log(rst12c);

            // example 13 - yield gracefully stopping
            function * process13() { 
                yield 9000; 
                yield 9001; 
                yield 9002; 
            }
            let it13 = process13(); 
            let rst13a, rst13b, rst13c;
            rst13a = it13.next();
            rst13b = it13.return('foo');
            rst13c = it13.next();
            console.log(rst13a);
            console.log(rst13b);
            console.log(rst13c);

            </code></pre>
            <b>example 1 it.next() : ${JSON.stringify(result, null, 2)}<br>
            <b>example 2 it.next() : ${JSON.stringify(result1, null, 2)}<br>
            <b>example 3 it.next() : ${JSON.stringify(result2, null, 2)}<br>
            <b>example 4 it1.next() : ${JSON.stringify(result3, null, 2)}<br>
            <b>example 5 ${rst}<br>
            <b>example 6 yield : ${JSON.stringify(rst1, null, 2)}<br>
            <b>example 7 it3.next(200) : ${JSON.stringify(rst3, null, 2)}<br>  
            <b>example 8 it4.next(42) : ${JSON.stringify(rst4, null, 2)}<br> 
            <b>example 9 it9.next(10) : ${JSON.stringify(rst9, null, 2)}<br>
            <b>example 10 it10.next() rst10a : ${JSON.stringify(rst10a, null, 2)}<br>
            <b>example 10 it10.next() rst10b : ${JSON.stringify(rst10b, null, 2)}<br>
            <b>example 10 it10.next() rst10c : ${JSON.stringify(rst10c, null, 2)}<br>
            <b>example 11 it11.next() rst11a : ${JSON.stringify(rst11a, null, 2)}<br>
            <b>example 11 it11.next() rst11b : ${JSON.stringify(rst11b, null, 2)}<br>
            <b>example 11 it11.next() rst11c : ${JSON.stringify(rst11c, null, 2)}<br>
            <b>example 11 it11.next() rst11d : ${JSON.stringify(rst11d, null, 2)}<br>
            <b>example 11 it11.next() rst11e : ${JSON.stringify(rst11e, null, 2)}<br> 
            <b>example 12 it12.next() rst12a : ${JSON.stringify(rst12a, null, 2)}<br>
            <b>example 12 it12.next() rst12b : ${JSON.stringify(rst12b, null, 2)}<br>
            <b>example 12 it12.next() rst12c : ${JSON.stringify(rst12c, null, 2)}<br>
            <b>example 13 it13.next() rst13a : ${JSON.stringify(rst13a, null, 2)}<br>
            <b>example 13 it13.next() rst13b : ${JSON.stringify(rst13b, null, 2)}<br>
            <b>example 13 it13.next() rst13c : ${JSON.stringify(rst13c, null, 2)}`
            $(DEFAULT).append(newLocal);
        },
        promises  = () => {
            // example 1 - promise resolve
            function doAsync1() { 
                let p = new Promise(function (resolve, reject) { 
                    console.log('in promise code'); 
                    setTimeout(function () { 
                        console.log('resolving...'); 
                        resolve(); 
                    }, 5000); 
                }); 
                return p; 
            }
            let promise1 = doAsync1();

            // Example 2 - promise reject
            function doAsync2() { 
                let p = new Promise(function (resolve, reject){ 
                    console.log('in promise code'); 
                    setTimeout(function () { 
                        console.log('rejecting...'); 
                        reject(); 
                    }, 5000); 
                }); 
                return p; 
            }
            let promise2 = doAsync2();

             // example 3 - promise resolve called with parameter
             function doAsync3() { 
                let p = new Promise(function (resolve, reject) { 
                    console.log('in promise code'); 
                    setTimeout(function () { 
                        resolve('OK to go....'); 
                    }, 5000); 
                }); 
                return p; 
            }
            doAsync3().then(function(value){
                    console.log('fullfilled....' + value);
                },
                function(reason){
                    console.log('rejecting....' + reason);
                }
            );

            // Example 4 - promise reject with parameters.
            function doAsync4() { 
                let p = new Promise(function (resolve, reject){ 
                    console.log('in promise code'); 
                    setTimeout(function () { 
                        reject('Internet as crashed!'); 
                    }, 5000); 
                }); 
                return p; 
            }
            doAsync4().then(function(value){
                    console.log('fullfilled....' + value);
                },
                function(reason){
                    console.log('rejecting....' + reason);
                }
            );

             // example 5 - promise resolve chaining then fuctions
             function doAsync5() { 
                let p = new Promise(function (resolve, reject) { 
                    console.log('in promise code'); 
                    setTimeout(function () { 
                        resolve('OK to go....'); 
                    }, 5000); 
                }); 
                return p; 
            }
            doAsync5().then(function(value){
                    console.log('fullfilled....' + value);
                    return 'go go go....'
                }
            ).then(function(value){
                    console.log('Really....' + value);
                }
            );

             // example 6 - promise reject with catch 
             function doAsync6() { 
                let p = new Promise(function (resolve, reject) { 
                    console.log('in promise code'); 
                    setTimeout(function () { 
                        reject('Nope no go....'); 
                    }, 5000); 
                }); 
                return p; 
            }
            doAsync6().catch(
                function(reason){console.log('Error : ' + reason);}
            ).then(
                function(value){console.log('fulfilled....' + value);},
                function(resaon){console.log('rejected 1st then....' + resaon);}
            ).then(
                function(value){console.log('Really....' + value);},
                function(resaon){console.log('rejected 2nd then ....' + resaon);}
            );

            // example 7 - resolved without waiting for work to complete
            function doAsync7() { 
                return Promise.resolve('resolve called in promises....'); 
            }
            doAsync7().then( 
                function (value) { console.log('Ok: ' + value) }, 
                function (reason) { console.log('Nope: ' + reason)} 
            );

            // example 8 - Reject without waiting for work to complete
            function doAsync8() { 
                return Promise.reject('reject called in promise....'); 
            }
            doAsync8().then( 
                function (value) { console.log('Ok: ' + value) }, 
                function (reason) { console.log('Nope: ' + reason)} 
            );

            // example 9 - ALL promise all resolve
            let p9a = new Promise(function (resolve, reject) { 
                console.log('in promise code'); 
                setTimeout(function () { 
                    resolve('OK to go....'); 
                }, 3000); 
            });

            let p9b = new Promise(function (resolve, reject) { 
                console.log('in promise code'); 
                setTimeout(function () { 
                    resolve('OK too! yes go....'); 
                }, 6000); 
            }); 

            Promise.all([p9a, p9b]).then( 
                function (value) { console.log('ALL:Ok both promises done p9a, p9b afer 6 seconds...') }, 
                function (reason) { console.log('ALL:Nope one of the promises (p9a, p9b) rejected...') } 
            );

             // example 10 - ALL promise 1st resloved afer 1sec then 2nd rejected after 7sec 
             let p10a = new Promise(function (resolve, reject) { 
                console.log('in promise code'); 
                setTimeout(function () { 
                    resolve('OK to go....'); 
                }, 1000); 
            });

            let p10b = new Promise(function (resolve, reject) { 
                console.log('in promise code'); 
                setTimeout(function () { 
                    reject('Nope! No go....'); 
                }, 7000); 
            }); 

            Promise.all([p10a, p10b]).then( 
                function (value) { console.log('ALL:Ok both promises done p10a, p10b afer 7 sec...') }, 
                function (reason) { console.log('ALL:Nope one of the promises (p10a, p10b) rejected after 7sec...') } 
            );

            // example 11 - ALL promise 1st rejected afer 7sec then 2nd rejected after 10sec 
            let p11a = new Promise(function (resolve, reject) { 
                console.log('in promise code'); 
                setTimeout(function () { 
                    reject('Nope! No go.....'); 
                }, 7000); 
            });

            let p11b = new Promise(function (resolve, reject) { 
                console.log('in promise code'); 
                setTimeout(function () { 
                    resolve('Yes. Ok go....'); 
                }, 10000); 
            }); 

            Promise.all([p11a, p11b]).then( 
                function (value) { console.log('ALL:Ok both promises done p11a, p11b afer 10 sec...') }, 
                function (reason) { console.log('ALL:Nope 1st of the promises (p11a, p11b) rejected after 7sec...') } 
            );

            // example 12 - RACE promise 1st resolved afer 7sec then 2nd resolved after 10sec 
            let p12a = new Promise(function (resolve, reject) { 
                console.log('in promise code'); 
                setTimeout(function () { 
                    resolve('Yes p12a. Ok go.....'); 
                }, 7000); 
            });

            let p12b = new Promise(function (resolve, reject) { 
                console.log('in promise code'); 
                setTimeout(function () { 
                    resolve('Yes p12b. Ok go....'); 
                }, 10000); 
            }); 

            Promise.race([p12a, p12b]).then( 
                function (value) { console.log('RACE:Ok 1st promises done after 7 sec (p12a, p12b)...') }, 
                function (reason) { console.log('Nope promises (p12a, p12b) rejected...') } 
            );

            // example 13 - RACE promise 1st rejected afer 7sec then 2nd resolved after 10sec 
            let p13a = new Promise(function (resolve, reject) { 
                console.log('in promise code'); 
                setTimeout(function () { 
                    reject('Nope p13a. On go.....'); 
                }, 7000); 
            });

            let p13b = new Promise(function (resolve, reject) { 
                console.log('in promise code'); 
                setTimeout(function () { 
                    resolve('Yes p13b. Ok go....'); 
                }, 10000); 
            }); 

            Promise.race([p13a, p13b]).then( 
                function (value) { console.log('RACE:promises resolved after 10 sec (p13a, p13b)...') }, 
                function (reason) { console.log('RACE:Nope 1st promises rejected after 7 sec (p13a, p13b)...') } 
            );

            const newLocal = `<div class="a"><h2>Promises</h2>  
            <pre><code class="language-javascript">
            // example 1 - promise resolve
            function doAsync1() { 
                let p = new Promise(function (resolve , reject) { 
                    console.log('in promise code'); 
                    setTimeout(function () { 
                            console.log('resolving...'); 
                            resolve(); 
                        }, 2000); 
                }); 
                return p; 
            }
            let promise1 = doAsync1();<br> 

            // Example 2 = promise reject
            function doAsync2() { 
                let p = new Promise(function (resolve,reject){ 
                    console.log('in promise code'); 
                    setTimeout(function () { 
                            console.log('rejecting...'); 
                            reject(); 
                    }, 2000); 
                }); 
                return p; 
            }
            let promise2 = doAsync2();<br>

            // example 3 - promise resolve called with parameter
             function doAsync3() { 
                let p = new Promise(function (resolve , reject) { 
                    console.log('in promise code'); 
                    setTimeout(function () { 
                        resolve('OK to go....'); 
                    }, 5000); 
                }); 
                return p; 
            }
            doAsync3().then(function(value){
                    console.log('fullfilled....' + value);
                },
                function(reason){
                    console.log('rejecting....' + reason);
                }
            );

            // Example 4 - promise reject
            function doAsync4() { 
                let p = new Promise(function (resolve,reject){ 
                    console.log('in promise code'); 
                    setTimeout(function () { 
                        reject('Internet as crashed!'); 
                    }, 5000); 
                }); 
                return p; 
            }
            doAsync4().then(function(value){
                    console.log('fullfilled....' + value);
                },
                function(reason){
                    console.log('rejecting....' + reason);
                }
            );

            // example 5 - promise resolve chaining then fuctions
             function doAsync5() { 
                let p = new Promise(function (resolve, reject) { 
                    console.log('in promise code'); 
                    setTimeout(function () { 
                        resolve('OK to go....'); 
                    }, 5000); 
                }); 
                return p; 
            }
            doAsync5().then(function(value){
                    console.log('fullfilled....' + value);
                    return 'go go go....'
                }
            ).then(function(value){
                    console.log(' Really....' + value);
                }
            );

            // example 6 - promise reject with catch 
             function doAsync6() { 
                let p = new Promise(function (resolve, reject) { 
                    console.log('in promise code'); 
                    setTimeout(function () { 
                        reject('Nope no go....'); 
                    }, 5000); 
                }); 
                return p; 
            }
            doAsync6().catch(
                function(reason){console.log('Error : ' + reason);}
            ).then(
                function(value){console.log('fulfilled....' + value);},
                function(resaon){console.log('rejected 1st then....' + resaon);}
            ).then(
                function(value){console.log('Really....' + value);},
                function(resaon){console.log('rejected 2nd then ....' + resaon);}
            );

            // example 7 - promise resolved without waiting for work to complete
            function doAsync7() { 
                return Promise.resolve('resolve called in promise....'); 
            }
            doAsync7().then( 
                function (value) { console.log('Ok: ' + value) }, 
                function (reason) { console.log('Nope: ' + reason)} 
            );

            // example 8 - Reject without waiting for work to complete
            function doAsync8() { 
                return Promise.reject('reject called in promise....'); 
            }
            doAsync8().then( 
                function (value) { console.log('Ok: ' + value) }, 
                function (reason) { console.log('Nope: ' + reason)} 
            );

            // example 9 - ALL promise all resolve
            let p9a = new Promise(function (resolve, reject) { 
                console.log('in promise code'); 
                setTimeout(function () { 
                    resolve('OK to go....'); 
                }, 2000); 
            });

            let p9b = new Promise(function (resolve, reject) { 
                console.log('in promise code'); 
                setTimeout(function () { 
                    reject('OK too! yes go....'); 
                }, 3000); 
            }); 

            Promise.all([p9a, p9b]).then( 
                function (value) { console.log('Ok both promises done p9a, p9b afer 6 seconds...') }, 
                function (reason) { console.log('Nope one of the promises (p9a, p9b) rejected...') } 
            );

            // example 10 - ALL promise 1st resloved afer 1sec then 2nd rejected after 7sec 
            let p10a = new Promise(function (resolve, reject) { 
               console.log('in promise code'); 
               setTimeout(function () { 
                   resolve('OK to go....'); 
               }, 1000); 
           });

           let p10b = new Promise(function (resolve, reject) { 
               console.log('in promise code'); 
               setTimeout(function () { 
                   reject('Nope! No go....'); 
               }, 7000); 
           }); 

           Promise.all([p10a, p10b]).then( 
               function (value) { console.log('ALL:Ok both promises done p10a, p10b afer 7 sec...') }, 
               function (reason) { console.log('ALL:Nope one of the promises (p10a, p10b) rejected after 7sec...') } 
           );

           // example 11 - ALL promise 1st rejected afer 7sec then 2nd rejected after 10sec 
           let p11a = new Promise(function (resolve, reject) { 
              console.log('in promise code'); 
              setTimeout(function () { 
                  reject('Nope! No go.....'); 
              }, 7000); 
          });

          let p10b = new Promise(function (resolve, reject) { 
              console.log('in promise code'); 
              setTimeout(function () { 
                  resolve('Yes. Ok go....'); 
              }, 10000); 
          }); 

          Promise.all([p11a, p11b]).then( 
              function (value) { console.log('ALL:k both promises done p11a, p11b afer 10 sec...') }, 
              function (reason) { console.log('ALL:Nope 1st of the promises (p11a, p11b) rejected after 7sec...') } 
          );

          // example 12 - RACE promise 1st resolved afer 7sec then 2nd resolved after 10sec 
            let p12a = new Promise(function (resolve, reject) { 
                console.log('in promise code'); 
                setTimeout(function () { 
                    resolve('Yes p12a. Ok go.....'); 
                }, 7000); 
            });

            let p12b = new Promise(function (resolve, reject) { 
                console.log('in promise code'); 
                setTimeout(function () { 
                    resolve('Yes p12b. Ok go....'); 
                }, 10000); 
            }); 

            Promise.race([p12a, p12b]).then( 
                function (value) { console.log('RACE:Ok 1st promises done after 7 sec (p12a, p12b)...') }, 
                function (reason) { console.log('RACE:Nope promises (p12a, p12b) rejected...') } 
            );

            // example 13 - RACE promise 1st rejected afer 7sec then 2nd resolved after 10sec 
            let p13a = new Promise(function (resolve, reject) { 
                console.log('in promise code'); 
                setTimeout(function () { 
                    reject('Nope p13a. On go.....'); 
                }, 7000); 
            });

            let p13b = new Promise(function (resolve, reject) { 
                console.log('in promise code'); 
                setTimeout(function () { 
                    resolve('Yes p13b. Ok go....'); 
                }, 10000); 
            }); 

            Promise.race([p13a, p13b]).then( 
                function (value) { console.log('RACE:promises resolved after 10 sec (p13a, p13b)...') }, 
                function (reason) { console.log('RACE:Nope 1st promises rejected after 7 sec (p13a, p13b)...') } 
            );

            </code></pre>
            <b>example 1 immediate : in promise code - after 5 seconds setTimout : resolving... <br>
            <b>example 2 immediate : in promise code - after 5 seconds setTimout : rejecting... <br>
            <b>example 3 immediate : in promise code - after 5 seconds setTimout : resolving...OK to go... <br>
            <b>example 4 immediate : in promise code - after 5 seconds setTimout : rejecting...Internet as crashed! <br>
            <b>example 5 immediate : in promise code - after 5 seconds setTimout : resolving...OK to go...  Really....go go go.... <br>
            <b>example 6 immediate : in promise code - after 5 seconds setTimout : Error...Nope no go.... <br>
            <b>example 6 immediate : in promise code - after 5 seconds setTimout : fulfilled...undefined.... Not sure why????<br>
            <b>example 6 immediate : in promise code - after 5 seconds setTimout : Really...undefined.... Not sure why???? <br>
            <b>example 7 immediate : in promise code - after 5 seconds setTimout : Ok: resolve called in pormise... <br>
            <b>example 8 immediate : in promise code - after 5 seconds setTimout : Nope: reject called in pormise...<br>
            <b>example 9 immediate : in promise code - after 6 seconds setTimout : ALL:Ok both promises done p9a, p9b afer 6 seconds...<br>
            <b>example 10 immediate : in promise code - after 7 seconds setTimout : ALL:Nope one of the promises (p10a, p10b) rejected after 7sec...<br>
            <b>example 11 immediate : in promise code - after 7 seconds setTimout : ALL:Nope one of the promises (p11a, p11b) rejected after 7sec...<br>
            <b>example 12 immediate : in promise code - after 7 seconds setTimout : RACE:Ok 1st promises done after 7 sec (p12a, p12b)...<br>
            <b>example 13 immediate : in promise code - after 7 seconds setTimout : RACE:Nope 1st promises rejected after 7 sec (p13a, p13b))...`;
            $(DEFAULT).append(newLocal);

        },
        arrays  = () => {
            // example 1 - setting values in array not working in ES5
            let salaries1 = Array(90000); 
            console.log(salaries1.length);

            // example 2 - New way of setting values.
            let salaries2 = Array.of(90000); 
            console.log(salaries2.length);

            // example 3 - Increase all items in array by 100.
            let amounts = [800, 810, 820]; 
            let salaries3 = Array.from(amounts, v => v + 100 ); 
            console.log(salaries3);

            // Example 4 - Increase all by 50 using this key word.
            let amounts4 = [800, 810, 820]; 
            let salaries4 = Array.from(amounts4, function (v) { 
                    return v + this.adjustment; 
                }, { adjustment: 50 }
            ); 
            console.log(salaries4);

            // Example 5 - fill whole array with a value.
            let salaries5 = [600, 700, 800]; 
            salaries5.fill(900); 
            console.log(salaries5);

            // Example 6 - Change all value from index 1 inclusive
            let salaries6 = [600, 700, 800]; 
            salaries6.fill(900, 1); 
            console.log(salaries6);

            // Example 7 - Start changing from index 1 to 2 exclusive
            let salaries7 = [600, 700, 800]; 
            salaries7.fill(900, 1, 2); 
            console.log(salaries7);

            // Example 8 - Change value at the end of the array.
            let salaries8 = [600, 700, 800]; 
            salaries8.fill(900, -1); 
            console.log(salaries8);

            // Example 9 - find
            let salaries9 = [600, 700, 800]; 
            let result9 = salaries9.find(value => value >= 750); 
            console.log(result9);            
            
            // Example 10 - Find returns the first value found.
            let salaries10 = [600, 700, 800]; 
            let result10 = salaries10.find(value => value >= 650); 
            console.log(result10);

            // Example 11 - Find the index where the value is 700
            let salaries11 = [600, 700, 800]; 
            let result11 = salaries11.findIndex(function (value, index, array) { 
                return value == this; 
                }, 700
            ); 
            console.log(result11);

            // Example 12 - Copy array into array.
            let salaries12 = [600, 700, 800, 900]; 
            salaries12.copyWithin(2, 0); 
            console.log(salaries12);

            // Example 13 - Copy array into array.
            let ids13 = [1, 2, 3, 4, 5, 6, 7]; 
            ids13.copyWithin(0, 1); 
            console.log(ids13);

            // Example 14 - Copy array into array with more control.
            let ids14 = [1, 2, 3, 4, 5]; 
            ids14.copyWithin(3, 0, 2); 
            console.log(ids14);

            // Example 15 - Spread used to get values
            let ids15 = ['A', 'B','C']; 
            console.log(...ids15.entries());

            // Example 16 - Spread used to get keys
            let ids16 =['A', 'B','C']; 
            console.log(...ids16.keys());

            // Example 16 - Spread used to get values
            let ids17 =['A', 'B','C']; 
            console.log(...ids17.values());

            const newLocal = `<div class="a"><h2>arrays</h2>  
            <pre><code class="language-javascript">
            // example 1 - setting values in array not working in ES5
            let salaries1 = Array(90000); 
            console.log(salaries1.length);

            // example 2 - New way of setting values.
            let salaries2 = Array.of(90000); 
            console.log(salaries2.length);

            // example 3 - Increase all items in array by 100.
            let amounts = [800, 810, 820]; 
            let salaries3 = Array.from(amounts, v => v + 100 ); 
            console.log(salaries3);

            // Example 4 - Increase all by 50 using this key word.
            let amounts4 = [800, 810, 820]; 
            let salaries4 = Array.from(amounts4, function (v) { 
                    return v + this.adjustment; 
                }, { adjustment: 50 }
            ); 
            console.log(salaries4);

            // Example 5 - fill whole array with a value.
            let salaries5 = [600, 700, 800]; 
            salaries5.fill(900); 
            console.log(salaries5)

            // Example 6 - Change all value from index 1 inclusive
            let salaries6 = [600, 700, 800]; 
            salaries6.fill(900, 1); 
            console.log(salaries6);

            // Example 7 - Start changing from index 1 to 2 exclusive
            let salaries7 = [600, 700, 800]; 
            salaries7.fill(900, 1, 2); 
            console.log(salaries7);

            // Example 8 - Change value at the end of the array.
            let salaries8 = [600, 700, 800]; 
            salaries8.fill(900, -1); 
            console.log(salaries8);

            // Example 9 - find
            let salaries9 = [600, 700, 800]; 
            let result9 = salaries9.find(value => value >= 750); 
            console.log(result9);

            // Example 10 - Find returns the first value found.
            let salaries10 = [600, 700, 800]; 
            let result10 = salaries10.find(value => value >= 650); 
            console.log(result10);

            // Example 11 - Find the index where the value is 700
            let salaries11 = [600, 700, 800]; 
            let result11 = salaries11.findIndex(function (value, index, array) { 
                return value == this; 
                }, 700
            ); 
            console.log(result11);
            
            // Example 12 - Copy array into array.
            let salaries12 = [600, 700, 800, 900]; 
            salaries12.copyWithin(2, 0); 
            console.log(salaries12);

            // Example 13 - Copy array into array.
            let ids13 = [1, 2, 3, 4, 5, 6, 7]; 
            ids13.copyWithin(0, 1); 
            console.log(ids13);

            // Example 14 - Copy array into array with more control.
            let ids14 = [1, 2, 3, 4, 5]; 
            ids14.copyWithin(3, 0, 2); 
            console.log(ids14);

            // Example 15 - Spread used to get entries NOT values
            let ids15 = ['A', 'B','C']; 
            console.log(...ids15.entries());

            // Example 16 - Spread used to get keys
            let ids16 =['A', 'B','C']; 
            console.log(...ids16.keys());

            // Example 16 - Spread used to get values
            let ids17 =['A', 'B','C']; 
            console.log(...ids17.values());

            </code></pre>
            <b>example 1 salaries1.length = ${salaries1.length}</br>
            <b>example 2 salaries2.length = ${salaries2.length}<br>
            <b>example 3 salaries3 = ${JSON.stringify(salaries3, null, 2)}<br>
            <b>example 4 salaries4 = ${JSON.stringify(salaries4, null, 2)}<br>
            <b>example 5 salaries5 = ${JSON.stringify(salaries5, null, 2)}<br>
            <b>example 6 salaries6 = ${JSON.stringify(salaries6, null, 2)}<br>
            <b>example 7 salaries7 = ${JSON.stringify(salaries7, null, 2)}<br>
            <b>example 8 salaries8 = ${JSON.stringify(salaries8, null, 2)}<br>
            <b>example 9 result9 = ${JSON.stringify(result9, null, 2)}<br>
            <b>example 10 result10 = ${JSON.stringify(result10, null, 2)}<br>
            <b>example 11 result11 = ${JSON.stringify(result11, null, 2)}<br>
            <b>example 12 salaries12 = ${JSON.stringify(salaries12, null, 2)}<br>
            <b>example 13 ids13 = ${JSON.stringify(ids13, null, 2)}<br>
            <b>example 14 ids14 = ${JSON.stringify(ids14, null, 2)}<br>
            <b>example 15 ...ids15.entries() = ${JSON.stringify([...ids15.entries()], null, 2)}<br>
            <b>example 16 ...ids16.keys() = ${JSON.stringify([...ids16.keys()], null, 2)}<br>
            <b>example 17 ...ids17.values() = ${JSON.stringify([...ids17.values()], null, 2)}`;
            $(DEFAULT).append(newLocal);

        };
        // Public methods
        return {
            syntaxSample :mySyntaxSample,
            defaultsFunctionParam1,
            defaultsFunctionParam2,
            defaultsFunctionParam3,
            defaultsFunctionParam4,
            defaultsFunctionParam5,
            defaultsFunctionParam6,
            defaultsFunctionParam7,
            defaultsFunctionParam8,
            rest1,
            rest2,
            rest3,
            rest4,
            spreadOpperator1,
            spreadOpperator2,
            spreadOpperator3,
            spreadOpperator4,
            objectLiteral1,
            objectLiteral2,
            objectLiteral3,
            objectLiteral4,
            objectLiteral5,
            forOfLoop,
            octalsAndBinaries,
            templateLiterals1,
            templateLiterals2,
            templateLiterals3,
            templateLiterals4,
            destructor1,
            destructor2,
            destructor3,
            destructor4,
            destructorDefault5,
            destructorNestedArrays6,
            destructorFrunctionPara7,
            destructorObject8,
            destructorObject9,
            destructorObject10, 
            advDestructorObject11,
            advForDestructorObject12,
            advThrowDestructorObject13,
            advDestructorObject14,
            destructorObject15,
            generators,
            promises,
            arrays
        };
    };

})(window.Gus = window.Gus || {}, 
    window.Gus.ES6 = window.Gus.ES6 || {});

let ES6Obj = Gus.ES6.ES6Obj;
export {ES6Obj};