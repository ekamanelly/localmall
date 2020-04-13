import auth0 from 'auth0-js';
import history from '../history/history'


export default class Auth {
   auth0 = new auth0.WebAuth({
       domain: 'dev-exqfq4-7.auth0.com',
       clientID: 'RQVhggVY6moHKJkUQytZZ0kkrOB6PW5j',
       redirectUri: 'http://localhost:3000/callback',
       responseType: 'token id_token',
       scope: 'openid profile email',
   })
   login = () => {
     this.auth0.authorize() 
   }
   profile={}

   logout = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expiresAt')
    setTimeout(() => {history.replace('/callback')}, 2000)
    }   
        
    handleAuth = () => {
        this.auth0.parseHash((err, authResult) => {
            if (authResult) {
                // console.log(authResult)
                let expiresAt = JSON.stringify((authResult.expiresIn *1000 + new Date().getTime()))
                localStorage.setItem('access_token', authResult.accessToken)
                localStorage.setItem('id_token', authResult.idToken)                 
                localStorage.setItem('expiresAt', expiresAt)
                
                this.getProfile();
                setTimeout(() => {history.replace('/authcheck')}, 3000); 
                // console.log(history.location)
            }else{
                console.log(err);
            }
            
        }) 
    }
    isAuthenticated = () => {
        let expiresAt = JSON.parse(localStorage.getItem('expiresAt'))
        console.log(expiresAt)
        // return expiresAt > new Date().getTime();
        return expiresAt > new Date().getTime()
    }
    getAccessToken = () => {
        if(localStorage.getItem('access_token')){
            const accessToken = localStorage.getItem('access_token');
            console.log('got access tokon') 
            return accessToken; 
             
        }else{
            console.log('didnt got token')
            return null;
        }
    }
    getProfile = () => {
        let accessToken = this.getAccessToken()
        if(accessToken){
            this.auth0.client.userInfo(accessToken, (err, profile)=>{
                if(err){
                    console.log(err)
                }else{
                    this.profile = {profile}
                    console.log('got profile')
                    console.log(profile)

                }
            })
            
            
        }
    }
}
