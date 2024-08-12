import React, { useState,useEffect  } from 'react';
import './Main.css';
import './Header.css';
function CreditCalc() {
    const [loanAmount, setLoanAmount] = useState(0);
    const [interestRate, setInterestRate] = useState(0);
    const [loanTerm, setLoanTerm] = useState(0);
  
    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [totalPayment, setTotalPayment] = useState(0);
    const [totalInterest, setTotalInterest] = useState(0);
  
    useEffect(() => {
      calculateLoan();
    }, [loanAmount, interestRate, loanTerm]); // Запускаем расчет при изменении любого из состояний
  
    const calculateLoan = () => {
      if (!isNaN(loanAmount) && !isNaN(interestRate) && !isNaN(loanTerm) &&
          loanAmount > 0 && interestRate > 0 && loanTerm > 0) {
        const monthlyInterestRate = (interestRate / 100) / 12;
        const numberOfPayments = loanTerm * 12;
        const compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments);
        const interestQuotient = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1);
        const monthlyPayment = loanAmount * interestQuotient;
        const totalPayment = monthlyPayment * numberOfPayments;
        const totalInterest = totalPayment - loanAmount;
  
        setMonthlyPayment(monthlyPayment);
        setTotalPayment(totalPayment);
        setTotalInterest(totalInterest);
      } else {
        setMonthlyPayment(0);
        setTotalPayment(0);
        setTotalInterest(0);
      }
    };
    return (

        <section className="content">
            <div className="container">
                <a className="content__link" href="all_credits.html">- Все кредиты</a>
                <h1 className="title__content">Кредитный калькулятор</h1>
                <p className="text__content">Кредитный калькулятор позволяет онлайн рассчитать и сравнить размер ежемесячного платежа, сумму переплаты и процентной ставке по интересующему вас кредиту</p>
                <div className="calculator">
                    <div className="calc__inner">
                        <div className="calc__input">
                            <p className="text__calc">По стоимости кредита</p>
                            <div className="calc__input-items">
                                <form action="">
                                <div className="input">
                                    <label for="loanAmount">Сумма кредита (руб.):</label>
                                    <input  type="number" 
          id="loanAmount" 
          value={loanAmount} 
          onChange={(e) => setLoanAmount(parseFloat(e.target.value))} />
                                </div>
                                <div className="input">
                                    <label for="interestRate">Процентная ставка (%):</label>
                                    <input type="number" 
          id="interestRate" 
          value={interestRate} 
          onChange={(e) => setInterestRate(parseFloat(e.target.value))}/>
                                </div>
                                <div className="input">
                                    <label for="loanTerm">Срок кредита (в годах):</label>
                                    <input type="number" 
          id="loanTerm" 
          value={loanTerm} 
          onChange={(e) => setLoanTerm(parseFloat(e.target.value))}/>
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
                                        <p  className="price__result"> {monthlyPayment.toFixed(0)} ₽</p>
                                    </div>
                                    <div className="result__item">
                                        <p>Сумма кредита</p> 
                                        <p className="price__result">{totalPayment.toFixed(0)} ₽</p>
                                    </div>
                                    <div className="result__item">
                                        <p>Переплата</p> 
                                        <p className="price__result">{totalInterest.toFixed(0)} ₽</p>
                                    </div>
                                    <div className="result__item">
                                        <p>Общая сумма займа</p> 
                                        <p className="price__result">{loanAmount > 0 ? loanAmount.toFixed(0) + ' ₽' : '0 ₽'}</p>
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




        



      );
    }
    
    export default CreditCalc;  