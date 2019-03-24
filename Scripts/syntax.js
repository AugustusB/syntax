(function(ns1, ns2){
    'use strict'
    ns2.ES6Obj = function ES6Obj(){
        // Private methods //testing changes 
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
                myNum: '100',
                low:'32000',
                average:'50000',
                high:'75000'
            };
            var{low,average,high} = salary;
            console.log(high);
            const newLocal = `<div class="a"><h4> Example 9 </h4> 
            <pre><code class="language-javascript">   
            var salary = {
                myNum: '100',
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
        destructorObject16 = () => {
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

            function result(p, {high, low, gridMain} ){
                return `${p}  ${high}  ${low}  ${gridMain.gHigh}`;
            }
            var rtn = result('hi', salary);
            console.log(rtn);
            const newLocal = `<div class="a"><h4> Example 16 </h4> 
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
            function result(p, {high, low, gridMain}){
                return "p  high  low  gridMain.gHigh";
            }
            var rtn = result('hi', salary);
            console.log(rtn);
            </code></pre>
            <b>rtn : ${rtn}</div>`;
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
        },
        classesExtends5 = () =>{
            class Project { 
                constructor(name) {
                    console.log('constructing Project:'+ name);
                    this.name = 'constructing Project:'+ name;
                }
                getTaskCount() {
                    return 50;
                }
            }
            class SoftwareProject extends Project{
                constructor(name, namesp) {
                    super(name);
                    console.log('constructing SoftwareProject');
                    this.nameSP = 'constructing SoftwareProject:' + namesp;
                }
                getTaskCount() {
                    return super.getTaskCount() + 6;
                }
            }
            let p = new SoftwareProject('Mazatlan', 'MazatlanSP');
            const newLocal = `<div class="a"><h4> Example 5 </h4> 
            <pre><code class="language-javascript">   
            class Project { 
                constructor(name) {
                    console.log('constructing Project:'+ name);
                    this.name = 'constructing Project:'+ name;
                }
                getTaskCount() {
                    return 50;
                }
            }
            class SoftwareProject extends Project{
                constructor(name, namesp) {
                    super(name);
                    console.log('constructing SoftwareProject');
                    this.nameSP = 'constructing SoftwareProject:' + namesp;
                }
                getTaskCount() {
                    return super.getTaskCount() + 6;
                }
            }
            let p = new SoftwareProject('Mazatlan', 'MazatlanSP');
            </code></pre>
            <b>p.name : ${p.name} <br>p.nameSP : ${p.nameSP} <br>p.getTaskCount(): ${p.getTaskCount()} </div>`;
            $(DEFAULT).append(newLocal);
        },
        classesObjectLiteral6 = () =>{
            
            let project = {
                getTaskCount(){
                    return 50;
                }
            };
            let softwareProject = {
                getTaskCount() { 
                    return super.getTaskCount() + 7;
                }
            }
            Object.setPrototypeOf(softwareProject, project);
            console.log(softwareProject.getTaskCount());
            const newLocal = `<div class="a"><h4> Example 6 </h4> 
            <pre><code class="language-javascript">   
            let project = {
                getTaskCount(){
                    return 50;
                }
            };
            let softwareProject = {
                getTaskCount() { 
                    return super.getTaskCount() + 7;
                }
            }
            Object.setPrototypeOf(softwareProject, project);
            console.log(softwareProject.getTaskCount());
            </code></pre>
            <b>softwareProject.getTaskCount() : ${softwareProject.getTaskCount()}</div>`;
            $(DEFAULT).append(newLocal);
        },
        classesStaticFunctions7 = () =>{
            class Project{
                static getDefaultId() {
                    return 0;
                }
            }
            Project.id=99;
            console.log(Project.getDefaultId());
            const newLocal = `<div class="a"><h4> Example 7 </h4> 
            <pre><code class="language-javascript">   
            class Project{
                static getDefaultId() {
                    return 0;
                }
            }
            console.log(Project.getDefaultId());
            </code></pre>
            <b>Project.getDefaultId() : ${Project.getDefaultId()} <br>
            Project.id : ${Project.id}</div>`;
            $(DEFAULT).append(newLocal);
        },
        classesTarget8 = () =>{
            class Project {
                constructor() { 
                    console.log(new.target);
                    this.strTarget = new.target;
                }
            }
            class SoftwareProject extends Project {
                constructor() {
                    super();
                }
            }
            var p = new Project();
            var m = new SoftwareProject();
            const newLocal = `<div class="a"><h4> Example 8 </h4> 
            <pre><code class="language-javascript">   
            class Project {
                constructor() { 
                    console.log(new.target);
                    this.strTarget = new.target;
                }
            }
            var p = new Project();
            </code></pre>
            <b>p.strTarget : ${p.strTarget} <br>
            m.strTarget : ${m.strTarget}  </div>`;
            $(DEFAULT).append(newLocal);
        },
        symbolSyntax = () =>{
            let eventSymbol = Symbol('resize event');
            console.log(typeof eventSymbol);
            console.log(eventSymbol.toString());

            const CALCULATE_EVENT_SYMBOL=Symbol('calculate event');
            console.log(CALCULATE_EVENT_SYMBOL.toString());

            let s = Symbol.for('event');
            console.log(s.toString());

            let s2 = Symbol('event');
            console.log(s === s2);

            let s3 = Symbol.for('event');
            console.log(s === s3);

            let description = Symbol.keyFor(s3);
            console.log(description);

            let article={
                title:'WhitefaceMountain',
                [Symbol.for('article')]:'MyArticle'
            };
            let value = article[Symbol.for('article')];
            console.log(value);

            console.log(Object.getOwnPropertySymbols(article)); 
            const newLocal = `<div class="a"> <h2> Symbol syntax </h2><h4> Example 1 </h4> 
            <pre><code class="language-javascript">   
            let eventSymbol = Symbol('resize event');
            console.log(typeof eventSymbol);
            console.log(eventSymbol.toString());
            
            // Constants
            const CALCULATE_EVENT_SYMBOL=Symbol('calculate event');
            console.log(CALCULATE_EVENT_SYMBOL.toString());

            // Using symbol registry - will create or return existing symbol with creating unique symobol for same key string.
            let s = Symbol.for('event');
            console.log(s.toString());

            // Always creates unique value.
            let s2 = Symbol('event');
            console.log(s === s2);

            // Get symbol from registry to stop stop duplicate keys.
            let s3 = Symbol.for('event');
            console.log(s === s3);

            // Get key
            let description = Symbol.keyFor(s3);
            console.log(description);

            // symbols for objects literals
            let article={
                title:'WhitefaceMountain',
                [Symbol.for('article')]:'MyArticle'
            };
            let value = article[Symbol.for('article')];
            console.log(value);

            // Can get property names but cannot use Object.getOwnPropertyNames()
            console.log(Object.getOwnPropertySymbols(article)); 
            </code></pre>
            <b>typeof eventSymbol : ${typeof eventSymbol} <br>
            eventSymbol.toString() : ${eventSymbol.toString()}<br>
            CALCULATE_EVENT_SYMBOL.toString() : ${CALCULATE_EVENT_SYMBOL.toString()} <br>
            s.toString() : ${s.toString()} <br>
            s === s2 : ${s === s2} <br>
            s === s3 : ${s === s3} <br>
            Symbol.keyFor(s3) : ${ Symbol.keyFor(s3)} <br>
            value : ${value} <br>
            Object.getOwnPropertySymbols(article) :  ${Object.getOwnPropertySymbols(article)[0].toString()}</div>`;
            $(DEFAULT).append(newLocal);
        },
        symbolSyntax1 = () =>{
            let Blog = function(){};
            let blog = new Blog();
            console.log(blog.toString());

            let Blog1 = function(){};
            Blog1.prototype[Symbol.toStringTag] = 'Blog1Class';
            let blog1 = new Blog1();
            console.log(blog1.toString());
            const newLocal = `<div class="a"><h4> Example 2 </h4> 
            <pre><code class="language-javascript">
            let Blog = function(){};
            let blog = new Blog();
            console.log(blog.toString());

            let Blog1 = function(){};
            Blog1.prototype[Symbol.toStringTag] = 'Blog1Class';
            let blog1 = new Blog1();
            console.log(blog1.toString());
            </code></pre>   
            <b>blog.toString() :  ${blog.toString()}<br>
            blog1.toString() : ${blog1.toString()}
            </div>`;
            $(DEFAULT).append(newLocal);
        },
        symbolSyntax2 = () =>{
            let values=[8,12,16];
            console.log([].concat(values));

            let values1=[8,12,16];
            values1[Symbol.isConcatSpreadable] = false;
            console.log([].concat(values1));
            const newLocal = `<div class="a"><h4> Example 2 </h4> 
            <pre><code class="language-javascript">
            let values=[8,12,16];
            console.log([].concat(values));

            let values1=[8,12,16];
            values1[Symbol.isConcatSpreadable] = false;
            console.log([].concat(values1));;
            </code></pre>   
            <b>[].concat(values) :  ${[].concat(values)}<br>
            [].concat(values1) : ${[].concat(values1)}
            </div>`;
            $(DEFAULT).append(newLocal);
        },
        objectSetPrototypeOf = () =>{
            // setPrototypeOf
            let a = {x:1};
            let b = {y:2};
            Object.setPrototypeOf(a,b);
            console.log(a.y);

            // assign
            let target = {};
            Object.assign(target,a,b);
            console.log(target);

            // not enumerable
            let target1 = {};
            Object.defineProperty(b,'c',{value:10,enumerable:false});
            Object.assign(target1,a,b);
            console.log(target1);

            // assign will not walk the prototype chain.
            b.z = 5;
            let c = {c:20};
            Object.setPrototypeOf(b, c);
            let target2 = {};
            Object.assign(target2, a, b);
            console.log(target2);
            const newLocal = `<div class="a"><h2> Object Extensions </h2><h4> Example 1 </h4> 
            <pre><code class="language-javascript">
            // setPrototypeOf
            let a = {x:1};
            let b = {y:2};
            Object.setPrototypeOf(a,b);
            console.log(a.y);

            // assign
            let target = {};
            Object.assign(target,a,b);
            console.log(target);

            // not enumerable
            let target1 = {};
            Object.defineProperty(b,'c',{value:10,enumerable:false});
            Object.assign(target1,a,b);
            console.log(target1);

            // assign will not walk the prototype chain.
            let a = {a:1}, 
            b = {a:5, b:2},
            c = {c:20};
            Object.setPrototypeOf(b, c);
            let target2 = {};
            Object.assign(target2, a, b);
            console.log(target2);

            </code></pre>   
            <b>console.log(a.y) :  ${a.y}<br>
            console.log(target) : ${JSON.stringify(target, null, 2)}<br>
            console.log(target1) : ${JSON.stringify(target1, null, 2)}<br>
            console.log(target2) : ${JSON.stringify(target2, null, 2)}
            </div>`;
            $(DEFAULT).append(newLocal);
        }, 
        objectis = () =>{
            let amount1 = NaN;
            let amount = 0, total = -0;
            
            console.log(amount1 === amount1);
            console.log(Object.is(amount, amount));
            console.log(Object.is(amount,total));

            const newLocal = `<div class="a"><h2> Object extensions - is </h2><h4> Example 1 </h4>  
            <pre><code class="language-javascript">
            let amount1 = NaN;
            let amount = 0, total = -0;
            
            console.log(amount1 === amount1);
            console.log(Object.is(amount, amount));
            console.log(Object.is(amount, total));
            </code></pre>   
            <b>amount1 === amount1 :  ${amount1 === amount1}<br>
            Object.is(amount, amount) : ${Object.is(amount, amount)}<br>
            Object.is(amount, total) : ${Object.is(amount,total)}
            </div>`;
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
        numberExtensions = () => {

            // Extensions Number.parseInt
            console.log(Number.parseInt === parseInt);
            console.log(Number.parseFloat === parseFloat);

            // NaN where it is a string 'NaN' instead of NaN
            let s = 'NaN';
            console.log(isNaN(s));
            console.log(Number.isNaN(s));

            // When variable is a number as a string.
            let s1 = '8000';
            console.log(isFinite(s1));
            console.log(Number.isFinite(s1));

            // Integer extensions
            let sum = 408.2;
            console.log(Number.isInteger(sum));
            console.log(Number.isInteger(NaN));
            console.log(Number.isInteger(Infinity));
            console.log(Number.isInteger(undefined));
            console.log(Number.isInteger(3));

            // highest integer
            let a = Math.pow(2,53)-1;
            console.log(Number.isSafeInteger(a));
            let a1 = Math.pow(2,53);
            console.log(Number.isSafeInteger(a1));

            const newLocal = `<div class="a"><h2>Number extensions </h2><h4> Example 1 </h4>  
            <pre><code class="language-javascript">
            // Extensions Number.parseInt
            console.log(Number.parseInt === parseInt);
            console.log(Number.parseFloat === parseFloat);

            // NaN where it is a string 'NaN' instead of NaN
            let s = 'NaN';
            console.log(isNaN(s));
            console.log(Number.isNaN(s));

            // When variable is a number as a string.
            let s1 = '8000';
            console.log(isFinite(s1));
            console.log(Number.isFinite(s1));

            // highest integer
            let a = Math.pow(2,53)-1;
            console.log(Number.isSafeInteger(a));
            let a1 = Math.pow(2,53);
            console.log(Number.isSafeInteger(a1));

            </code></pre>   
            <b>Number.parseInt === parseInt :  ${Number.parseInt === parseInt}<br>
            Number.parseFloat === parseFloat : ${Number.parseFloat === parseFloat}<br>
            isNaN(s) : ${isNaN(s)}<br>
            Number.isNaN(s) : ${Number.isNaN(s)}<br>
            isFinite(s1) : ${isFinite(s1)}<br>
            Number.isFinite(s1) : ${Number.isFinite(s1)}<br>
            Number.isInteger(sum) : ${Number.isInteger(sum)}<br>
            Number.isInteger(NaN) : ${Number.isInteger(NaN)}<br>
            Number.isInteger(Infinity) : ${Number.isInteger(Infinity)}<br>
            Number.isInteger(undefined) : ${Number.isInteger(undefined)}<br>
            Number.isInteger(3) : ${Number.isInteger(3)}<br>
            Number.isSafeInteger(a) (${a}) : ${Number.isSafeInteger(a)}<br>
            Number.isSafeInteger(a1) (${a1}) : ${Number.isSafeInteger(a1)}<br>
            </div>`;
            $(DEFAULT).append(newLocal);
        },
        iteratorSyntax1 = () => {
            // What is the typeof Symbol.iterator
            let ids=[9000,9001,9002];
            console.log(typeof ids[Symbol.iterator] );

            // using iterator
            let it = ids[Symbol.iterator]();
            console.log(it.next());

            // End of iteration - tha last value 
            let ids1=[9000,9001,9002];
            let it1 = ids[Symbol.iterator]();
            it1.next();
            it1.next();
            var itv = it1.next()
            console.log(itv);

            // End of iteration - Done True 
            let ids2=[9000,9001,9002];
            let it2 = ids[Symbol.iterator]();
            it2.next();
            it2.next();
            it2.next();
            var itv2 = it2.next()
            console.log(itv2);

            // Create your own iterator
            let idMaker = { 
                [Symbol.iterator]() {
                    let nextId = 8000;
                    return {
                        next() {
                            return {
                                value : nextId++,
                                done : false
                            };
                        }
                    };
                }
            };
            let it3 = idMaker[Symbol.iterator]();
            console.log(it3.next().value);
            console.log(it3.next().value);
            let it3Val = it3.next().value;
            console.log(it3Val);

            // using for...of to iterate
            let idMaker1 = {
                [Symbol.iterator]() {
                    let nextId = 8000;
                    return {
                        next() {
                            return { 
                                value: nextId++,
                                done:false
                            };
                        }
                    };
                }
            };
            let results1 = '';
            for(let v of idMaker1) {
                if(v > 8002) 
                    break;
                results1 += `${v}\n`;
            } 
            console.log(results1);

            // Using for...of to iterate with end of sequence defined in iterator
            let idMaker2 = {
                [Symbol.iterator]() {
                    let nextId = 8000;
                    return {
                        next() {
                            let value = nextId > 8002 ? undefined : nextId++;
                            let done = !value;
                            return {
                                value,
                                done
                            };
                        }
                    };
                }
            };
            let results2 = '';
            for(let v of idMaker2)
                results2 += `${v}\n`;
            console.log(results2);

            // Example of using iterator with the spread operator
            let ids3 = [8000,8001,8002];
            let idVal = 0;
            function process(id1,id2,id3) {
                idVal = id3;
                console.log(idVal);
            }
            process(...ids3);

            const newLocal = `<div class="a"><h2>Iterator</h2><h4> Example 1 </h4>  
            <pre><code class="language-javascript">
            // What is the typeof Symbol.iterator
            let ids=[9000,9001,9002];
            console.log(typeof ids[Symbol.iterator] );

            // using iterator
            let it = ids[Symbol.iterator]();
            console.log(it.next());

            // End of iteration - tha last value 
            let ids1=[9000,9001,9002];
            let it1 = ids[Symbol.iterator]();
            it1.next();
            it1.next();
            var itv = it1.next()
            console.log(itv);

            // End of iteration - Done True 
            let ids2=[9000,9001,9002];
            let it2 = ids[Symbol.iterator]();
            it2.next();
            it2.next();
            it2.next();
            var itv2 = it2.next()
            console.log(itv2);

            // Create your own iterator
            let idMaker = { 
                [Symbol.iterator]() {
                    let nextId = 8000;
                    return {
                        next() {
                            return {
                                value : nextId++,
                                done : false
                            };
                        }
                    };
                }
            };
            let it3 = idMaker[Symbol.iterator]();
            console.log(it3.next().value);
            console.log(it3.next().value);
            let it3Val = it3.next().value;
            console.log(it3Val);

            // using for...of to iterate
            let idMaker1 = {
                [Symbol.iterator]() {
                    let nextId = 8000;
                    return {
                        next() {
                            return { 
                                value: nextId++,
                                done:false
                            };
                        }
                    };
                }
            };
            let results1;
            for(let v of idMaker1) {
                if(v > 8002) 
                    break;
                results1 += \`\${v}\`;
            } 
            console.log(results1);

            // Using for...of to iterate with end of sequence defined in iterator
            let idMaker2 = {
                [Symbol.iterator]() {
                    let nextId = 8000;
                    return {
                        next() {
                            let value = nextId > 8002 ? undefined : nextId++;
                            let done = !value;
                            return {
                                value,
                                done
                            };
                        }
                    };
                }
            };
            let results2 = '';
            for(let v of idMaker2)
                results2 += \`\${v}\`;
            console.log(results2);

            // Example of using iterator with the spread operator
            let ids3 = [8000,8001,8002];
            let idVal = 0;
            function process(id1,id2,id3) {
                idVal = id3;
                console.log(idVal);
            }
            process(...ids3);

            </code></pre>   
            <b>typeof ids[Symbol.iterator]  :  ${typeof ids[Symbol.iterator]}<br>
            it.next() : ${JSON.stringify(it.next(), null, 2)}<br>
            it1.next() : ${JSON.stringify(itv, null, 2)}<br>
            it2.next() : ${JSON.stringify(itv2, null, 2)}<br>
            console.log(it3.next().value) : ${it3Val}<br>
            results1 : ${results1}<br>
            results2 : ${results2}<br>
            idVal : ${idVal}
            </div>`;
            $(DEFAULT).append(newLocal);

           
        },
        generators  = () => {
            // Using a generator example 1
            function *process() { yield 8000; yield 8001; } 
            let it = process(); 
            var result = it.next();
            console.log(result);
           
            // Using a generator example 2 - get second yielded value
            var result1 = it.next();
            console.log(result1);

            // Using a generator example 3 - reaching the end generator shut down
            var result2 = it.next();
            console.log(result2);

            // Using a generator example 4 - indefenite iterator
            function *process1() { 
                let nextId = 7000; 
                while(true) 
                    yield(nextId++); 
                
            } 
            let it1 = process1(); 
            it1.next();
            let result3 = it1.next().value;
            console.log(result3);

            // Example 5 - Using for of loop on generators
            var rst = `ids: `;
            for(let id of process1()){
                if(id > 7002) break;
                rst = rst + `${JSON.stringify(id, null, 2)}<br>`
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

            </code></pre>
            <b>example 1 immediate : in promise code - after 5 seconds setTimout : resolving... <br>
            <b>example 2 immediate : in promise code - after 5 seconds setTimout : rejecting... <br>
            <b>example 3 immediate : in promise code - after 5 seconds setTimout : resolving...OK to go... <br>
            <b>example 4 immediate : in promise code - after 5 seconds setTimout : rejecting...Internet as crashed! <br>
            <b>example 5 immediate : in promise code - after 5 seconds setTimout : resolving...OK to go...  Really....go go go....`;
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
            destructorObject16,
            classes1,
            classes2,
            classesMethods3,
            classesExpression4,
            classesExtends5,
            classesObjectLiteral6,
            classesStaticFunctions7,
            classesTarget8,
            symbolSyntax,
            symbolSyntax1,
            symbolSyntax2,
            objectSetPrototypeOf,
            objectis,
            stringExtensions,
            stringExtensionsImogi,
            numberExtensions,
            iteratorSyntax1,
            generators,
            promises
        };
    };

})(window.Gus = window.Gus || {}, 
    window.Gus.ES6 = window.Gus.ES6 || {});