var  consoleJS;

consoleJS = (function(){
    var boundingRect,
        display,
        displayUI,
        domElement = {},
        queryElement = {},
        userData;

    displayUI = function(){
        domElement.userInterface = {};
        domElement.head = document.getElementsByTagName('head');

        /**
        CONTAINER
        */
        domElement.userInterface.main = document.createElement('div');
        domElement.userInterface.main.classList.add('consolejs');
        domElement.userInterface.main.classList.add('consolejs-main');
        domElement.userInterface.main.style.height = 300 +"px";
        domElement.userInterface.main.style.width = 800 +"px";
        domElement.userInterface.main.style.position = "relative";

        /**
        RESIZE BUTTON
        */
        domElement.userInterface.resizeButton = document.createElement('div');
        domElement.userInterface.resizeButton.classList.add('consolejs-resizeButton');
        domElement.userInterface.main.appendChild(domElement.userInterface.resizeButton);
       
        /**
        DRAG ZONE
        */
        domElement.userInterface.moveZone = document.createElement('div');
        domElement.userInterface.moveZone.classList.add('consolejs-moveZone');
        domElement.userInterface.main.appendChild(domElement.userInterface.moveZone);
        
        /**
        CSS LINK
        */
        domElement.userInterface.styleDOM = document.createElement('link');
        domElement.userInterface.styleDOM.rel = "stylesheet";
        domElement.userInterface.styleDOM.type = "text/css";
        domElement.userInterface.styleDOM.href = (typeof(userData) !== "undefined" && typeof(userData.cssLink) === "string") ? userData.cssLink : "assets/css/consolejs.css";

        domElement.head[0].appendChild(domElement.userInterface.styleDOM);

        document.body.insertBefore(domElement.userInterface.main, document.body.firstChild);
        queryElement.main = document.querySelector('.consolejs-main');
        boundingRect = queryElement.main.getBoundingClientRect();
        console.log(boundingRect);
        queryElement.main.style.height = boundingRect.height + "px";
        queryElement.main.style.width = boundingRect.width + "px";
        queryElement.main.style.left = boundingRect.left +"px";
        queryElement.main.style.right = boundingRect.right +"px";
        queryElement.main.style.top = boundingRect.top +"px";
        queryElement.main.style.bottom = boundingRect.bottom +"px";
        domElement.userInterface.displayed = true;
        
    }

    display = function(data){
        console.log(typeof(data));
        if(typeof(data) === "object"){
            userData = data;
        }
        document.addEventListener('DOMContentLoaded',function(e){
            console.log('display');
        displayUI();

        });
    }
    return {
        display : display,
    }
})();