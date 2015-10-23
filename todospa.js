

changeFunc = function(){
      
       myInput=document.querySelector("#def");
       value1 = document.createTextNode(myInput.value);
       mylist= document.querySelector("#todoList");
       
       cb= document.createElement("INPUT");
       cb.type="checkbox";
       cb.onclick = checkfunc;
       
      myp=document.querySelector("#abc");
      myp.appendChild(mylist)
       myLi= document.createElement("li");
       myLi.appendChild(cb);
       myLi.appendChild(value1);
       mylist.appendChild(myLi);
       dropdown= document.querySelector("#priority");
       myLi.classList.add(dropdown.value);
       localSave("mylist");
      }
       
      checkfunc = function() { if (this.checked) {this.parentNode.classList.add("done"); }
      else { this.parentNode.classList.remove("done") }
      localSave("mylist");
      }
  
