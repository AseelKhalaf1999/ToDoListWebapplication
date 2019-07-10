
//function to insert new row
function newRow(){
     //validate blank spaces
     var textFieldBox = document.getElementById("myInput");
     //always trim the spaces and calculate the length
     var textValue = textFieldBox.value.trim().length;
     //if =0 which means there is no input
     if (textValue == 0)
      {
              alert("You must write Your Tasks!");
           
      }
     else
      {
   var table= document.getElementById("myTable");
    var row=table.insertRow(table.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);


    var checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    cell1.appendChild(checkBox);


    var inputValue = document.getElementById("myInput").value;
    cell2.innerHTML=inputValue;
    cell2.className="table-Input";

    var btn1=document.createElement("i");
    btn1.className="fa fa-edit";
    cell3.appendChild(btn1);
    btn1.addEventListener("click", function () {
        editFunction(event);
    });
          // JQUERY
    // $(btn1).click(editFunction());


    


    var btn2=document.createElement("i");
    btn2.className="fa fa-trash";
    // btn2.addEventListener("click", deleteFunction);
          // JQUERY
    $(btn2).click(deleteFunction());
    cell4.appendChild(btn2);
    document.getElementById("myInput").value = " ";
      }
     
}
//function to edit tasks
function editFunction(event) {

    var rows = document.getElementsByTagName("td");
    for (i = 0; i < rows.length; i++) {

        rows[i].onclick = function () {
            {
                var div = this.parentNode;
                div.contentEditable = true;
            }


        }
        $(rows[i]).
        dblclick
        (function(){
            var div = this.parentNode;
            div.contentEditable = false;
        });
    }
}


//function to delete the task
    function deleteFunction(evt) {
        var close = document.getElementsByTagName("td");
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                var div = this.parentElement;
                // JQUERY
                // $(div).hide();
                 div.style.display = "none";
            }
        }
    }


//function to send mail includes the tasks
        function sendMail() {
            var mylist = document.getElementsByTagName("myUL")
            var text;
            for (var i = 0; i < mylist.length; i++) {
                var content = mylist[i].textContent;
                text.appendChild(content);
                window.location="mailto:asilkhalaf99@gmail.com?subject=To Do List Website&body=" + "Hello , The tasks You have Done are : "+text;


            }
        }



