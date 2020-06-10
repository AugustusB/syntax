var ns1 = window.Gus.ES6 || {}

ns1.MyObjectExtClass = class ObjectExtensionClass{
    constructor(control){
        this.exampleCtl = control;
    }
    objectSetPrototypeOf(){
        // setPrototypeOf
        let a = {x:1};
        let b = {y:2};
        Object.setPrototypeOf(a,b);
        console.log(`console.log(a.y): ${a.y}`);

        // assign
        let target = {};
        Object.assign(target,a,b);
        console.log(`console.log(target) : ${JSON.stringify(target, null, 2)}`);

        // not enumerable
        let target1 = {};
        Object.defineProperty(b,'c',{value:10,enumerable:false});
        Object.assign(target1,a,b);
        console.log(`console.log(target1) : ${JSON.stringify(target1, null, 2)}`);

        // assign will not walk the prototype chain.
        b.z = 5;
        let c = {c:20};
        Object.setPrototypeOf(b, c);
        let target2 = {};
        Object.assign(target2, a, b);
        console.log(`console.log(target2) : ${JSON.stringify(target2, null, 2)}`);
        const newLocal = `<section><h2> Object Extensions </h2><h4> Example 1 setPrototypeOf and assign</h4> 
        <pre><code class="language-javascript">
        // setPrototypeOf
        let a = {x:1};
        let b = {y:2};
        Object.setPrototypeOf(a,b);
        console.log(\`console.log(a.y): \${a.y}\`);

        // assign
        let target = {};
        Object.assign(target,a,b);
        console.log(\`console.log(target) : \${JSON.stringify(target, null, 2)}\`);

        // not enumerable
        let target1 = {};
        Object.defineProperty(b,'c',{value:10,enumerable:false});
        Object.assign(target1,a,b);
        console.log(\`console.log(target1) : \${JSON.stringify(target1, null, 2)}\`);

        // assign will not walk the prototype chain.
        b.z = 5;
        let c = {c:20};
        Object.setPrototypeOf(b, c);
        let target2 = {};
        Object.assign(target2, a, b);
        console.log(\`console.log(target2) : \${JSON.stringify(target2, null, 2)}\`);

        </code></pre>
        </section>
        <aside class="text-info bg-light mb-3">
            <cite title="Results">Result - </cite>&#9632; console.log(a.y) :  ${a.y} &#9632;
            <br>&#9632; console.log(target) : ${JSON.stringify(target, null, 2)} &#9632;
            <br>&#9632; console.log(target1) : ${JSON.stringify(target1, null, 2)} &#9632;
            <br>&#9632; console.log(target2) : ${JSON.stringify(target2, null, 2)} &#9632; 
        </aside>`;  
        $(this.exampleCtl).append(newLocal);
    }
    objectis() {
        let amount1 = NaN;
        let amount = 0, total = -0;
        
        console.log(`amount1 === amount1:  ${amount1 === amount1}`);
        console.log(`Object.is(amount, amount) : ${Object.is(amount, amount)}`);
        console.log(`Object.is(amount, total) : ${Object.is(amount,total)}`);

        const newLocal = `<section><h2> Object extensions - is </h2><h4> Example 1 </h4>  
        <pre><code class="language-javascript">
        let amount1 = NaN;
        let amount = 0, total = -0;
        
        console.log(\`amount1 === amount1:  \${amount1 === amount1}\`);
        console.log(\`Object.is(amount, amount) : \${Object.is(amount, amount)}\`);
        console.log(\`Object.is(amount, total) : \${Object.is(amount,total)}\`);
        </code></pre>  
        </section>
        <aside class="text-info bg-light mb-3">
            <cite title="Results">Result - </cite>&#9632; amount1 === amount1:  ${amount1 === amount1} &#9632;
            <br>&#9632; Object.is(amount, amount) : ${Object.is(amount, amount)} &#9632;
            <br>&#9632; Object.is(amount, total) : ${Object.is(amount,total)} &#9632;
        </aside>`; 
        $(this.exampleCtl).append(newLocal);
    }
}
let MyObjectExtClass = ns1.MyObjectExtClass;
export {MyObjectExtClass as default};