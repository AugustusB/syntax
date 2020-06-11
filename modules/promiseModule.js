var ns1 = window.Gus.ES6 || {};

ns1.PromiseExamples = function PromiseExamples(control) {
    this.examplesCtl = control;
}

ns1.PromiseExamples.prototype = function() {
    var promiseResolve = function promiseResolve() {
        // promise resolve
        function doAsync() { 
            let p = new Promise(function (resolve, reject) { 
                setTimeout(
                    function () { 
                        console.log('resolving...'); 
                        resolve(); 
                    }, 
                    5000
                ); 
            }); 
            return p; 
        }
        doAsync();
        const newLocal = `<section><h2> Promises </h2><h4> Example 1 promise resolve</h4> 
        <pre><code class="language-javascript">   
        // promise resolve
        function doAsync() { 
            let p = new Promise(function (resolve, reject) { 
                setTimeout(
                    function () { 
                        console.log('resolving...'); 
                        resolve(); 
                    }, 
                    5000
                ); 
            }); 
            return p; 
        }
        doAsync();   
        </code></pre>
        </section>
        <aside class="text-info bg-light mb-3">
            <cite title="Results">Result - </cite>&#9632; resolving... &#9632;
        </aside>`;
        $(this.examplesCtl).append(newLocal); 
    },
    promiseReject = function promiseReject() {
        // promise reject
        function doAsync() { 
            let p = new Promise(function (resolve, reject){ 
                setTimeout(
                    function () { 
                        console.log('rejecting...'); 
                        reject(); 
                    }, 
                    5000
                );
            }); 
            return p; 
        }
        doAsync().catch(function(){});
        const newLocal = `<section><h4> Example 2 promise reject</h4> 
        <pre><code class="language-javascript">   
        // promise reject
        function doAsync() { 
            let p = new Promise(function (resolve, reject){ 
                setTimeout(
                    function () { 
                        console.log('rejecting...'); 
                        reject(); 
                    }, 
                    5000
                );
            }); 
            return p; 
        }
        doAsync();
        </code></pre>
        </section>
        <aside class="text-info bg-light mb-3">
            <cite title="Results">Result - </cite>&#9632; rejecting... &#9632;
        </aside>`;
        $(this.examplesCtl).append(newLocal); 
    },

    resolveWithPara = function resolveWithPara(){
        // promise resolve called with parameter
        function doAsync() { 
            let p = new Promise(
                function (resolve, reject) {  
                    setTimeout(
                        function () { 
                            resolve('OK to go....'); 
                        }, 
                        5000
                    ); 
                }
            ); 
            return p; 
        }
        doAsync().then(
            function(value){
                console.log('fullfilled....' + value);
            },
            function(reason){
                console.log('rejecting....' + reason);
            }
        );
        const newLocal = `<section><h4> Example 3 promise resolve called with parameter</h4> 
        <pre><code class="language-javascript">   
        // promise resolve called with parameter
        function doAsync() { 
            let p = new Promise(
                function (resolve, reject) {  
                    setTimeout(
                        function () { 
                            resolve('OK to go....'); 
                        }, 
                        5000
                    ); 
                }
            ); 
            return p; 
        }
        doAsync().then(function(value){
                console.log('fullfilled....' + value);
            },
            function(reason){
                console.log('rejecting....' + reason);
            }
        );
        </code></pre>
        </section>
        <aside class="text-info bg-light mb-3">
            <cite title="Results">Result - </cite>&#9632; fullfilled... OK to go....&#9632;
        </aside>`;
        $(this.examplesCtl).append(newLocal); 
    },
    rejectWithPara = function rejectWithPara(){
        // promise reject with parameters.
        function doAsync4() { 
            let p = new Promise(
                function (resolve, reject){ 
                    setTimeout(
                        function () { 
                            reject('Internet has crashed!'); 
                        }, 
                        5000
                    ); 
                }
            ); 
            return p; 
        }
        doAsync4().then(function(value){
                console.log('fullfilled....' + value);
            },
            function(reason){
                console.log('rejecting....' + reason);
            }
        ); 
        const newLocal = `<section><h4> Example 3 promise reject with parameters.</h4> 
        <pre><code class="language-javascript">   
        // promise reject with parameters.
        function doAsync4() { 
            let p = new Promise(
                function (resolve, reject){ 
                    setTimeout(
                        function () { 
                            reject('Internet has crashed!'); 
                        }, 
                        5000
                    ); 
                }
            ); 
            return p; 
        }
        doAsync4().then(function(value){
                console.log('fullfilled...' + value);
            },
            function(reason){
                console.log('rejecting...' + reason);
            }
        ); 
        </code></pre>
        </section>
        <aside class="text-info bg-light mb-3">
            <cite title="Results">Result - </cite>&#9632; rejecting... Internet has crashed! &#9632;
        </aside>`;
        $(this.examplesCtl).append(newLocal); 
    },
    chainingThen = function chainingThen(){
        // promise resolve chaining then fuctions
        function doAsync() { 
            let p = new Promise(
                function (resolve, reject) { 
                    setTimeout(
                        function () { 
                            resolve('OK to go....'); 
                        }, 
                        5000
                    ); 
                }
            ); 
            return p; 
        }
        doAsync().then(function(value){
                console.log('fullfilled....' + value);
                return 'gone, gone, gone....';
            }
        ).then(function(value){
                console.log('Really....' + value);
            }
        )
        const newLocal = `<section><h4> Example 4 promise resolve chaining then fuctions.</h4> 
        <pre><code class="language-javascript">   
        // promise resolve chaining then fuctions
        function doAsync() { 
            let p = new Promise(
                function (resolve, reject) { 
                    setTimeout(
                        function () { 
                            resolve('OK to go....'); 
                        }, 
                        5000
                    ); 
                }
            ); 
            return p; 
        }
        doAsync().then(function(value){
                console.log('fullfilled....' + value);
                return 'gone, gone, gone....';
            }
        ).then(function(value){
                console.log('Really....' + value);
            }
        )
        </code></pre>
        </section>
        <aside class="text-info bg-light mb-3">
            <cite title="Results">Result - </cite>&#9632; fullfilled....OK to go.... &#9632;
            <br>&#9632; Really....gone, gone, gone.... &#9632;
        </aside>`;
        $(this.examplesCtl).append(newLocal); 
    },

    rejectWithCatch = function rejectWithCatch(){

        // promise reject with catch 
        function doAsync() { 
            let p = new Promise(
                function (resolve, reject) { 
                    setTimeout(
                        function () { 
                            reject('Nope no go....'); 
                        }, 
                        5000
                    ); 
                }
            ); 
            return p; 
        }
        doAsync().catch(
            function(reason){console.log('Error : ' + reason);}
        ).then(
            function(value){console.log('fulfilled....' + value);},
            function(resaon){console.log('rejected 1st then....' + resaon);}
        ).then(
            function(value){console.log('Really....' + value);},
            function(resaon){console.log('rejected 2nd then ....' + resaon);}
        );

        const newLocal = `<section><h4> Example 5 promise reject with catch </h4> 
        <pre><code class="language-javascript">   
        // promise reject with catch 
        function doAsync() { 
            let p = new Promise(
                function (resolve, reject) { 
                    setTimeout(
                        function () { 
                            reject('Nope no go....'); 
                        }, 
                        5000
                    ); 
                }
            ); 
            return p; 
        }
        doAsync().catch(
            function(reason){console.log('Error : ' + reason);}
        ).then(
            function(value){console.log('fulfilled....' + value);},
            function(resaon){console.log('rejected 1st then....' + resaon);}
        ).then(
            function(value){console.log('Really....' + value);},
            function(resaon){console.log('rejected 2nd then ....' + resaon);}
        );
        </code></pre>
        </section>
        <aside class="text-info bg-light mb-3">
            <cite title="Results">Result - </cite>&#9632; Error : Nope no go.... &#9632;
        </aside>`;
        $(this.examplesCtl).append(newLocal); 
    };
    return {
        promiseResolve,
        promiseReject,
        resolveWithPara,
        rejectWithPara,
        chainingThen,
        rejectWithCatch
    }
}();

let PromiseExamples = ns1.PromiseExamples;
export {PromiseExamples as default};

 