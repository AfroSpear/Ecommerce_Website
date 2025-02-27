

function login_page() {

    firebase.auth().onAuthStateChanged(user => {
        if (user && user.email === 'prodadmin@test.com') {
            window.location.href = '/home'
        } else {
            glPageContent.innerHTML = `
            
            <form class=form-signin>
            <h3>Please Sign in</h3>
           <input type="email" class="form-control" id="email" placeholder="Email address" >
           <input type="password" class="form-control" id="password" placeholder="Password" >
           <button type="button" class="btn btn-primary" onclick="signIn()">Submit</button>
           </form>
            `;
        }
    })

}

async function signIn() {
    console.log('signIn()')
    try {
         const email = document.getElementById('email').value
         if (email !== 'prodadmin@test.com') {
             throw new Error('Not product admin')
         }
         const password = document.getElementById('password').value
        await firebase.auth().signInWithEmailAndPassword(email, password)
        window.location.href = '/home'
    } catch (e){
        glPageContent.innerHTML = `
        Login Failed : <br> 
        ${e} 
        <br>
        <a href ="/login" class="btn btn-outline-primary">Go to Login</a>
        `;
        
    }
}