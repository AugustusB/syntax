var ns1 = window.Gus.ES6 || {}

ns1.ArrayExtClass = class ArrayExtClass{
    constructor(control){
        this.exampleCtl = control;
    }
    compareWayToInitialse(){
        // old way sets length of array not value
        let salaries1 = Array(90000); 
        console.log(salaries1.length);

        // New way of setting values.
        let salaries2 = Array.of(90000); 
        console.log(salaries2.length);

        const newLocal = `<section><h2> Array Extensions </h2><h4> Example 1 old way sets length of array not value</h4> 
        <pre><code class="language-javascript">
        // old way sets length of array not value
        let salaries1 = Array(90000); 
        console.log(\`salaries1.length: \${salaries1.length}\`);

        // New way of setting values.
        let salaries2 = Array.of(90000); 
        console.log(\`salaries2.length: \${salaries2.length}\`);
        </code></pre>
        </section>
        <aside class="text-info bg-light mb-3">
            <cite title="Results">Result - </cite>&#9632; salaries1.length:  ${salaries1.length} &#9632;
            <br>&#9632; salaries2.length: ${salaries2.length} &#9632;            
        </aside>`;  
        $(this.exampleCtl).append(newLocal);
    }
    increaseAllItems(increaseBy) {
        // Increase all items in array by increaseBy.
        let amounts = [800, 810, 820]; 
        let salaries3 = Array.from(amounts, v => v + increaseBy ); 
        console.log(`salaries3: ${JSON.stringify(salaries3, null, 2)}`);

        const newLocal = `<section><h4> Example 2 Increase all items in array by increaseBy</h4>  
        <pre><code class="language-javascript">
        // Increase all items in array by increaseBy.
        let amounts = [800, 810, 820]; 
        let salaries3 = Array.from(amounts, v => v + increaseBy ); 
        console.log(\`salaries3: \${JSON.stringify(salaries3, null, 2)}\`);
        </code></pre>   
        </section>
        <aside class="text-info bg-light mb-3">
            <cite title="Results">Result - </cite>&#9632;salaries3: ${JSON.stringify(salaries3, null, 2)} &#9632;
        </aside>`;
        $(this.exampleCtl).append(newLocal);
    }

    increaseUsingThis(ajdustmentValue){
        // Increase all by ajdustmentValue using this key word.
        let adjustmentObj = {};
        adjustmentObj.adjustment = ajdustmentValue;
        let amounts = [800, 810, 820]; 
        let salaries = Array.from(amounts, function (v) { 
                return v + this.adjustment; 
            }, adjustmentObj
        ); 
        console.log(`salaries: ${JSON.stringify(salaries)}`);
        const newLocal = `<section><h4> Example 2 Increase all by ajdustmentValue using this key word</h4>  
        <pre><code class="language-javascript">
        // Increase all by ajdustmentValue using this key word.
        let adjustmentObj = {};
        adjustmentObj.adjustment = ajdustmentValue;
        let amounts = [800, 810, 820]; 
        let salaries = Array.from(amounts, function (v) { 
                return v + this.adjustment; 
            }, adjustmentObj
        ); 
        console.log(\`salaries: \${JSON.stringify(salaries)}\`);
        </code></pre>   
        </section>
        <aside class="text-info bg-light mb-3">
            <cite title="Results">Result - </cite>&#9632;salaries: ${JSON.stringify(salaries, null, 2)} &#9632;
        </aside>`;
        $(this.exampleCtl).append(newLocal);
    }
    fillWithSingleValue(fillValue){
        // fill whole array with a value.
        let salaries = [600, 700, 800]; 
        salaries.fill(900); 
        console.log(`salaries: ${JSON.stringify(salaries,null, 2)}`)
        const newLocal = `<section><h4> Example 3 // fill whole array with a value.</h4>  
        <pre><code class="language-javascript">
        // fill whole array with a value.
        let salaries = [600, 700, 800]; 
        salaries.fill(fillValue); 
        console.log(\`salaries: \${JSON.stringify(salaries,null, 2)}\`)
        </code></pre>   
        </section>
        <aside class="text-info bg-light mb-3">
            <cite title="Results">Result - </cite>&#9632;salaries: ${JSON.stringify(salaries, null, 2)} &#9632;
        </aside>`;
        $(this.exampleCtl).append(newLocal);
    }   
    changeUsingIndex(){
        // Change all value from index 1 inclusive
        let salaries1 = [600, 700, 800]; 
        salaries1.fill(900, 1); 
        console.log(`salaries1: ${JSON.stringify(salaries1)}`);

        // Start changing from index 1 to 2 exclusive
        let salaries2 = [600, 700, 800]; 
        salaries2.fill(900, 1, 2); 
        console.log(`salaries2: ${JSON.stringify(salaries2)}`);

        // Change value at the end of the array.
        let salaries3 = [600, 700, 800]; 
        salaries3.fill(900, -1); 
        console.log(`salaries3: ${JSON.stringify(salaries3)}`);
        const newLocal = `<section><h4> Example 4 // change array using its index.</h4>  
        <pre><code class="language-javascript">
        // Change all value from index 1 inclusive
        let salaries1 = [600, 700, 800]; 
        salaries1.fill(900, 1); 
        console.log(\`salaries1: \${JSON.stringify(salaries1)}\`);

        // Start changing from index 1 to 2 exclusive
        let salaries2 = [600, 700, 800]; 
        salaries2.fill(900, 1, 2); 
        console.log(\`salaries2: \${JSON.stringify(salaries2)}\`);

        // Change value at the end of the array.
        let salaries3 = [600, 700, 800]; 
        salaries3.fill(900, -1); 
        console.log(\`salaries3: \${JSON.stringify(salaries3)}\`);
        </code></pre>   
        </section>
        <aside class="text-info bg-light mb-3">
            <cite title="Results">Result - </cite>&#9632;salaries1: ${JSON.stringify(salaries1, null, 2)} &#9632;
            <br> &#9632;salaries2: ${JSON.stringify(salaries2, null, 2)} &#9632;
            <br> &#9632;salaries3: ${JSON.stringify(salaries3, null, 2)} &#9632;
        </aside>`;
        $(this.exampleCtl).append(newLocal);
    } 
}
let ArrayExtClass = ns1.ArrayExtClass;
export {ArrayExtClass as default};