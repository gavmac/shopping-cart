/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 9
   Case Problem 3


   Author:  Gavin Macken 
   Date:  2 May `15   

   Filename: cart.js


   Functions List:

   retrieveOrder()
      Retrieves the multi-valued cookies with names starting
      with cartItem[n] where [n] is an integer that indicates
      the number of the cart item and displays the subkey
      values in a table on the page.

*/

addEvent(window, "load", retrieveOrders, false);

function retrieveOrders(){

   var itemsInCart;

   if (document.cookie) {
      var cookies = document.cookie.split(";  ");
      for( i = 0; i < cookies.length; i++) {
         
         if(cookies[i].split("=")[0] == 'cartItem'){ 
         
         itemsInCart.push(cookies[i].split("=")[0]);

         }
      }
   }

   if(itemsInCart != ""){ 

   var itemList = document.getElementById("cartItems");
   
   var table = document.createElement("table");
   table.id = "cartTable";

   var thead = document.createElement("thead");
   
   var tbody = document.createElement("tbody");
   
   var headRow = document.createElement("tr");
   
   var firstCol = document.createElement("th");
      firstCol.innerHTML = "Product";
   var secondCol = document.createElement("th");
      secondCol.innerHTML = "Description";
   var thirdCol = document.createElement("th");
      thirdCol.innerHTML = "Qty";
   var fourthCol = document.createElement("th");
      fourthCol.innerHTML = "Price";
   var fifthCol = document.createElement("th");

  
   headRow.appendChild(firstCol);
   headRow.appendChild(secondCol);
   headRow.appendChild(thirdCol);
   headRow.appendChild(fourthCol);
   headRow.appendChild(fifthCol);

   thead.appendChild(headRow);
   tbody.appendChild(thead);
   table.appendChild(tbody);

   itemList.appendChild(table);


   for ( i = 0; i < itemsInCart.length; i ++) {
      tbody.appendChild(headRow);

      var newCell = document.createElement("td");
      headRow.appendChild(newCell);

      newCell.style.backgroundColor = "rgb(255, 255, 191)";
      newCell.innerHTML = getField(itemsInCart[i],"" );

   }

}
}
























