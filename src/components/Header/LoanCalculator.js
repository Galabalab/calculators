import React, { useState,useEffect  } from 'react';
import './Header.css';
import './Main.css';

function LoanCalculator() {
  const [carPrice, setCarPrice] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [interestRate, setInterestRate] = useState(0);

  const [loanAmount, setLoanAmount] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  useEffect(() => {
    calculateLoan();
  }, [carPrice, downPayment, loanTerm, interestRate]); // Запускаем расчет при изменении любого из состояний

  const calculateLoan = () => {
    if (!isNaN(carPrice) && !isNaN(downPayment) && !isNaN(loanTerm) && !isNaN(interestRate) &&
        carPrice > 0 && downPayment > 0 && loanTerm > 0 && interestRate > 0) {

      const loanAmount = carPrice - downPayment;
      const monthlyInterest = interestRate / 12;
      const totalPayments = loanTerm * 12; 
      const monthlyPayment = (loanAmount * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -totalPayments));
      const totalAmount = monthlyPayment * totalPayments;
      const totalInterest = totalAmount - loanAmount;

      setLoanAmount(loanAmount);
      setMonthlyPayment(monthlyPayment);
      setTotalAmount(totalAmount);
      setTotalInterest(totalInterest);
    } else {
      setLoanAmount(0);
      setMonthlyPayment(0);
      setTotalAmount(0);
      setTotalInterest(0);
    }
  };

  return (
    <div className="Main">
        <section className="content">
<div className="container">
    <a className="content__link" href="all_credits.html">Все кредиты</a>
    <h1 className="title__content">Автокредитный калькулятор</h1>
    <p className="text__content">Кредитный калькулятор позволяет онлайн рассчитать и сравнить размер ежемесячного платежа, сумму переплаты и процентной ставке по интересующему вас кредиту</p>
    <div className="calculator">
        <div className="calc__inner">
            <div className="calc__input">
                <p className="text__calc">По стоимости автомобиля</p>
                <div className="calc__input-items">
                    <form action="">
                        <div className="input">
                            <p>Стоимость автомобиля:</p>
                            <input  type="number" 
        id="carPrice" 
        value={carPrice} 
        onChange={(e) => setCarPrice(parseFloat(e.target.value))} 
        placeholder="Цена автомобиля"/>
                        </div>
                        <div className="input">
                            <p>Первоначальный взнос:</p>
                            <input type="number" 
        id="downPayment" 
        value={downPayment} 
        onChange={(e) => setDownPayment(parseFloat(e.target.value))} 
        placeholder="Первоначальный взнос"/>
                        </div>
                        <div className="input">
                            <p>Срок кредита в месяцах:</p>
                            <input type="number" 
        id="loanTerm" 
        value={loanTerm} 
        onChange={(e) => setLoanTerm(parseInt(e.target.value))} 
        placeholder="Срок кредита (в годах)"/>
                        </div>
                        <div className="input">
                            <p>Процентная ставка в год (%):</p>
                            <input type="number" 
        id="interestRate" 
        value={interestRate * 100} 
        onChange={(e) => setInterestRate(parseFloat(e.target.value) / 100)} 
        placeholder="Процентная ставка (%)"/>
                        </div>
                    </form>
                </div>
            </div>
            
            <div className="calc__result">
                <div className="calc__result-inner">
                    <h2 className="title__result">Результаты расчета</h2>
                    <div className="result__items">
                        <div className="result__item">
                            <p>Ежемесячный платеж</p> 
                            <p className="java__text"> {monthlyPayment.toFixed(0)} ₽</p>  
                        </div>
                        
                        <div className="result__item">
                            <p>Сумма кредита</p> 
                            <p className="price__result">{loanAmount.toFixed(0)} ₽</p>
                        </div>
                        <div className="result__item">
                            <p>Общая сумма</p> 
                            <p className="price__result">{totalAmount.toFixed(0)} ₽</p>
                        </div>
                        <div className="result__item">
                            <p>Общая сумма займа</p> 
                            <p className="price__result">{totalInterest.toFixed(0)} ₽</p>
                        </div>
                    </div>
                    <p className="text__result">Оставьте свои данные и банк пришлет вам условия</p>
                    <button type="submit" className="result__button">Заполнить анкету</button>
                </div>
            </div>
        </div>
    </div>

</div>       
</section>
</div>
  );
}

export default LoanCalculator;