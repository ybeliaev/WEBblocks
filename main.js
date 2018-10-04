// код для работы с элементами меню
let elements = document.getElementsByClassName("bar_link");

    for (var i = 0; i < elements.length; i++){
        elements[i].onclick = function () {
            var el = elements[0];
            while(el){                
                el.classList.remove("active");             
                el = el.nextElementSibling;
            }
            this.classList.add("active");
        }
    }
    console.log(elements);   