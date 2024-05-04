function fetchData() {
  const username = document.getElementById('username').value;
  const requesturl = "https://api.github.com/users/"+username;
  console.log(requesturl);
  let picurl;
  const xhr = new XMLHttpRequest();

  xhr.open("GET", requesturl);
  
  xhr.onreadystatechange = function () {
   
    if (xhr.readyState === 4) {
      const data = JSON.parse(this.responseText);
      if(data.message === 'Not Found'){
        const pic = document.getElementById('pic');
        pic.innerHTML = `
        <h3> User Not Found </h3>
        `
      }
      else{
      console.log(data);
      picurl = data.avatar_url;
      let Followers =data.followers;
      let Name = data.name;
      let repo = data.public_repos
      const pic = document.getElementById("pic");
      pic.innerHTML = `
    <img src='${picurl} '/>
    <h3>Name : ${Name}
    <h3>Repos : ${repo}</h3>
    <h3>Followers : ${Followers}</h3>
    `;
    }
    }
  };
  xhr.send();
}
