export default function Signup() { 
    return (
        <form action=""> 
        <h1>Create an Account</h1>
        <p>Fill in the information below</p>
      <div>
      <label htmlFor="name">First Name</label>
        <input placeholder="Enter First Name" type="text" name="name" id="name" />
        
        <label htmlFor="name">Last Name</label>
        <input placeholder="Enter Last Name" type="text" name="name" id="name" />
        <label htmlFor="name">Email Address</label>
        <input placeholder="Enter Email" type="text" name="name" id="name" />
        <label htmlFor="name">Password</label>
        <input placeholder="Enter Password" type="text" name="name" id="name" />
        <label htmlFor="name">Confirm Password</label>
        <input placeholder="Confirm Password" type="text" name="name" id="name" />
      </div>
      <button>Sign Up</button>
        
        </form>
    )
}