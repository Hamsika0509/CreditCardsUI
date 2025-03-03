  import "../App.css"
  export default function HomePage() {
    return (
      <>

    <div class="login-page">
      <div class="form">
        <div class="login">
          <div class="login-header">
            <p>Choose an action to Proceed.</p>
          </div>
        </div>
          
           <button onClick={event =>  window.location.replace('/Approval')} style={{marginBottom:'10px'}}>
              Get Approval Application Lists
              </button>         
            
            <button onClick={event =>  window.location.replace('/Rejection')}>
             Get Rejected Application Lists
            </button>
            <div style={{height:"5px"}}>
            </div>
            <a style={{textDecoration: "none", color: "blue",marginRight:"75%" }} href="/">Go Back </a>
      </div>
    </div>	      
      
      </>
    );
  }
