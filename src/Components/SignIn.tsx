export default function SignIn() {
    return (
        <form action=""> 
        <h1>Sign In</h1>
        <p>Fill in the information below</p>
      <div>
      <label htmlFor="name">Email Address</label>
        <input placeholder="Enter Email" type="text" name="name" id="name" />
        <label htmlFor="name">Password</label>
        <input placeholder="Enter Password" type="text" name="name" id="name" />
      </div>
      <button>Sign In</button>
      <a href="">Forgot Password?</a>
        
        </form>
    )
}