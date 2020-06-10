(function(ns2){
    'use strict'
    ns2.ES6ObjClassModule = function ES6ObjClassModule(examples){
        this.examplesCtl = examples;
    };

    ns2.ES6ObjClassModule.prototype = function(){
        // Private methods
        var classes1 = function classes1(){
            class Task{
            };
            console.log(typeof Task);
            const newLocal = `<section> <h2> classes </h2><h4> Example 1 class is a function</h4> 
            <pre><code class="language-javascript">   
            class Task{

            };
            console.log(typeof Task);
            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; typeof Task : ${typeof Task} &#9632;
            </aside>`;
            $(this.examplesCtl).append(newLocal);   
        },
        classes2 = function classes2(){
            class Task{}
            let taskObj = new Task();
            console.log(typeof taskObj);
            console.log(taskObj instanceof Task);
            const newLocal = `<section><h4> Example 2 Find the instantiated object in classes</h4> 
            <pre><code class="language-javascript">   
            class Task{}
            let taskObj = new Task();
            console.log(typeof taskObj);
            console.log(taskObj instanceof Task);
            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; typeof taskObj : ${typeof taskObj}&#9632; 
                <br>&#9632; taskObj instanceof Task : ${taskObj instanceof Task}&#9632;
            </aside>`;
         
            $(this.examplesCtl).append(newLocal);
        },        
        classesMethods3 = function classesMethods3() {
            class Task{
                constructor(){
                    console.log('constructingTask');
                }
                showId() {return `99`;}
            }
            let task = new Task();
            task.showId();
            console.log(task.showId===Task.prototype.showId);
            const newLocal = `<section><h4> Example 3 constructor and method in classes</h4> 
            <pre><code class="language-javascript">   
            class Task{
                constructor(){
                    console.log('constructingTask');
                }
                showId() {return \`99\`;}
            }
            let task = new Task();
            task.showId();
            console.log(task.showId===Task.prototype.showId);
            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; new Task() : constructingTask &#9632; 
                <br>&#9632; task.showId() : ${task.showId()} &#9632;
                <br>&#9632; task.showId === Task.prototype.showId : ${task.showId === Task.prototype.showId} &#9632;
            </aside>`;
            $(this.examplesCtl).append(newLocal);
        },
        classesMethods3A = function classesMethods3A() {
            var errMessage = undefined;
            try {
                let task = new Task();
                class Task{
                    constructor(){
                        console.log('constructingTask');
                    }
                    showId() {return `99`;}
                }
            } catch (error) {
                errMessage = error;
            }
            console.log(errMessage.message);
            const newLocal = `<section><h4> Example 3A Classes are not hoisted</h4> 
            <pre><code class="language-javascript"> 
            var errMessage = undefined;
            try {
                let task = new Task();
                class Task{
                    constructor(){
                        console.log('constructingTask');
                    }
                    showId() {return \`99\`;}
                }
            } catch (error) {
                errMessage = error;
            }
            console.log(errMessage.message);
            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; console.log(errMessage.message) : ${errMessage.message} &#9632; 
            </aside>`;
            $(this.examplesCtl).append(newLocal);
        },
        classesExpression4 = function classesExpression4() {
            let myClass = class Task{
                constructor(){
                    console.log('constructingTask');
                }
            };
            new myClass();
            const newLocal = `<section><h4> Example 4 Classes used in expressions like functions</h4> 
            <pre><code class="language-javascript">   
            let myClass = class Task{
                constructor(){
                    console.log('constructingTask');
                }
            };
            new myClass();
            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; new myClass() : constructingTask&#9632; 
            </aside>`;
            $(this.examplesCtl).append(newLocal);
        },
        classesExpression4A = function classesExpression4A() {
            let Task = function Task(){
                this.name = `Bob`
            };
            let someObject = {name: "John"};
            Task.call(someObject);
            console.log(someObject.name);

            let errMessage = undefined;
            try {
                class cTask{
                    constructor(){
                        console.log('constructingTask');
                    }
                };
                cTask.call(someObject);
            } catch (error) {
                errMessage = error;
            }
            console.log(errMessage.message);

            const newLocal = `<section><h4> Example 4A Cannot use call with classes</h4> 
            <pre><code class="language-javascript">   
            let Task = function Task(){
                this.name = \`Bob\`
            };
            let someObject = {name: "John"};
            Task.call(someObject);
            console.log(someObject.name);

            let errMessage = undefined;
            try {
                class cTask{
                    constructor(){
                        console.log('constructingTask');
                    }
                };
                cTask.call(someObject);
            } catch (error) {
                errMessage = error;
            }
            console.log(errMessage.message);
            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; console.log(someObject.name) : ${someObject.name} &#9632; 
                <br>&#9632; console.log(errMessage.message) : ${errMessage.message} &#9632;
            </aside>`;
            $(this.examplesCtl).append(newLocal);
        },
        classesExtends5 = function classesExtends5() {
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
            console.log(`p.name : ${p.name}`);
            console.log(`p.nameSP : ${p.nameSP}`);
            console.log(`p.getTaskCount(): ${p.getTaskCount()}`);
            const newLocal = `<section><h4> Example 5 using super in constructor and methods</h4> 
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
            console.log(\`p.name : \${p.name}\`);
            console.log(\`p.nameSP : \${p.nameSP}\`);
            console.log(\`p.getTaskCount(): \${p.getTaskCount()}\`);

            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; p.name : ${p.name} &#9632;
                <br>&#9632; p.nameSP : ${p.nameSP} &#9632;
                <br>&#9632; p.getTaskCount(): ${p.getTaskCount()} &#9632; 
            </aside>`;
            $(this.examplesCtl).append(newLocal);
        },
        classesObjectLiteral6 = function classesObjectLiteral6() {
            
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
            console.log(`softwareProject.getTaskCount() : ${softwareProject.getTaskCount()}`);
            const newLocal = `<section><h4> Example 6 super with proper proptotpe chain can be used in object leterals </h4> 
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
            console.log(\`softwareProject.getTaskCount() : \${softwareProject.getTaskCount()}\`);
            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; softwareProject.getTaskCount() : ${softwareProject.getTaskCount()} &#9632;
            </aside>`;
            $(this.examplesCtl).append(newLocal);
        },
        classesStaticFunctions7 = function classesStaticFunctions7() {
            class Project{
                static getDefaultId() {
                    return 0;
                }
            }
            Project.id = 99;
            console.log(`Project.getDefaultId(): ${Project.getDefaultId()}`);
            console.log(`Project.id: ${Project.id}`);
            const newLocal = `<section><h4> Example 7 static methods and properties</h4> 
            <pre><code class="language-javascript">   
            class Project{
                static getDefaultId() {
                    return 0;
                }
            }
            Project.id = 99;
            console.log(\`Project.getDefaultId(): \${Project.getDefaultId()}\`);
            console.log(\`Project.id: \${Project.id}\`);
            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; Project.getDefaultId() : ${Project.getDefaultId()} &#9632;
                <br>&#9632; Project.id : ${Project.id} &#9632; 
            </aside>`;
            $(this.examplesCtl).append(newLocal);
        },
        classesTarget8 = function classesTarget8() {
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
            console.log(`p.strTarget : ${p.strTarget}`);
            console.log(`m.strTarget : ${m.strTarget}`);
            const newLocal = `<section><h4> Example 8 property new.target returns the original class that is called to create the object</h4> 
            <pre><code class="language-javascript">   
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
            console.log(\`p.strTarget : \${p.strTarget}\`);
            console.log(\`m.strTarget : \${m.strTarget}\`);
            </code></pre>
            </section>
            <aside class="text-info bg-light mb-3">
                <cite title="Results">Result - </cite>&#9632; p.strTarget : ${p.strTarget} &#9632;
                <br>&#9632; m.strTarget : ${m.strTarget} &#9632; 
            </aside>`;
            $(this.examplesCtl).append(newLocal);
        };
        // Public methods
        return {
            classes1,
            classes2,
            classesMethods3,
            classesMethods3A,
            classesExpression4,
            classesExpression4A,
            classesExtends5,
            classesObjectLiteral6,
            classesStaticFunctions7,
            classesTarget8,
        }  
    }();
})(window.Gus.ES6 = window.Gus.ES6 || {});

let ES6ObjClassModule = Gus.ES6.ES6ObjClassModule;
export {ES6ObjClassModule};