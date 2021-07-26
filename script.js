//XMLHTTP request is used to request is used to interact with server with API ,API is always look in tems of HTTP 
//there are total four steps
//1.Creating XHR(XML-HTTP request) object. New keyword is need to create any new object
var request =new XMLHttpRequest();
//New XMLHTTP request is nothing but object
//2.Opening a connection(specifying URL which you want to retrive)
request.open('GET','https://restcountries.eu/rest/v2/all',true);
//3.Sending a connection
request.send();
//4.Once the server responded successfully then we have to process the data
//request .onload (Event means action,task,that triggers only when data is recieved )
//function is like petrol to event .it is neccessary to perform event
request.onload=function(){
    var data=JSON.parse(this.response);
    console.log(data);
    for(var i=0;i<=250;i++){
        console.log(data[i].name+" "+data[i].capital+" "+data[i].flag);
       
    }
}
