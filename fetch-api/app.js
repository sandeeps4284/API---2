document.getElementById('b1').addEventListener('click',getText);

document.getElementById('b2').addEventListener('click',getJson);

document.getElementById('b3').addEventListener('click',getExternal);

//single text file
function getText(){
    fetch('test.txt')
     .then(function(res){
        return res.text();
     })
     .then(function(data){
        document.getElementById('output').innerHTML = data;
     });
}

//JSON file
function getJson(){
    fetch('posts.json')
     .then(function(res){
        return res.json();
     })
     .then(function(data){
        let output='';
        data.forEach(function(post){
            output += `<li>${post.name}</li>`;
        });
        document.getElementById('output').innerHTML = output;
     })
     .catch(function(err){
        console.log(err);
     });
}

//GET from an external API  
function getExternal(){
    fetch('https:api.github.com/users')
     .then(function(res){
        return res.json();
     })
     .then(function(data){
        let output='';
        data.forEach(function(user){
            output += `<li>${user.login}</li>`;
        });
        document.getElementById('output').innerHTML = output;
     })
     .catch(function(err){
        console.log(err);
     });
}