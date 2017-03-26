$( document ).ready(function() {
  $("#postbutton").click(function(){
    var user = {
     "user4" : {
        "name" : "mohit",
        "password" : "password4",
        "profession" : "teacher",
        "id": 4
     }
   }
      $.post("http://127.0.0.1:8081/addUser",user,function(data, status){
          console.log("Data: " + data + "\nStatus: " + status);
      });
  });

});
