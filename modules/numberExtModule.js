var ns1 = window.Gus.ES6 || {}

ns1.NumberExtensions = function NumberExtensions(control){
    this.examplesCtl = control;
}

ns1.NumberExtensions.prototype = function(){
    var numberExtensionsParseInt = function numberExtensionsParseInt(){
        // Extensions Number.parseInt
        console.log(`Number.parseInt === parseInt: ${Number.parseInt === parseInt}`);
        console.log(`Number.parseFloat === parseFloat: ${Number.parseFloat === parseFloat}`);
        const newLocal = `<section><h2>Number extensions </h2><h4> Example 1 </h4>  
        <pre><code class="language-javascript">
        // Extensions Number.parseInt
        console.log(\`Number.parseInt === parseInt: \${Number.parseInt === parseInt}\`);
        console.log(\`Number.parseFloat === parseFloat: \${Number.parseFloat === parseFloat}\`);
        </code></pre>   
        </section>
        <aside class="text-info bg-light mb-3">
            <cite title="Results">Result - </cite>&#9632; Number.parseInt === parseInt :  ${Number.parseInt === parseInt}} &#9632;
            <br>&#9632; Number.parseFloat === parseFloat : ${Number.parseFloat === parseFloat} &#9632; 
        </aside>`;
        $(this.examplesCtl).append(newLocal);
    }, 
    numberExtensionsNan = function numberExtensionsNan(){
        // NaN where it is a string 'NaN' instead of NaN
        let s = 'NaN';
        console.log(`isNaN(s): ${isNaN(s)}`);
        console.log(`Number.isNaN(s): ${Number.isNaN(s)}`);
        const newLocal = `<section><h4> Example 2 </h4>  
        <pre><code class="language-javascript">
        // NaN where it is a string 'NaN' instead of NaN
        let s = 'NaN';
        console.log(\`isNaN(s): \${isNaN(s)}\`);
        console.log(\`Number.isNaN(s): \${Number.isNaN(s)}\`);
        </code></pre>   
        </section>
        <aside class="text-info bg-light mb-3">
            <cite title="Results">Result - </cite>&#9632; isNaN(s) : ${isNaN(s)} &#9632;
            <br>&#9632; Number.isNaN(s) : ${Number.isNaN(s)} &#9632; 
        </aside>`;
        $(this.examplesCtl).append(newLocal);
    },
    numberExtensionsIsFinite = function numberExtensionsIsFinite(){
        // When variable is a number as a string.
        let s1 = '8000';
        console.log(`isFinite(s1): ${isFinite(s1)}`);
        console.log(`Number.isFinite(s1): ${Number.isFinite(s1)}`);
        const newLocal = `<section><h4> Example 3 </h4>  
        <pre><code class="language-javascript">
        // When variable is a number as a string.
        let s1 = '8000';
        console.log(\`isFinite(s1): \${isFinite(s1)}\`);
        console.log(\`Number.isFinite(s1): \${Number.isFinite(s1)}\`);
        </code></pre>   
        </section>
        <aside class="text-info bg-light mb-3">
            <cite title="Results">Result - </cite>&#9632; isFinite(s1) : ${isFinite(s1)} &#9632;
            <br>&#9632; Number.isFinite(s1) : ${Number.isFinite(s1)} &#9632; 
        </aside>`;
        $(this.examplesCtl).append(newLocal);
    },
    numberExtensionsIsInteger = function numberExtensionsIsInteger(){
        // Integer extensions
        let sum = 408.2;
        console.log(`Number.isInteger(sum): ${Number.isInteger(sum)}`);
        console.log(`Number.isInteger(NaN): ${Number.isInteger(NaN)}`);
        console.log(`Number.isInteger(Infinity): ${Number.isInteger(Infinity)}`);
        console.log(`Number.isInteger(undefined): ${Number.isInteger(undefined)}`);
        console.log(`Number.isInteger(3): ${Number.isInteger(3)}`);
        const newLocal = `<section><h4> Example 4 </h4>  
        <pre><code class="language-javascript">
        let sum = 408.2;
        console.log(\`Number.isInteger(sum): \${Number.isInteger(sum)}\`);
        console.log(\`Number.isInteger(NaN): \${Number.isInteger(NaN)}\`);
        console.log(\`Number.isInteger(Infinity): \${Number.isInteger(Infinity)}\`);
        console.log(\`Number.isInteger(undefined): \${Number.isInteger(undefined)}\`);
        console.log(\`Number.isInteger(3): \${Number.isInteger(3)}\`);
        </code></pre>   
        </section>
        <aside class="text-info bg-light mb-3">
            <cite title="Results">Result - </cite>&#9632; Number.isInteger(sum) : ${Number.isInteger(sum)} &#9632;
            <br>&#9632; Number.isInteger(NaN) : ${Number.isInteger(NaN)} &#9632; 
            <br>&#9632; Number.isInteger(Infinity) : ${Number.isInteger(Infinity)} &#9632; 
            <br>&#9632; Number.isInteger(undefined) : ${Number.isInteger(undefined)} &#9632;
            <br>&#9632; Number.isInteger(3) : ${Number.isInteger(3)} &#9632;
        </aside>`;
        $(this.examplesCtl).append(newLocal);
    },
    numberExtensionsHighestInteger = function numberExtensionsHighestInteger(){
        // highest integer
        let a = Math.pow(2,53)-1;
        console.log(`Number.isSafeInteger(a): ${Number.isSafeInteger(a)}`);
        let a1 = Math.pow(2,53);
        console.log(`Number.isSafeInteger(a1): ${Number.isSafeInteger(a1)}`);
        const newLocal = `<section><h4> Example 5 </h4>  
        <pre><code class="language-javascript">
        // highest integer
        let a = Math.pow(2,53)-1;
        console.log(\`Number.isSafeInteger(a): \${Number.isSafeInteger(a)}\`);
        let a1 = Math.pow(2,53);
        console.log(\`Number.isSafeInteger(a1): \${Number.isSafeInteger(a1)}\`);
        </code></pre>   
        </section>
        <aside class="text-info bg-light mb-3">
            <cite title="Results">Result - </cite>&#9632; Number.isSafeInteger(a) (${a}) : ${Number.isSafeInteger(a)} &#9632;
            <br>&#9632; Number.isSafeInteger(a1) (${a1}) : ${Number.isSafeInteger(a1)} &#9632; 
        </aside>`;
        $(this.examplesCtl).append(newLocal);
    };
    return {
        numberExtensionsParseInt,
        numberExtensionsNan,
        numberExtensionsIsFinite,
        numberExtensionsIsInteger,
        numberExtensionsHighestInteger
    }
}();

let NumberExtensions = ns1.NumberExtensions;
export {NumberExtensions as default}