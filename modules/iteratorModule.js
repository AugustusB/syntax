var ns1 = window.Gus.ES6 || {};

ns1.IteratorsExamples = function IteratorsExamples(control) {
    this.examplesCtl = control;
} 

ns1.IteratorsExamples.prototype = function(){
    var iteratorTypeof =  function iteratorTypeof(){ 
        // What is the typeof Symbol.iterator
        let ids=[9000,9001,9002];
        console.log(`typeof ids[Symbol.iterator]: ${typeof ids[Symbol.iterator]}`);

        // using iterator
        let it = ids[Symbol.iterator]();
        let item = it.next();
        console.log(`JSON.stringify(item): ${JSON.stringify(item)}`);

        const newLocal = `<section> <h2> Iterators </h2><h4> Example 1 typeof and using iterator</h4> 
        <pre><code class="language-javascript">   
        let ids=[9000,9001,9002];
        console.log(\`typeof ids[Symbol.iterator]: \${typeof ids[Symbol.iterator]}\`);

        let it = ids[Symbol.iterator]();
        console.log(\`JSON.stringify(item): \${JSON.stringify(item)}\`);
        </code></pre>
        </section>
        <aside class="text-info bg-light mb-3">
            <cite title="Results">Result - </cite>&#9632; typeof ids[Symbol.iterator]: ${typeof ids[Symbol.iterator]} &#9632;
            <br>&#9632; JSON.stringify(item): ${JSON.stringify(item)} &#9632;
        </aside>`;
        $(this.examplesCtl).append(newLocal);   
    },
    iterating = function iterating(){
        // End of iteration - the last value and Done true
        let ids1=[9000,9001,9002];
        let it1 = ids1[Symbol.iterator]();
        it1.next();
        it1.next();
        var itv = it1.next()
        console.log(`JSON.stringify(itv): ${JSON.stringify(itv)}`);
        var itv1 = it1.next()
        console.log(`JSON.stringify(itv1): ${JSON.stringify(itv1)}`);
        const newLocal = `<section><h4> Example 2 the last value and Done true</h4> 
        <pre><code class="language-javascript">   
        let ids1=[9000,9001,9002];
        let it1 = ids1[Symbol.iterator]();
        it1.next();
        it1.next();
        var itv = it1.next()
        console.log(\`JSON.stringify(itv): \${JSON.stringify(itv)}\`);
        var itv1 = it1.next()
        console.log(\`JSON.stringify(itv1): \${JSON.stringify(itv1)}\`);
        </code></pre>
        </section>
        <aside class="text-info bg-light mb-3">
            <cite title="Results">Result - </cite>&#9632; JSON.stringify(itv): ${JSON.stringify(itv)} &#9632;
            <br>&#9632; JSON.stringify(itv1): ${JSON.stringify(itv1)} &#9632;
            <br>&#9632; JSON.stringify(itv1.value): ${JSON.stringify(itv1.value)} &#9632;
        </aside>`;
        $(this.examplesCtl).append(newLocal);   

    },
    iteratorCreation = function iteratorCreation(){
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
        console.log(`it3Val: ${it3Val}`);

        // using for...of to iterate
        let results1 = '',
            count = 0;
        for(let v of idMaker) {
            count++
            if(v > 8002) 
                break;
            results1 += `item-${count}: ${v}<br>`;
        } 
        console.log(results1);
        const newLocal = `<section><h4> Example 3 Create your own iterator and using for...of</h4> 
        <pre><code class="language-javascript">   
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
        console.log(\`it3Val: \${it3Val}\`);

        // using for...of to iterate
        let results1 = ''
            count = 3;
        for(let v of idMaker) {
            count++
            if(v > 8002) 
                break;
            results1 += \`item-${count}: \${v}\`;
        } 
        console.log(results1);
        </code></pre>
        </section>
        <aside class="text-info bg-light mb-3">
            <cite title="Results">Result - </cite>&#9632; it3Val: ${it3Val} &#9632;
            <br>&#9632; Items iterated: ${results1} &#9632;
        </aside>`;
        $(this.examplesCtl).append(newLocal);   
    },
    iteratorCreateWithEndDefined = function iteratorCreatWithEndDefined(){
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
            results2 += `item: ${v}<br>`;
        console.log(`results2: ${results2}`);
        const newLocal = `<section><h4> Example 4 Using for...of to iterate with end of sequence defined in iterator</h4> 
        <pre><code class="language-javascript">   
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
            results2 += \`item: \${v}\`;
        console.log(\`results2: \${results2}\`);
        </code></pre>
        </section>
        <aside class="text-info bg-light mb-3">
            <cite title="Results">Result - </cite>&#9632; results2: ${results2} &#9632;
        </aside>`;
        $(this.examplesCtl).append(newLocal);   
    },
    iteratorWithSpreadOp = function iteratorWithSpreadOp(){ 
        // Example of using iterator with the spread operator
        let ids = [8000,8001,8002];
        let process = (id1,id2,id3) => id3;
        let val = process(...ids);
        console.log(`val: ${val}`);
        const newLocal = `<section><h4> Example 5 Example of using iterator with the spread operator</h4> 
        <pre><code class="language-javascript">   
        let ids = [8000,8001,8002];
        let process = (id1,id2,id3) => id3;
        let val = process(...ids);
        console.log(\`val: \${val}\`);
        </code></pre>
        </section>
        <aside class="text-info bg-light mb-3">
            <cite title="Results">Result - </cite>&#9632; val: ${val} &#9632;
        </aside>`;
        $(this.examplesCtl).append(newLocal);
    };
    return {
        iteratorTypeof,
        iterating,
        iteratorCreation,
        iteratorCreateWithEndDefined,
        iteratorWithSpreadOp
    }
}();

let IteratorsExamples = ns1.IteratorsExamples;
export {IteratorsExamples as default};