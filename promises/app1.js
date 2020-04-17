// class EasyHTTP{

//     get(url){
//         fetch(url)
//             .then(res => res.json())
//             .then(data => console.log(data))
//             .catch(err => console.log(err));
//         }
//     }
    


// const x = new EasyHTTP();

// console.log(x);

// x.get('https://jsonplaceholder.typicode.com/users');


// const y = new EasyHTTP();

// x.get('https://jsonplaceholder.typicode.com/users');

//console.log(x);

// const x=new EasyHTTP();

// console.log(x.m1());


function easyHTTP(){
    this.http = new XMLHttpRequest();
}

easyHTTP.prototype.get = function(url){
    this.http.open('GET',url,true);

    this.http.onload= () => {
        if(this.http.status === 200){
            console.log(this.http.responseText);
        }
    }

    this.http.send();
}


const http = new easyHTTP;

http.get('https://jsonplacholder.typicode.com/posts');