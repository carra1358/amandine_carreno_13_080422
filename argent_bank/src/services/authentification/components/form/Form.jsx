function Form (){

    return(
        <div>
            <form>
          <div className="input-wrapper">
            <label htmlFor="username">
                Username:
                <input type="text" id="username" />
            </label>
           
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">
                Password :
                <input type="password" id="password" />
            </label>
          </div>
          <div className="input-remember">
            <label htmlFor="remember-me">
            <input type="checkbox" id="remember-me" />
                Remember me
                </label>
          </div>
         <button type="submit" className="sign-in-button">Sign In</button> 
        </form>
        </div>
    )
}

export default Form;