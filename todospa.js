

changeFunc = function(){
      
       myInput=document.querySelector("#abc");
       value1 = document.createTextNode(myInput.value);
       mylist= document.querySelector("#todoList");
       
       cb= document.createElement("INPUT");
       cb.type="checkbox";
       cb.onclick = checkfunc;
       
       
       myLi= document.createElement("li");
       myLi.appendChild(cb);
       myLi.appendChild(value1);
       mylist.appendChild(myLi);
       dropdown= document.querySelector("#priority");
       myLi.classList.add(dropdown.value);
      }
       
      checkfunc = function() { if (this.checked) {this.parentNode.classList.add("done"); }
      else { this.parentNode.classList.remove("done") }
      localSave("todoList")
      }
  
