let projectIDModules = 99, projectName = `master build`;
let project = {
    projectIDModules : 888, 
    projectName : `master build object literal`
};
(function(ns2){
    'use strict'
    ns2.ES6ObjModule = function ES6ObjModule(){
        // Private methods
        var showProject = () => `project.projectIDModules: ${project.projectIDModules}`,
        showOriginalProject = () => `in original`,
        updateFunction = () => showOriginalProject = () => `in updated`;

        // Public methods
        return {
            showProject,
            showOriginalProject,
            updateFunction
        }
    }();
})(window.Gus.ES6 = window.Gus.ES6 || {})

let ES6ObjModule = Gus.ES6.ES6ObjModule;
export {projectName, projectIDModules, project, ES6ObjModule};