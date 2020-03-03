function buy() {
    auth('prodadmin@test.com', buy_secured, '/login')
    
}

function buy_secured() {
     glPageContent.innerHTML = '<h1>Buy Prod</h1>'
     glPageContent.innerHTML += `
          <div> Page in Progress..... </div>
        </br>
        <a class="btn btn-primary" href="/show" role="button">Return</a>
     `;
}