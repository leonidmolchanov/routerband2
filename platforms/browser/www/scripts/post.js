
    
            //Подключаемся к серверу
	var socket = io.connect('http://95.213.208.74:8000');
       // socket.on('eventClient', function (data) {
       // for(var i in data ) {
       //alert(i)
        
        //}
           // string = JSON.parse(data.data);
            
            //Парсим ответ
           
          //  string = JSON.parse(data.data);
            // Условие если ответа нет
            
            
       // }
                  
                  	socket.emit('eventServer', { data: 'Hello Server' });
    
    //Цикл постоянной связи с серверов    
   // setInterval(function () {
     // socket.emit('eventServer', { data: 'Hello Server2' });
//}, 5000);    

   

     <!-- Какая-то функция -->     
  function param(Name)
{
var Params = location.search.substring(1).split("&");
var variable = "";
for (var i = 0; i < Params.length; i++)
{
if(Params[i].split("=")[0] == Name)
{
if (Params[i].split("=").length > 1)
variable = Params[i].split("=")[1];
return variable;
}}
return "";
}

    <!-- Прием переменных от страницы авторизации и составление строк запросов -->
var per=param("per");
var uuid=param("uuid");
var status=param("status");
var balance=param("balance");
var login_act=param("loginpush");
select="http://app.routerband.ru/intropage.php?PHPSESSID=" + per + "";
select_action="http://app.routerband.ru/introaction.php?PHPSESSID=" + per + "";
function windows(address)
{
    address=""+address+".html?per=" + per + "&status=" + status + "" ;
 window.location=address;}

errortime= 30000;

function ajaxerror(){
swal({
  title: 'Ошибка подключения!',
  text: "Выйти из раздела?",
  showCancelButton: true,
  confirmButtonText: 'Выйти из раздела',
  cancelButtonText: 'Нет'
}).then(function () {
  windows('action');
})
}

function msg2(text_msg){
swal({
  text: text_msg,
  confirmButtonText: 'ОК'
}).then(function () {
   windows('action');
})

}

function msg3(text_msg){
swal({
  text: text_msg,
  confirmButtonText: 'ОК'
}).then(function () {
   windows('index');
})

}

        function ajaxerror2(){
          
swal({
  title: '',
  text: "Ошибка подключения, данные не загружены!",
  
})
            
        }
function msg(text_msg){
          
swal({
  title: '',
  text: text_msg,
  
})
            
        }


function logout()
  {
     $.ajax ({
    	url:  "http://app.routerband.ru/logout.php?PHPSESSID=" + per + "",
    	type: "POST",
    	data: ({type: "logout"}),
    	dataType: "html",
    	success: function(data)
    	{
    	    string=data;
   //Главное тело ответа!
          string=string.trim();
           if(string == "no session")

             { msg3("Необходима авторизация");
          localStorage.setItem("access_act","false")
        }
}
});
}