
const Authentication  =  ()=>{
    return(
     
        <Components.Container>
            <Components.SignUpContainer>
                <Components.Form>
                    <Components.Title>Create Account</Components.Title>
                    <Components.Input type='text' placeholder='Name' />
                    <Components.Input type='email' placeholder='Email' />
                    <Components.Input type='password' placeholder='Password' />
                    <Components.Button>Sign Up</Components.Button>
                </Components.Form>
            </Components.SignUpContainer>
        </Components.Container>
        
    )
}

export default Authentication