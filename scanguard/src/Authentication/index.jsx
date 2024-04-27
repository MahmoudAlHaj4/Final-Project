
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

            <Components.SignInContainer >
                 <Components.Form>
                     <Components.Title>Sign In</Components.Title>
                     <Components.Input type='email' placeholder='Email' />
                     <Components.Input type='password' placeholder='Password' />
                     <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                     <Components.Button>Sigin In</Components.Button>
                 </Components.Form>
            </Components.SignInContainer>

            <Components.OverlayContainer >
                <Components.Overlay >

                <Components.LeftOverlayPanel>
                    <Components.Title>Welcome Back!</Components.Title>
                    <Components.Paragraph>
                        To keep connected with us please login with your personal info
                    </Components.Paragraph>
                    <Components.GhostButton>
                        Sign In
                    </Components.GhostButton>
                    </Components.LeftOverlayPanel>
                    
                </Components.Overlay>
            </Components.OverlayContainer>

        </Components.Container>
        
    )
}

export default Authentication