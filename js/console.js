var  consoleJS;

consoleJS = (function(){
    var boundingRect,
        debounce,
        display,
        displayUI,
        domElement = {},
        drag,
        queryElement = {},
        move,
        triggers = {
            start : {
                resizing : false,
                moving : false,
            },
        },
        userData;

    debounce = function (fx, delay, immediate){
    var that = this,
        timeout;

     return function debounced(){
        var context = this, arg = arguments;

        var later = function(){
            timeout = null;
            if (!immediate) fx.apply(context, arg);
        };

        var callNow = immediate &&  !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, delay);
        if (callNow) fx.apply(context, arg);
     };

}

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

        queryElement.resizeButton = document.querySelector('.consolejs-resizeButton');
        queryElement.resizeButton.addEventListener('mousedown',function(e){
                e.preventDefault();
            if(typeof(triggers) !== 'undefined' && !triggers.start.resizing){
                window.addEventListener('mousemove',drag,false);
                triggers.start.resizing = true;

                window.addEventListener('mouseup',function(e){
                        console.log('MOUSE UP');
                     window.removeEventListener('mousemove',drag,false);
                     triggers.start.resizing = false;
                },false);
            }
        },false);

        queryElement.moveZone = document.querySelector('.consolejs-moveZone');
        queryElement.moveZone.addEventListener('mousedown',function(e){
                e.preventDefault();
            if(typeof(triggers) !== 'undefined' && !triggers.start.moving){
                window.addEventListener('mousemove',move,false);
                triggers.start.moving = true;

                window.addEventListener('mouseup',function(e){
                        console.log('MOUSE UP');
                     window.removeEventListener('mousemove',move,false);
                     triggers.start.moving = false;
                },false);
            }
        },false);
        
        
        domElement.userInterface.displayed = true;
        
    }

    move = function(e){
        console.log(e);
    };
    drag = function(e){
            console.log("H = " +queryElement.main.style.height);
            console.log("W = " +queryElement.main.style.width);
        if(parseFloat(queryElement.main.style.height) >= 100 && parseFloat(queryElement.main.style.width) >= 300){
            queryElement.main.style.height = parseFloat(queryElement.main.style.height) + e.movementY +'px';
            queryElement.main.style.width = parseFloat(queryElement.main.style.width) + e.movementX +'px';
        }
            if(parseFloat(queryElement.main.style.width) < 301){
                queryElement.main.style.width = 300+"px";
            }
            if(parseFloat(queryElement.main.style.height) < 101){
                queryElement.main.style.height = 105+"px";
            }
        
    };
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

function ame(){

    console.log('aaaaame');
}