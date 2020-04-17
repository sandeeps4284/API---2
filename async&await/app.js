// async function myFunc(){
//     const promise = new Promise((resolve,reject) => {
//         setTimeout(() => resolve ('Hello'), 1000);
//     });

//     const error = true;

//     if(!error){
//         const res = await promise;
//         return res;
//     } else {
//         await Promise.reject(new Error('Something went wrong'));
//     }
// }

// myFunc()
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

// async function getUsers() {

//     const response = await fetch
//     ('https://jsonplaceholder.typicode.com/users');

//     const data = await response.json();

//     return data;
// }

// getUsers().then(users => console.log(users));

const http = new EasyHTTP;

http.get('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data))
    .catch(err => console.log(err));


//User Data
const data = {
    name : 'Sandeep',
    username: 'S',
    email: 'sandeeps4284@gmail.com'
}

//Create user
http.post('https://jsonplaceholder.typicode.com/users',data)
    .then(data => console.log(data))
    .catch(err => console.log(err));

