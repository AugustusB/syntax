var ns1 = window.Gus.ES6 || {}

ns1.StringExtensionClass = class StringExtensionClass{
    constructor(control){
        this.exampleCtl = control;
    }
    stringExtensions() {
        let title = 'SantaBarbaraSurfRiders';
        console.log(`title.startsWith('Santa') :  ${title.startsWith('Santa')}`);
        console.log(`title.endsWith('Rider') : ${title.endsWith('Rider')}`);
        console.log(`title.includes('ba') : ${title.includes('ba')}`);

        const newLocal = `<section><h2> String extensions - is </h2><h4> Example 1 startsWith, endsWith and includes</h4>  
        <pre><code class="language-javascript">
        let title = 'SantaBarbaraSurfRiders';
        console.log(\`title.startsWith('Santa') :  \${title.startsWith('Santa')}\`);
        console.log(\`title.endsWith('Rider') : \${title.endsWith('Rider')}\`);
        console.log(\`title.includes('ba') : \${title.includes('ba')}\`);
        </code></pre> 
        </section>
        <aside class="text-info bg-light mb-3">
            <cite title="Results">Result - </cite>&#9632; title.startsWith('Santa') :  ${title.startsWith('Santa')} &#9632;
            <br>&#9632; title.endsWith('Rider') : ${title.endsWith('Rider')} &#9632;
            <br>&#9632; title.includes('ba') : ${title.includes('ba')} &#9632;
        </aside>`;  
        $(this.exampleCtl ).append(newLocal);
    } 
    stringExtensionsImogi() {
        var title="Surfer's \u{1f3c4} Blog";
        var msg = String.raw `Surfer's \u{1f3c4} Blog`;
        console.log(`${msg}: ${title}`);

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
        
        const newLocal = `<section><h2> String extensions - is </h2><h4> Example 1 </h4>  
        <pre><code class="language-javascript">
        var title="Surfer's \\u{1f3c4} Blog";
        var msg = String.raw \`Surfer's \\u{1f3c4} Blog\`;
        console.log(\`\${msg}: \${title}\`);

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
        </section>
        <aside class="text-info bg-light mb-3">
            <h3>
                <cite title="Results">Result - </cite>&#9632; ${msg}: ${title} &#9632;
                <br>&#9632; surfer.length : ${surfer.length} &#9632; 
                <br>&#9632; Array.from(surfer).length : ${Array.from(surfer).length} &#9632; 
                <br>&#9632; surfer1 ; ${surfer1} &#9632; 
                <br>&#9632; title1 - title1.length : ${title1} - ${title1.length} &#9632; 
                <br>&#9632; title1 - title1.normalize().length : ${title1} - ${title1.normalize().length} &#9632; 
                <br>&#9632; Big \\u{1f40b} eat little \\u1F41F : ${title2} &#9632; 
                <br>&#9632; title1.normalize().codePointAt(7).toString(16) : ${title1.normalize().codePointAt(7).toString(16)} &#9632; 
                <br>&#9632; String.fromCodePoint(0x1f3c4) : ${String.fromCodePoint(0x1f3c4)} &#9632; 
                <br>&#9632; waveSurfer.repeat(10) : ${waveSurfer.repeat(10)} &#9632; 
            </h3>
        </aside>`; 
        $(this.exampleCtl ).append(newLocal);
    }
}
let StringExtensionClass = ns1.StringExtensionClass;
export {StringExtensionClass as default};
