import Logo_Img from '../../assets/images/logo.png';

function Logo(){
    return(
        <>
        <div className="brand flex-column-auto">
          <span className="brand-logo">
              <img alt="Logo" src={Logo_Img}/>
           </span>
        </div>
        </>
    );
}

export default Logo;