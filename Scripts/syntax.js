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
            $(DEFAULT).append(`<div>  <h3> REST opperator </h3> function showCategories(productId,...categories) \` $\{categories instanceof Array\}\` : ${categories instanceof Array}</div>`);
            

        },
        spreadOpperator1 = () => {
            var prices=[12,20,18];
            var maxPrice=Math.max(...prices);
            console.log(maxPrice);
            $(DEFAULT).append(`<div> <h2> Spread opperator </h2><h4> Example 1 </h4>
            var prices=[12,20,18];
            var maxPrice=Math.max(...prices);
            console.log(maxPrice);
            <b>maxPrice ${maxPrice}</div>`);
        },
        spreadOpperator2 = (prices) => {
            $(DEFAULT).append(`<div> <h4> Example 2 </h4>      
                varprices=[12,20,18];
                varnewPriceArray=[...prices];
                console.log(newPriceArray);
                </div>`
            );
           for (var arr of [...prices]) {
                $(DEFAULT).append(`<div> <b>Array Item : ${arr}</div>`) 
            }
        },
        spreadOpperator3 = (prices) => {
            $(DEFAULT).append(`<div> <h4> Example 3 </h4>      
                var newPriceArray=Array(...[,,]);
                console.log(newPriceArray);
                </div>`
            );
            var i = Array(...prices);
           for (var arr of Array(...prices)) {
                $(DEFAULT).append(`<div> <b>Array Item : ${arr}</div>`) 
            }
        },
        spreadOpperator4 = (str) => {
            $(DEFAULT).append(`<div> <h4> Example 4 </h4>    
                var maxCode=Math.max(..."43210"); 
                console.log(maxCode);
                <b>Math.max(..."43210") : ${Math.max(...str)}</div>`
            );
        },
        objectLiteral1 = () =>{
            var price=5.99,quantity=30; 
            $(DEFAULT).append(`<div> <h2> Object Literals </h2><h4> Example 1 </h4>    
            var price=5.99,quantity=30; 
            var productView={price,quantity};
            console.log(productView);
            <b>JSON.stringify({price,quantity}) : ${JSON.stringify({price,quantity})}</div>`
            );
        },
        objectLiteral2 = () =>{
            var price=5.99,quantity=10;
            var productView={
                price,
                quantity,
                calculateValue(){
                    return this.price*this.quantity
                }
            };
            console.log(productView.calculateValue()); 
            $(DEFAULT).append(`<div> <h4> Example 2 </h4>var price=5.99,quantity=10;var productView={price,quantity,calculateValue(){returnthis.price*this.quantity}};console.log(productView.calculateValue());
            <b>productView.calculateValue()) : ${productView.calculateValue()}</div>`
            );
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
            objectLiteral2
        };
    };

})(window.Gus = window.Gus || {}, 
    window.Gus.ES6 = window.Gus.ES6 || {});