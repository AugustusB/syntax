import PromiseExamples from "../promiseModule.js";
var ns1 = window.Gus.ES6 || {}

ns1.PromiseMoreFeatureExamples = function PromiseMoreFeatureExamples(control){
    PromiseExamples.call(this, control);
}

ns1.PromiseMoreFeatureExamples.prototype = Object.create(PromiseExamples.prototype);
ns1.PromiseMoreFeatureExamples.constructor = ns1.PromiseMoreFeatureExamples;

ns1.PromiseMoreFeatureExamples.prototype = function(){
    var callAnotherPormise = function callAnotherPormise(){
         // promise call another promise
         function doAsync() { 
            let p = new Promise(function (resolve, reject) { 
                setTimeout(function () { 
                    resolve(getAnotherPromisePrivate()); 
                }, 5000); 
            }); 
            return p; 
        }
        doAsync().catch(
            function(){console.log('Error : ');}
        ).then(
            function(){console.log('fulfilled....');},
            function(){console.log('rejected 1st then....');}
        );
        const newLocal = `<section><h4> Example 6 promise call another promise </h4> 
        <pre><code class="language-javascript">   
        // promise call another promise
         function doAsync() { 
            let p = new Promise(function (resolve, reject) { 
                setTimeout(function () { 
                    resolve(getAnotherPromisePrivate()); 
                }, 5000); 
            }); 
            return p; 
        }
        doAsync().catch(
            function(){console.log('Error : ');}
        ).then(
            function(){console.log('fulfilled....');},
            function(){console.log('rejected 1st then....');}
        );
        </code></pre>
        </section>
        <aside class="text-info bg-light mb-3">
            <cite title="Results">Result - </cite>&#9632; fulfilled.... &#9632;
        </aside>`;
        $(this.examplesCtl).append(newLocal); 
    }, 
    getAnotherPromisePrivate = function getAnotherPromisePrivate(){
        // Default to fullfil
        let p = new Promise(function (resolve, reject) { 
            setTimeout(
                function () { 
                    resolve(); 
                }, 
                6000
            ); 
        }); 
        return p; 
    },
    noAsyncCallNeeded = function noAsyncCallNeeded(){
        // resolved without waiting for work to complete using static functions on Promise
        function doAsync() { 
            return Promise.resolve('resolve called in promises....'); 
        }
        doAsync().then( 
            (value) => console.log('Ok: ' + value), 
            (reason) => console.log('Nope: ' + reason)
        );

        // Reject without waiting for work to complete using static functions on Promise
        function doAsync1() { 
            return Promise.reject('reject called in promise....'); 
        }
        doAsync1().then( 
            (value) => console.log('Ok: ' + value), 
            (reason) => console.log('Nope: ' + reason)
        );
        const newLocal = `<section><h4> Example 7 resolved/reject without waiting for work to complete using static functions on Promise</h4> 
        <pre><code class="language-javascript">   
        // resolved without waiting for work to complete using static functions
        function doAsync() { 
            return Promise.resolve('resolve called in promises....'); 
        }
        doAsync().then( 
            (value) => console.log('Ok: ' + value), 
            (reason) => console.log('Nope: ' + reason)
        );

        // Reject without waiting for work to complete using static functions
        function doAsync1() { 
            return Promise.reject('reject called in promise....'); 
        }
        doAsync1().then( 
            (value) => console.log('Ok: ' + value), 
            (reason) => console.log('Nope: ' + reason)
        );
        </code></pre>
        </section>
        <aside class="text-info bg-light mb-3">
            <cite title="Results">Result - </cite>&#9632; Ok: resolve called in promises.... &#9632;
            <br>&#9632; Nope: reject called in promises.... &#9632;
        </aside>`;
        $(this.examplesCtl).append(newLocal); 
    };
    return {
        callAnotherPormise,
        noAsyncCallNeeded,
    }
}();

let PromiseMoreFeatureExamples = ns1.PromiseMoreFeatureExamples;
export {PromiseMoreFeatureExamples as default};