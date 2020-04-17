/**
 * 
 * EasyHTTP library
 * Library for making HTTP requests
 * 
 * 
 * @version 2.0.0
 * @author Sandeep
 * @license MIT
 * 
 * 
 **/


class EasyHTTP{
    //get request
    async get(url){
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }

    //post request
    async post(url,data){
        const response = await fetch(url,{
                method: 'POST',
                headers:{
                    'Content-type':'application/json'
                },
                body: JSON.stringify(data)
            });
        const resData = await response.json();
        return resData;
    }
}
//custom library using ajax

// function easyHTTP(){
//     this.http = new XMLHttpRequest();
// }

// easyHTTP.prototype.get = function(url){
//     this.http.open('GET',url,true);

//     this.http.onload= () => {
//         if(this.http.status === 200){
//             console.log(this.http.responseText);
//         }
//     }

//     this.http.send();
// }

