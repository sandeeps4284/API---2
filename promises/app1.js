const http = new EasyHTTP;

http.get('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data))
    .catch(err => console.log(err));


//User Data
const data = {
    name : 'Sandeep',
    lastName: 'S',
    email: 'sandeeps4284@gmail.com'
}