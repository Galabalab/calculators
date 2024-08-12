import './Main.css';
import Logoall from '../../assets/Logoall';
import Logo from '../../assets/images/Logo';
import LoanCalculator from './LoanCalculator';
import CreditCalc from './CreditCalc';
import MortgageCalculator from './IpotCalc';

function Footer() {
  return (
    
    <footer className='footer'>
    <div>
    <div class="container">
        <nav class="menu">
            <ul class="menu__items">
                <div class="logo">
                    <a to=""> <Logo></Logo ></a>
                    <a to=""> <Logoall></Logoall ></a>   
                </div>
            </ul>
        </nav>
        
    </div>
    </div>
    </footer>
 
    
  );
}

export default Footer;
