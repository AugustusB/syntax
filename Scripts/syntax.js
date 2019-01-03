(function(ns1, ns2){
    'use strict'
    ns2.ES6Obj = function ES6Obj(){
        // Private methods
        const DEFAULT = 'body';
        var mySyntaxSample = function mySyntaxSample(findElem, productId){

            $(findElem).append('<div> Hoisting *** ' + productId + '</div>');
            let productId2 = 12;
            {
                let productId2 = 2000;
            }
            $(findElem).append('<div> Let Block scoping productId2 *** ' + productId2 + '</div>');
            
            try {
                {
                    let productId3 = 12
                }
                $(findElem).append('<div> Let Outside scope block productId3 *** ' + productId3 + '</div>');
            } catch (error) {
                $(findElem).append('<div> Let Outside scope block productId3 *** ' + error.message + '</div>');
            }

            function updateProductId (){
                productId4 = 12
            };
            let productId4 = null;
            updateProductId();
            $(findElem).append('<div> Let Scope block productId4 *** ' + productId4 + '</div>');

            // Closure sample issue with for 
            var updateProd = [];
            for (var index = 0; index < 2; index++) {
                updateProd.push(function () {return index;});
            }
            $(findElem).append('<div> Let Scope block updateProd[0]() *** ' + updateProd[0]() + ' updateProd[0]() - ' + updateProd[1]() + '</div>');

            // working with const
            const MARK_PCT = 100;
            $(findElem).append('<div> const MARK_PCT *** ' + MARK_PCT + '</div>');

            if(MARK_PCT > 0){
                const MARK_PCT = 10;
            }
            $(findElem).append('<div> const has block scope MARK_PCT *** ' + MARK_PCT + '</div>');

            // Arrow functions 
            $(findElem).append('<div><h4> Two Document click events attached with arrow function notation</h4></div>');

            var arrowfunc1 = (count, tax) => count *2 * ( 1+ tax);
            $(findElem).append('<div>var arrowfunc1 = (count, tax) => count *2 * ( 1+ tax); *** ' + arrowfunc1(10, .01) + '</div>');

            document.addEventListener('click', function() {
                $(findElem).append('<div> ES5 this in events *** ' + this + '</div>');
            });

            document.addEventListener('click',() =>{
                $(findElem).append('<div> ES6 this in events with arrow functions *** ' + this+ '</div>');
            } );

            var number2 = 39.99;
            var number3 = 49.99;
            var number4Dynamic = 'number4'
            
            var invoice1 = {
                number2,
                number : 123,
                process : function () {
                    return () => $(findElem).append('<div> invoice1.number *** ' + this.number + '</div>');
                },
                process1: function () {
                    $(findElem).append('<div> invoice1.process1() standard notation *** ' + this.number + '</div>');
                },
                process2() {
                    $(findElem).append('<div> invoice1.process2() new notation *** ' + this.number2 + '</div>');
                },

                // Getter and setter
                get number3 () {return number3;},
                set number3 (value) {number3 = value;},

                get [number4Dynamic] () {return true;},
                set [number4Dynamic] (value){} 

            };
            invoice1.process()();
            invoice1.process1();
            invoice1.process2();

            $(findElem).append('<div> standard property names invoice1.get number3 *** ' + invoice1.number3 + '</div>');
            invoice1.number3 = 99.99;
            $(findElem).append('<div> standard property names invoice1.set number3 *** ' + invoice1.number3 + '</div>');

            $(findElem).append('<div> dynamic property names invoice1.get number4 *** ' + invoice1.number4 + '</div>');
           
            // for of loop
            var arrayNames = ['bob', 'jim', 'jack'];
            for(var item of arrayNames){
                $(findElem).append('<div> for of loop with arrays [\'bob\', \'jim\', \'jack\'] *** ' + item + '</div>');
            };
            var str = 'ABCD';
            for(var item of str){
                $(findElem).append('<div> for of loop with string \'ABCD\' *** ' + item + '</div>');
            };
            var octNumber = 0o10;
            $(findElem).append('<div> octals 0o10 or 0O10 *** ' + octNumber + '</div>');

            var invoiceNum = 1350;
            $(findElem).append(`<div> template literals using \` $\{\}\`*** ${invoiceNum}</div>`);

        },
        
        showCategories = function showCategories(productId,...categories){
            console.log(categories instanceof Array);
            $(DEFAULT).append(`<div class="a">  <h3> REST opperator </h3> function showCategories(productId,...categories) \` $\{categories instanceof Array\}\` : ${categories instanceof Array}</div>`);
            

        },
        spreadOpperator1 = () => {
            var prices=[12,20,18];
            var maxPrice=Math.max(...prices);
            console.log(maxPrice);
            const newLocal = `<div class="a"> <h2> Spread opperator </h2><h4> Example 1 </h4>
            <pre><code class="language-javascript">
            var prices=[12,20,18];
            var maxPrice=Math.max(...prices);
            console.log(maxPrice);
            </code></pre>
            <b>maxPrice ${maxPrice}</div>`;
            $(DEFAULT).append(newLocal);
        },
        spreadOpperator2 = (prices) => {
            const newLocal_1 = `<div class="a"> <h4> Example 2 </h4>
            <pre><code class="language-javascript">      
            varprices=[12,20,18];
            varnewPriceArray=[...prices];
            console.log(newPriceArray);
            </code></pre>
            </div>`;
            $(DEFAULT).append(newLocal_1);
           for (var arr of [...prices]) {
                $(DEFAULT).append(`<div> <b>Array Item : ${arr}</div>`) 
            }
        },
        spreadOpperator3 = (prices) => {
            const newLocal = `<div class="a"> <h4> Example 3 </h4>
            <pre><code class="language-javascript">      
            var newPriceArray=Array(...[,,]);
            console.log(newPriceArray);
            </code></pre>
            </div>`;
            $(DEFAULT).append(newLocal);
            var i = Array(...prices);
           for (var arr of Array(...prices)) {
                $(DEFAULT).append(`<div> <b>Array Item : ${arr}</div>`) 
            }
        },
        spreadOpperator4 = (str) => {
            const newLocal_1 = `<div class="a"> <h4> Example 4 </h4>
            <pre><code class="language-javascript">    
            var maxCode=Math.max(..."43210"); 
            console.log(maxCode);
            </code></pre>
            <b>Math.max(..."43210") : ${Math.max(...str)}</div>`;
            $(DEFAULT).append(newLocal_1);
        },
        objectLiteral1 = () =>{
            var price=5.99,quantity=30; 
            const newLocal = `<div class="a"> <h2> Object Literals </h2><h4> Example 1 </h4> 
            <pre><code class="language-javascript">   
            var price=5.99,
                quantity=30; 
            var productView = {
                price,quantity
            };
            console.log(productView);
            </code></pre>
            <b>JSON.stringify({price,quantity}) : ${JSON.stringify({ price, quantity })}</div>`;
            $(DEFAULT).append(newLocal);
        },
        objectLiteral2 = () =>{
            var price=5.99,quantity=10;
            var productView={
                price,
                quantity,
                calculateValue(){
                    return this.price * this.quantity
                }
            };
            console.log(productView.calculateValue()); 
            const newLocal_1 = `<div class="a"> <h4> Example 2 </h4>
            <pre><code class="language-javascript">
            var price=5.99,
                quantity=10;
            var productView = {
                price,
                quantity,
                calculateValue(){
                    return this.price * this.quantity
                }
            };
            console.log(productView.calculateValue());
            </code></pre>
            <b>productView.calculateValue()) : ${productView.calculateValue()}</div>`;
            $(DEFAULT).append(newLocal_1);
        }, 
        objectLiteral3This = () =>{
            var price=5.99,
                quantity=10;
            var productView={
                price: 7.99,
                quantity: 1,
                calculateValue(){
                    return this.price * this.quantity
                }
            };
            console.log(productView.calculateValue());
            const newLocal = `<div class="a"> <h4> Example 3 </h4>
            <pre><code class="language-javascript">
            var price=5.99,
                quantity=10;
            var productView = {
                price: 7.99,
                quantity: 1,
                calculateValue() {
                    return this.price * this.quantity
                }
            };
            console.log(productView.calculateValue());
            </code></pre>
            <br><b>productView.calculateValue()) : ${productView.calculateValue()}</div>`;
            $(DEFAULT).append(newLocal );
        }, 
        objectLiteral4 = () =>{
            var method='doIt'; 
            var productView={
                [method+"-001"](){
                    return "in a method";
                }
            };
            productView['doIt-001']();
            let newLocal = `<div class="a"> <h4> Example 4 </h4>
            <pre><code class="language-javascript"> 
            var method='doIt'; 
            var productView = {
                [method+"-001"](){retrun "in a method";}
            };
            productView['doIt-001']();
            </code></pre>
            <br><b>productView['doIt-001'](): ${productView['doIt-001']()}</div>`;
            $(DEFAULT).append(newLocal);
        }, 
        objectLiteral5 = () =>{
            var ident='productId';
            var productView={
                get[ident](){return true;},
                set[ident](value){}
            };
            console.log(productView.productId);
            let newLocal = `<div class="a"> <h4> Example 5 </h4>
            <pre><code class="language-javascript"> 
            var ident='productId';
            var productView = {
                get[ident](){return true;},
                set[ident](value){}
            };
            console.log(productView.productId);
            </code></pre>
            <br><b>productView.productId: ${productView.productId}</div>`;
            $(DEFAULT).append(newLocal);
        },
        objectLiteral6 = () =>{
            var price=5.99,quantity=10; 
            var productView =
            {
                price,
                quantity,
                "calculatevalue"(){return this.price*this.quantity} 
            };
            console.log("calculatevalue :" + productView["calculatevalue"]());
            const newLocal_1 = `<div class="a"> <h4> Example 6 </h4>
            <pre><code class="language-javascript"> 
            var price=5.99,quantity=10; 
            var productView =
            {
                price,
                quantity,
                "calculatevalue"(){return this.price*this.quantity} 
            };
            console.log("calculatevalue :" + productView["calculatevalue"]());
            </code></pre>
            <br><b> productView["calculatevalue"](): ${productView["calculatevalue"]()}</div>`;
            $(DEFAULT).append(newLocal_1);

        },
        objectLiteral7 = () =>{
            var field='dynamicField';
            var price=5.99;
            var productView={
                [field]:price
            };
            console.log("dynamicField: " + productView['dynamicField']);
            let newLocal = `<div class="a"> <h4> Example 7 </h4>
            <pre><code class="language-javascript"> 
            var field='dynamicField';
            var price=5.99;
            var productView = {
                [field]:price
            };
            console.log("dynamicField: " + productView['dynamicField']);
            </code></pre>
            <br><b> productView["dynamicField"]: ${productView["dynamicField"]}</div>`;
            $(DEFAULT).append(newLocal);

        },
        objectLiteral8 = () =>{
            var ident='productId';
            var productView = {
                blnState: true,
                get[ident](){return this.blnState;},
                set[ident](value){this.blnState = value;}
                
            };
            console.log('productView.productId: ' + productView.productId);
            productView.productId = false;
            console.log('productView.productId: ' + productView.productId);
            let temp = `<div class="a"> <h4> Example 8 </h4>
            <pre><code class="language-javascript"> 
            var ident='productId';
            var productView = {
                blnState: true,
                get[ident](){return this.blnState;},
                set[ident](value){this.blnState = value;}
                
            };
            console.log('productView.productId: ' + productView.productId);
            productView.productId = false;
            console.log('productView.productId: ' + productView.productId);
            </code></pre>
            <br><b>productView.productId: ${!productView.productId}
            <br><b>productView.productId: ${productView.productId}</div>`;
            $(DEFAULT).append(temp);


        }, 
        destructor1 = () =>{
            let salary = ['32000','50000','75000'];
            let[ low, average, high] = salary;
            console.log(average); 
            const newLocal = `<div class="a"> <h2> Destructor </h2><h4> Example 1 </h4> 
            <pre><code class="language-javascript">   
            let salary = ['32000','50000','75000'];
            let[ low, average, high] = salary;
            console.log(average);
            </code></pre>
            <b>average : ${average}</div>`;
            $(DEFAULT).append(newLocal);
        },
        destructor2 = () => {
            let salary = ['32000','50000'];
            let [low,average,high] = salary;
            console.log(high);
            const newLocal = `<div class="a"><h4> Example 2 </h4> 
            <pre><code class="language-javascript">   
            let salary = ['32000','50000'];
            let [low,average,high] = salary;
            console.log(high)
            </code></pre>
            <b>high : ${high}</div>`;
            $(DEFAULT).append(newLocal);
        },
        destructor3 = () => {
            let salary = ['32000','50000','75000'];
            let [low,,high] = salary;
            console.log(high); 
            const newLocal = `<div class="a"><h4> Example 3 </h4> 
            <pre><code class="language-javascript">   
            let salary = ['32000','50000','75000'];
            let [low,,high] = salary;
            console.log(high);
            </code></pre>
            <b>high : ${high}</div>`;
            $(DEFAULT).append(newLocal);
        },
        destructor4 = () => {
            let salary=['32000','50000','75000'];
            let [low,...remaining] = salary;
            console.log(remaining);
            const newLocal = `<div class="a"><h4> Example 4 </h4> 
            <pre><code class="language-javascript">   
            let salary=['32000','50000','75000'];
            let [low,...remaining] = salary;
            console.log(remaining);
            </code></pre>
            </div>`;
            $(DEFAULT).append(newLocal);
            for (var arr of remaining) {
                $(DEFAULT).append(`<div> <b>Array Item : ${arr}</div>`) 
            }
        },
        destructorDefault5 = () => {
            let salary=['32000','50000'];
            let[low,average,high='88000']=salary;
            console.log(high);
            const newLocal = `<div class="a"><h4> Example 5 </h4> 
            <pre><code class="language-javascript">   
            let salary=['32000','50000'];
            let[low,average,high='88000']=salary;
            console.log(high);
            </code></pre>
            <b>high : ${high}</div>`;
            $(DEFAULT).append(newLocal);
           
        },
        destructorNestedArrays6 = () => {
            var salary = ['32000','50000',['88000','99000']];
            var[low,average,[actualLow,actualHigh]] = salary;
            console.log(actualLow);
            const newLocal = `<div class="a"><h4> Example 6 </h4> 
            <pre><code class="language-javascript">   
            let salary = ['32000','50000',['88000','99000']];
            let[low,average,[actualLow,actualHigh]] = salary;
            console.log(actualLow);
            </code></pre>
            <b>actualLow : ${actualLow}</div>`;
            $(DEFAULT).append(newLocal);
           
        },
        destructorVariable7 = () => {
            var salary = ['32000','50000'];
            var low,average,high;
            [low,average,high = '88000'] = salary;
            console.log(high);
            const newLocal = `<div class="a"><h4> Example 7 </h4> 
            <pre><code class="language-javascript">   
            var salary = ['32000','50000'];
            var low,average,high;
            [low,average,high = '88000'] = salary;
            console.log(high);
            </code></pre>
            <b>high : ${high}</div>`;
            $(DEFAULT).append(newLocal);
           
        },
        destructorFrunctionPara8 = () => {
            function reviewSalary([low,average],high='88000'){
                console.log(average);
                return average;
            }
            reviewSalary(['32000','50000']);
            const newLocal = `<div class="a"><h4> Example 8 </h4> 
            <pre><code class="language-javascript">   
            function reviewSalary([low,average],high='88000'){
                console.log(average);
                return average;
            }
            reviewSalary(['32000','50000']);
            </code></pre>
            <b>reviewSalary(['32000','50000']); : ${reviewSalary(['32000','50000'])}</div>`;
            $(DEFAULT).append(newLocal);
           
        },
        destructorObject9 = () => {
            var salary = {
                low:'32000',
                average:'50000',
                high:'75000'
            };
            var{low,average,high} = salary;
            console.log(high);
            const newLocal = `<div class="a"><h4> Example 9 </h4> 
            <pre><code class="language-javascript">   
            var salary = {
                low:'32000',
                average:'50000',
                high:'75000'
            };
            var{low,average,high} = salary;
            console.log(high);
            </code></pre>
            <b>high : ${high}</div>`;
            $(DEFAULT).append(newLocal);
           
        },
        destructorObject10 = () => {
            let salary = {
                low:'32000',
                average:'50000',
                high:'75000'
            }; 
            let {low:newLow,average:newAverage,high:newHigh } = salary;
            console.log(newHigh);  
            const newLocal = `<div class="a"><h4> Example 10 </h4> 
            <pre><code class="language-javascript">   
            let salary = {
                low:'32000',
                average:'50000',
                high:'75000'
            }; 
            let {low:newLow,average:newAverage,high:newHigh } = salary;
            console.log(newHigh);    
            </code></pre>
            <b>newHigh : ${newHigh}</div>`;
            $(DEFAULT).append(newLocal);
           
        },
        destructorObject11 = () => {
            var salary = {
                low:'32000',
                average:'50000',
                high:'75000'
            };
            var newLow,newAverage,newHigh;
            ({low:newLow,average:newAverage,high:newHigh} = salary);
            console.log(newHigh); 
            const newLocal = `<div class="a"><h4> Example 11 </h4> 
            <pre><code class="language-javascript">   
            var salary = {
                low:'32000',
                average:'50000',
                high:'75000'
            };
            var newLow,newAverage,newHigh;
            ({low:newLow,average:newAverage,high:newHigh} = salary);
            console.log(newHigh);   
            </code></pre>
            <b>newHigh : ${newHigh}</div>`;
            $(DEFAULT).append(newLocal);
           
        },
        advDestructorObject12 = () => {
            let [high,low,] = [500,200]; 
            console.log(`high:${high} low:${low}`);
            const newLocal = `<div class="a"><h4> Example 12 </h4> 
            <pre><code class="language-javascript">   
            let [high,low,] = [500,200]; 
            console.log(\`high:\${high} low:\${low}\`);
            </code></pre>
            <b>high : ${high} low : ${low}</div>`;
            $(DEFAULT).append(newLocal);
           
        },
        advForDestructorObject13 = () => {
            for(let [a,b] of [[5,10]]){
                console.log(`a : ${a} b : ${b}`);
                const newLocal = `<div class="a"><h4> Example 13 </h4> 
            <pre><code class="language-javascript">   
            for(let [a,b] of [[5,10]]){
                console.log(\`a : \${a} b : \${b}\`);
            }
            </code></pre>
            <b>a : ${a} b : ${b}</div>`;
            $(DEFAULT).append(newLocal);
            }
        }, 
        advThrowDestructorObject14 = () => {
            try{
                throw[123,'message'];
            }catch([invoiceNum,errorMessage]){
                console.log(`invoiceNum: ${invoiceNum} errorMessage : ${errorMessage}`);
                const newLocal = `<div class="a"><h4> Example 14 </h4> 
            <pre><code class="language-javascript">   
            try{
                throw[123,'message'];
            }catch([invoiceNum,errorMessage]){
                console.log(\`invoiceNum: \${invoiceNum} errorMessage : \${errorMessage}\`);
            }
            </code></pre>
            <b>invoiceNum: ${invoiceNum} errorMessage : ${errorMessage}</div>`;
            $(DEFAULT).append(newLocal);
            }
          
        },
        advDestructorObject15 = () => {
            function getResult(){
                let high,low;
                return {high,low} = {high:500,low:200};
            }
            console.log(getResult());
            const newLocal = `<div class="a"><h4> Example 15 </h4> 
            <pre><code class="language-javascript">   
            function getResult(){
                let high,low;
                return {high,low} = {high:500,low:200};
            }
            console.log(getResult());
            </code></pre>
            <b>getResult() : ${JSON.stringify(getResult(), null, 2)}</div>`;
            $(DEFAULT).append(newLocal);
        },
        classes1 = () =>{
            class Task{

            };
            console.log(typeof Task);
            const newLocal = `<div class="a"> <h2> classes </h2><h4> Example 1 </h4> 
            <pre><code class="language-javascript">   
            class Task{

            };
            console.log(typeof Task);
            </code></pre>
            <b>typeof Task : ${typeof Task}</div>`;
            $(DEFAULT).append(newLocal);
        },        
        classes2 = () =>{
            class Task{}
            let taskObj = new Task();
            console.log(typeof taskObj);
            console.log(taskObj instanceof Task);
            const newLocal = `<div class="a"><h4> Example 2 </h4> 
            <pre><code class="language-javascript">   
            class Task{}
            let taskObj = new Task();
            console.log(typeof taskObj);
            console.log(taskObj instanceof Task);
            </code></pre>
            <b>typeof taskObj : ${typeof taskObj} <br>taskObj instanceof Task : ${taskObj instanceof Task}</div>`;
            $(DEFAULT).append(newLocal);
        },        
        classesMethods3 = () =>{
            class Task{
                constructor(){
                    console.log('constructingTask');
                }
                showId(){
                    console.log('99');
                    return '99';
                }
            }
            let task = new Task();
            task.showId();
            console.log(task.showId===Task.prototype.showId);
            const newLocal = `<div class="a"><h4> Example 3 </h4> 
            <pre><code class="language-javascript">   
            class Task{
                constructor(){
                    console.log('constructingTask');
                }
                showId(){
                    console.log('99');
                    return '99';
                }
            }
            let task = new Task();
            task.showId();
            console.log(task.showId===Task.prototype.showId);
            </code></pre>
            <b>task.showId() : ${task.showId()} <br> 
            task.showId===Task.prototype.showId : ${task.showId===Task.prototype.showId} <br>
            </div>`;
            $(DEFAULT).append(newLocal);
        },
        classesExpression4 = () =>{
            let myClass = class Task{
                constructor(){
                    console.log('constructingTask');
                }
            };
            new myClass();
            const newLocal = `<div class="a"><h4> Example 4 </h4> 
            <pre><code class="language-javascript">   
            let myClass = class Task{
                constructor(){
                    console.log('constructingTask');
                }
            };
            new myClass();
            </code></pre>
            <b>new myClass() : constructingTask</div>`;
            $(DEFAULT).append(newLocal);
        };
        
        // Public methods
        return {
            syntaxSample :mySyntaxSample,
            showCategories,
            spreadOpperator1,
            spreadOpperator2,
            spreadOpperator3,
            spreadOpperator4,
            objectLiteral1,
            objectLiteral2,
            objectLiteral3This,
            objectLiteral4,
            objectLiteral5,
            objectLiteral6,
            objectLiteral7,
            objectLiteral8,
            destructor1,
            destructor2,
            destructor3,
            destructor4,
            destructorDefault5,
            destructorNestedArrays6,
            destructorVariable7,
            destructorFrunctionPara8,
            destructorObject9,
            destructorObject10,
            destructorObject11,
            advDestructorObject12,
            advForDestructorObject13,
            advThrowDestructorObject14,
            advDestructorObject15,
            classes1,
            classes2,
            classesMethods3,
            classesExpression4,
            
        };
    };

})(window.Gus = window.Gus || {}, 
    window.Gus.ES6 = window.Gus.ES6 || {});