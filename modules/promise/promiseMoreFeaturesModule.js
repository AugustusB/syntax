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
                500
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
    },
    promiseAll = function promiseAll(){
        // ALL promise resolved
        let pa = new Promise(function (resolve, reject) { 
            setTimeout(function () { 
                resolve('OK to go....'); 
            }, 3000); 
        });

        let pb = new Promise(function (resolve, reject) { 
            setTimeout(function () { 
                resolve('OK too! yes go....'); 
            }, 6000); 
        }); 

        Promise.all([pa, pb]).then( 
            (value) => console.log('ALL:Ok both promises done pa, pb afer 6 seconds... ' + value),
            (reason) => console.log('ALL:Nope one of the promises (pa, pb) rejected... ' + reason) 
        );
        const newLocal = `<section><h4> Example 8 ALL promise resolved</h4> 
        <pre><code class="language-javascript">   
        // ALL promise all resolve
        let pa = new Promise(function (resolve, reject) { 
            setTimeout(function () { 
                resolve('OK to go....'); 
            }, 3000); 
        });

        let pb = new Promise(function (resolve, reject) { 
            setTimeout(function () { 
                resolve('OK too! yes go....'); 
            }, 6000); 
        }); 

        Promise.all([pa, pb]).then( 
            function (value) { console.log('ALL:Ok both promises done pa, pb afer 6 seconds... ' + value) }, 
            function (reason) { console.log('ALL:Nope one of the promises (pa, pb) rejected... ' + reason) } 
        );
        </code></pre>
        </section>
        <aside class="text-info bg-light mb-3">
            <cite title="Results">Result - </cite>&#9632; ALL:Ok both promises done pa, pb afer 6 seconds... OK to go....,OK too! yes go.... &#9632;
        </aside>`;
        $(this.examplesCtl).append(newLocal); 
    },
    pormiseAllSecondRejected = function promiseAllSecondRejected(){
        // ALL promise 1st resloved afer 1sec then 2nd rejected after 7sec 
        let pa = new Promise(function (resolve, reject) { 
            setTimeout(function () { 
                resolve('OK to go....'); 
            }, 1000); 
        });

        let pb = new Promise(function (resolve, reject) { 
            setTimeout(function () { 
                reject('Nope! No go....'); 
            }, 7000); 
        }); 

        Promise.all([pa, pb]).then( 
            (value) => console.log('ALL:Ok both promises done pa, pb afer 7 sec... ' + value), 
            (reason) => console.log('ALL:Nope one of the promises (pa, pb) rejected after 7sec... ' + reason) 
        );
        const newLocal = `<section><h4> Example 9 ALL promise 1st resloved afer 1sec then 2nd rejected after 7sec</h4> 
        <pre><code class="language-javascript">   
        // ALL promise 1st resloved afer 1sec then 2nd rejected after 7sec 
        let pa = new Promise(function (resolve, reject) { 
            setTimeout(function () { 
                resolve('OK to go....'); 
            }, 1000); 
        });

        let pb = new Promise(function (resolve, reject) { 
            setTimeout(function () { 
                reject('Nope! No go....'); 
            }, 7000); 
        }); 

        Promise.all([pa, pb]).then( 
            (value) => console.log('ALL:Ok both promises done pa, pb afer 7 sec... ' + value), 
            (reason) => console.log('ALL:Nope one of the promises (pa, pb) rejected after 7sec... ' + reason)  
        );
        </code></pre>
        </section>
        <aside class="text-info bg-light mb-3">
            <cite title="Results">Result - </cite>&#9632; ALL:Nope one of the promises (pa, pb) rejected after 7sec... Nope! No go.... &#9632;
        </aside>`;
        $(this.examplesCtl).append(newLocal); 
    },
    promiseAllBothRejected = function promiseAllBothRejected(){
        // ALL promise 1st rejected afer 7sec then 2nd rejected after 10sec 
        let pa = new Promise(function (resolve, reject) { 
            setTimeout(function () { 
                reject('Nope! No go after 7 secs.....'); 
            }, 7000); 
        });

        let pb = new Promise(function (resolve, reject) {  
            setTimeout(function () { 
                reject('Nope. No go after 10 secs....'); 
            }, 10000); 
        }); 

        Promise.all([pa, pb]).then( 
            (value) => console.log('ALL:Ok both promises done pa, pb resolved... ' + value), 
            (reason) => console.log('ALL:Nope 1st of the promises (pa, pb) rejected... ' + reason) 
        );
        const newLocal = `<section><h4> Example 10 ALL promise 1st rejected afer 7sec then 2nd rejected after 10sec </h4> 
        <pre><code class="language-javascript">   
        // ALL promise 1st rejected afer 7sec then 2nd rejected after 10sec 
        let pa = new Promise(function (resolve, reject) { 
            setTimeout(function () { 
                reject('Nope! No go after 7 secs.....'); 
            }, 7000); 
        });

        let pb = new Promise(function (resolve, reject) {  
            setTimeout(function () { 
                reject('Nope. No go after 10 secs....'); 
            }, 10000); 
        }); 

        Promise.all([pa, pb]).then( 
            (value) => console.log('ALL:Ok both promises done pa, pb resolved... ' + value), 
            (reason) => console.log('ALL:Nope 1st of the promises (pa, pb) rejected... ' + reason) 
        );
        </code></pre>
        </section>
        <aside class="text-info bg-light mb-3">
            <cite title="Results">Result - </cite>&#9632; ALL:Nope 1st of the promises (pa, pb) rejected...  Nope! No go after 7 secs..... &#9632;
        </aside>`;
        $(this.examplesCtl).append(newLocal); 
    },
    raceBothResolve = function raceBothResolve(){
        // RACE promise 1st resolved afer 7sec then 2nd resolved after 10sec 
        let pa = new Promise(function (resolve, reject) { 
            setTimeout(function () { 
                resolve('Yes pa. Ok go..... '); 
            }, 7000); 
        });

        let pb = new Promise(function (resolve, reject) { 
            setTimeout(function () { 
                resolve('Yes pb. Ok go.... '); 
            }, 10000); 
        }); 

        Promise.race([pa, pb]).then( 
            (value) =>  console.log('RACE:Ok 1st promises done after 7 sec (pa, pb)... ' + value), 
            (reason) =>  console.log('Nope promises (pa, pb) rejected... ' + reason)
        );
        const newLocal = `<section><h4> Example 11 RACE promise 1st resolved afer 7sec then 2nd resolved after 10sec  </h4> 
        <pre><code class="language-javascript">   
        // RACE promise 1st resolved afer 7sec then 2nd resolved after 10sec 
        let pa = new Promise(function (resolve, reject) { 
            setTimeout(function () { 
                resolve('Yes pa. Ok go..... '); 
            }, 7000); 
        });

        let pb = new Promise(function (resolve, reject) { 
            setTimeout(function () { 
                resolve('Yes pb. Ok go.... '); 
            }, 10000); 
        }); 

        Promise.race([pa, pb]).then( 
            (value) =>  console.log('RACE:Ok 1st promises done after 7 sec (pa, pb)... ' + value), 
            (reason) =>  console.log('Nope promises (pa, pb) rejected... ' + reason)
        );
        </code></pre>
        </section>
        <aside class="text-info bg-light mb-3">
            <cite title="Results">Result - </cite>&#9632; 'RACE:Ok 1st promises done after 7 sec (pa, pb)...  Yes pa. Ok go..... &#9632;
        </aside>`;
        $(this.examplesCtl).append(newLocal); 
        
    },
    raceRejectResolve = function raceRejectResolve(){
        // RACE promise 1st rejected afer 7sec then 2nd resolved after 10sec 
        let pa = new Promise(function (resolve, reject) { 
            setTimeout(function () { 
                reject('Nope pa. On go..... '); 
            }, 7000); 
        });

        let pb = new Promise(function (resolve, reject) { 
            setTimeout(function () { 
                resolve('Yes pb. Ok go.... '); 
            }, 10000); 
        }); 

        Promise.race([pa, pb]).then( 
            (value) =>  console.log('RACE:promises resolved after 10 sec (pa, pb)... ' + value), 
            (reason) => console.log('RACE:Nope 1st promises rejected after 7 sec (pa, pb)... ' + reason)  
        );  
        const newLocal = `<section><h4> Example 12 RACE promise 1st rejected afer 7sec then 2nd resolved after 10sec </h4> 
        <pre><code class="language-javascript">   
        // RACE promise 1st rejected afer 7sec then 2nd resolved after 10sec 
        let pa = new Promise(function (resolve, reject) { 
            setTimeout(function () { 
                reject('Nope pa. On go..... '); 
            }, 7000); 
        });

        let pb = new Promise(function (resolve, reject) { 
            setTimeout(function () { 
                resolve('Yes pb. Ok go.... '); 
            }, 10000); 
        }); 

        Promise.race([pa, pb]).then( 
            (value) =>  console.log('RACE:promises resolved after 10 sec (pa, pb)... ' + value), 
            (reason) => console.log('RACE:Nope 1st promises rejected after 7 sec (pa, pb)... ' + reason)  
        );  
        </code></pre>
        </section>
        <aside class="text-info bg-light mb-3">
            <cite title="Results">Result - </cite>&#9632; 'RACE:Nope 1st promises rejected after 7 sec (pa, pb)... Nope pa. On go..... &#9632;
        </aside>`;
        $(this.examplesCtl).append(newLocal);  
    };
    return {
        callAnotherPormise,
        noAsyncCallNeeded,
        promiseAll,
        pormiseAllSecondRejected,
        promiseAllBothRejected,
        raceBothResolve,
        raceRejectResolve
    }
}();

let PromiseMoreFeatureExamples = ns1.PromiseMoreFeatureExamples;
export {PromiseMoreFeatureExamples as default};