import './Header.css';
import { Link,BrowserRouter,Routes,Route } from 'react-router-dom';
import Logoall from '../../assets/Logoall';
import Logo from '../../assets/images/Logo';
import LoanCalculator from './LoanCalculator';
import CreditCalc from './CreditCalc';
import MortgageCalculator from './IpotCalc';

function Header() {
  return (
    <BrowserRouter>
    <div className="header">
    <div class="container">
        <nav class="menu">
            <ul class="menu__items">
                <div class="logo">
                    <Link to=""> <Logo></Logo ></Link>
                    <Link to=""> <Logoall></Logoall ></Link>   
                </div>
                <div class="nav__items">
                    <li class="menu__item">
                        <Link to="/LoanCalculator" class="menu__item-link">Автокредит</Link>
                    </li>
                    <li class="menu__item">
                        <Link to="/MortgageCalculator" class="menu__item-link">Ипотека</Link>
                    </li>
                    <li class="menu__item">
                        <Link to="/CreditCalc" class="menu__item-link">Кредит</Link>
                    </li>
                </div>
                <div class="social__item">
                    <Link class="social__first-item" to=""><img src="assets/images/tg.svg" alt=""/></Link>
                    <Link to=""><img src="assets/images/vk.svg" alt=""/></Link>                       
                </div>
            </ul>
        </nav>
        <Routes>
          <Route path="/LoanCalculator" element={<LoanCalculator />} />
          <Route path="/CreditCalc" element={<CreditCalc />} />
          <Route path="/MortgageCalculator" element={<MortgageCalculator />} />
        </Routes>
    </div>
    </div>
    </BrowserRouter>
  );
}

export default Header;
