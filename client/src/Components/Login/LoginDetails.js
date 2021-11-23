import React, {useState} from 'react'

const LoginDetails = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let onClick = () => {
        console.log(email);
        console.log(password);
    }
    return (
            <form>
                <div class="form-outline mb-4">
                    <input type="email" value={email} id="faculty-email" class="form-control" onChange={(e)=>setEmail(e.target.value)}/>
                    <label class="form-label" for="faculty-email">Email address</label>
                    
                </div>
                <div class="form-outline mb-4">
                    <input type="password" value={password} id="faculty-password" class="form-control" onChange={(e)=>setPassword(e.target.value)}/>
                    <label class="form-label" for="faculty-password">Password</label>
                </div>
                <div class="row mb-4">
                    <div class="col">
                    <a href="#!">Register?</a>
                    </div>
                    <div class="col">
                    <a href="#!">Forgot password?</a>
                </div>
            </div>

            <button type="submit" class="btn btn-primary btn-block mb-4" onClick={onClick()}>Sign in</button>

            </form>

    )
}

export default LoginDetails;