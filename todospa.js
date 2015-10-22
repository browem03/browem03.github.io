

changeFunc = function(){
      
       myInput=document.querySelector("#def");
       value1 = document.createTextNode(myInput.value);
       mylist= document.querySelector("#todoList");
       
       cb= document.createElement("INPUT");
       cb.type="checkbox";
       cb.onclick = checkfunc;
       
      myol.document.querySelector("#todoList");
       myLi= document.createElement("li");
       myLi.appendChild(cb);
       myLi.appendChild(value1);
       myol.appendChild(myLi);
       mylist.appendChild(myLi);
       dropdown= document.querySelector("#priority");
       myLi.classList.add(dropdown.value);
      }
       
      checkfunc = function() { if (this.checked) {this.parentNode.classList.add("done"); }
      else { this.parentNode.classList.remove("done") }
      localSave(todoList)
      restoreList(todoList, checkfunc)
      }
  
