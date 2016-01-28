var  consoleJS;

consoleJS = (function(){
    var display,
        displayUI,
        domElement = {};

    displayUI = function(){
        domElement.userInterface = {};
        domElement.head = document.getElementsByTagName('head');
        domElement.userInterface.main = document.createElement('div');
        domElement.userInterface.main.classList.add('consolejs');
        domElement.userInterface.main.classList.add('consolejs-main');
        domElement.userInterface.styleDOM = document.createElement('link');
        domElement.userInterface.styleDOM.rel = "stylesheet";
        domElement.userInterface.styleDOM.type = "text/css";
        domElement.userInterface.styleDOM.href = "assets/css/consolejs.css";
        console.log(domElement.userInterface.styleDOM);
        console.log(domElement.head[0]);
        domElement.head[0].appendChild(domElement.userInterface.styleDOM);
        domElement.userInterface.displayed = true;
        
    }

    display = function(){
        document.addEventListener('DOMContentLoaded',function(e){
            console.log('display');
        displayUI();

        });
    }
    return {
        display : display,
    }
})();