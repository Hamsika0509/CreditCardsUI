export default function Header() {
	const logout = () => {
        localStorage.removeItem("token-info");
        // setIsLoggedin(false);
		window.location.replace('/');
    };
 
    return (
      <>    
     
     <nav class="navbar background">
				<ul class="nav-list">
					<div class="logo">
                  E-Pay
					</div>
               <li><a href='/'>Home</a></li>
					
				</ul>

				
				<li><button onClickCapture={logout} style={{height:'30px', width:'80px', marginLeft:'70px'}}>Sign Out</button></li>
			</nav>
            
      
      </>
    );
  }
