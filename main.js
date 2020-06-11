import {ES6Obj} from "./Scripts/syntax.js";
import {projectName, projectIDModules, project, ES6ObjModule} from "./modules/module1.js";
import {ES6ObjClassModule} from "./modules/classModule.js";
import MySymbol from "./modules/symbolModule.js";
import ObjectExtension from "./modules/objectExtModule.js";
import StringExtension from "./modules/stringExtModule.js";
import NumberExtension from "./modules/numberExtModule.js";
import FunctionExtension from "./modules/functionExtModule.js";
import IteratorExamples from "./modules/iteratorModule.js";
import GeneratorExamples from "./modules/generatorModule.js";
import GeneratorYieldExamples from "./modules/generator/generatorYieldModule.js";
import PromiseExamples from "./modules/promiseModule.js";
import PromiseMoreFeatureExamples from "./modules/promise/promiseMoreFeaturesModule.js";


project.projectIDModules = 599
console.log(`Id: ${projectIDModules}, Poject Name: ${projectName}`);
console.log(JSON.stringify(project));

console.log(`showProject(): ${ES6ObjModule.showProject()}`);
console.log(`project.projectIDModules: ${project.projectIDModules}`);

console.log(`showOriginalProject(): ${ES6ObjModule.showOriginalProject()}`);
console.log(`showOriginalProject(): ${ES6ObjModule.updateFunction()()}`);

var syn = new ES6Obj();
syn.syntaxSample();

var field = 'dynamicfield';
var price = 5.99;
var productView = {
    [field + '001'] : price 
};
//console.log(productView);
syn.defaultsFunctionParam1();
syn.defaultsFunctionParam2();
syn.defaultsFunctionParam3();
syn.defaultsFunctionParam4();
syn.defaultsFunctionParam5();
syn.defaultsFunctionParam6();
syn.defaultsFunctionParam7();
syn.defaultsFunctionParam8();
syn.rest1();
syn.rest2();
syn.rest3();
syn.rest4();
syn.spreadOpperator1();
syn.spreadOpperator2([12,20,18])
syn.spreadOpperator3([,,]);
syn.spreadOpperator4("43210");
syn.objectLiteral1();
syn.objectLiteral2();
syn.objectLiteral3();
syn.objectLiteral4();
syn.objectLiteral5();
syn.forOfLoop();
syn.octalsAndBinaries();
syn.templateLiterals1();
syn.templateLiterals2();
syn.templateLiterals3();
syn.templateLiterals4()
syn.destructor1();
syn.destructor2();
syn.destructor3();
syn.destructor4();
syn.destructorDefault5();
syn.destructorNestedArrays6();
syn.destructorFrunctionPara7();
syn.destructorObject8();
syn.destructorObject9();
syn.destructorObject10();
syn.advDestructorObject11();
syn.advForDestructorObject12();
syn.advThrowDestructorObject13();
syn.advDestructorObject14();
syn.destructorObject15();
//Classes
var SyntaxClasses = new ES6ObjClassModule('body #codeExamples');
SyntaxClasses.classes1();
SyntaxClasses.classes2();
SyntaxClasses.classesMethods3();
SyntaxClasses.classesMethods3A();
SyntaxClasses.classesExpression4();
SyntaxClasses.classesExpression4A();
SyntaxClasses.classesExtends5();
SyntaxClasses.classesObjectLiteral6();
SyntaxClasses.classesStaticFunctions7();
SyntaxClasses.classesTarget8();
//symbol
var SyntaxSymbol = new MySymbol('body #codeExamples');
SyntaxSymbol.symbolSyntax();
SyntaxSymbol.symbolSyntax1();
SyntaxSymbol.symbolSyntax2();
//object extensions
var myObjectExtensions = new ObjectExtension('body #codeExamples');
myObjectExtensions.objectSetPrototypeOf();
myObjectExtensions.objectis();
//string extensions
var myStringExtensions = new StringExtension('body #codeExamples');
myStringExtensions.stringExtensions();
myStringExtensions.stringExtensionsImogi();
//number extensions
var myNumberExtension = new NumberExtension('body #codeExamples');
myNumberExtension.numberExtensionsParseInt();
myNumberExtension.numberExtensionsNan();
myNumberExtension.numberExtensionsIsFinite();
myNumberExtension.numberExtensionsIsInteger();
myNumberExtension.numberExtensionsHighestInteger();
//function extensions
var myFunctionExtension = new FunctionExtension('body #codeExamples');
myFunctionExtension.functionName();
myFunctionExtension.functionClass();
// iterators
var myIteratorExamples = new IteratorExamples('body #codeExamples');
myIteratorExamples.iteratorTypeof();
myIteratorExamples.iterating();
myIteratorExamples.iteratorCreation();
myIteratorExamples.iteratorCreateWithEndDefined();
myIteratorExamples.iteratorWithSpreadOp();
// generator
var myGeneratorExamples = new GeneratorExamples('body #codeExamples');
myGeneratorExamples.simpleUse();
myGeneratorExamples.indefiniteGenerator();
// note - using prototype pattern
var myGeneratorYieldExamples = new GeneratorYieldExamples('body #codeExamples');
myGeneratorYieldExamples.yieldValuePassedIn();
myGeneratorYieldExamples.yieldNumber();
myGeneratorYieldExamples.yieldArray();
myGeneratorYieldExamples.yieldPrecedence();
myGeneratorYieldExamples.yieldWithArrays();
myGeneratorYieldExamples.yieldDelegation();
myGeneratorYieldExamples.yieldExceptionHandling();
myGeneratorYieldExamples.yieldGracefulStop();
// Promises...
var myPromiseExamples = new PromiseExamples('body #codeExamples');
myPromiseExamples.promiseResolve();
myPromiseExamples.promiseReject();
myPromiseExamples.resolveWithPara();
myPromiseExamples.rejectWithPara();
myPromiseExamples.chainingThen();
myPromiseExamples.rejectWithCatch();
// more promise features...
var myPromiseMoreFeatureExamples = new PromiseMoreFeatureExamples('body #codeExamples');
myPromiseMoreFeatureExamples.callAnotherPormise();
myPromiseMoreFeatureExamples.noAsyncCallNeeded();
syn.arrays();
