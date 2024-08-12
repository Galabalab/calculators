import React, { useState, useEffect } from 'react';
import './Header.css';
import './Main.css';

function MortgageCalculator() {
  const [propertyValue, setPropertyValue] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [annualInterestRate, setAnnualInterestRate] = useState(0);
  const [termInYears, setTermInYears] = useState(0);

  const [principal, setPrincipal] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [requiredIncome, setRequiredIncome] = useState(0);

  useEffect(() => {
    calculateMortgage();
  }, [propertyValue, downPayment, annualInterestRate, termInYears]);

  const calculateMortgage = () => {
    const results = calculateMortgageHelper(
      downPayment,
      annualInterestRate,
      termInYears,
      propertyValue
    );

    setPrincipal(results.principal);
    setMonthlyPayment(results.monthlyPayment);
    setTotalInterest(results.totalInterest);
    setTotalAmount(results.totalAmount);
    setRequiredIncome(results.requiredIncome);
  };

  const calculateMortgageHelper = (
    downPayment,
    annualInterestRate,
    termInYears,
    propertyValue
  ) => {
    if (
      isNaN(propertyValue) ||
      isNaN(downPayment) ||
      isNaN(annualInterestRate) ||
      isNaN(termInYears)
    ) {
      return {
        principal: 0,
        monthlyPayment: 0,
        totalInterest: 0,
        totalAmount: 0,
        requiredIncome: 0,
      };
    }

    const principal = propertyValue - downPayment;
    const monthlyInterestRate = annualInterestRate / 12 / 100;
    const termInMonths = termInYears * 12;
    const monthlyPayment =
      (principal * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -termInMonths));
    const totalInterest = (monthlyPayment * termInMonths) - principal;
    const totalAmount = principal + totalInterest;
    const requiredIncome = monthlyPayment / 0.30;

    return {
      principal,
      monthlyPayment,
      totalInterest,
      totalAmount,
      requiredIncome,
    };
  };

  return (
    <section class="content">
    <div class="container">
        <a class="content__link" href="all_credits.html">- Все кредиты</a>
        <h1 class="title__content">Ипотечный калькулятор</h1>
        <p class="text__content">Кредитный калькулятор позволяет онлайн рассчитать и сравнить размер ежемесячного платежа, сумму переплаты и процентной ставке по интересующему вас кредиту</p>
        <div class="calculator">
            <div class="calc__inner">
                <div class="calc__input">
                    <p class="text__calc">По стоимости автомобиля</p>
                    <div class="calc__input-items">
                        <form action="">
                            <div class="input">
                                <label for="propertyValue">Стоимость недвижимости:</label>
                                <input type="number"
          id="propertyValue"
          value={propertyValue}
          onChange={(e) => setPropertyValue(parseFloat(e.target.value))}/>
                            </div>
                            <div class="input">
                                <label for="downPayment">Первоначальный взнос:</label>
                                <input  type="number"
          id="downPayment"
          value={downPayment}
          onChange={(e) => setDownPayment(parseFloat(e.target.value))}/>
                            </div>
                            <div class="input">
                                <label for="interestRate">Проценты:</label>
                                <input type="number"
          id="interestRate"
          value={annualInterestRate}
          onChange={(e) => setAnnualInterestRate(parseFloat(e.target.value))}/>
                            </div>
                            <div class="input">
                                <label for="termInYears">Срок (в годах):</label>
                                <input type="number"
          id="termInYears"
          value={termInYears}
          onChange={(e) => setTermInYears(parseFloat(e.target.value))}/>
                            </div>
                        </form>
                    </div>
                </div>
                
                <div class="calc__result">
                    <div class="calc__result-inner">
                        <h2 class="title__result">Результаты расчета</h2>
                        <div class="result__items">
                            <div class="result__item">
                                <p>Сумма кредита</p> 
                                <p class="price__result">{principal.toFixed(2)} ₽</p>
                            </div>
                            <div class="result__item">
                                <p>Ежемесячный платеж</p> 
                                <p class="price__result"> {monthlyPayment.toFixed(2)} ₽</p>
                            </div>
                            <div class="result__item">
                                <p>Общая сумма займа</p> 
                                <p class="price__result">{totalAmount.toFixed(2)} ₽</p>
                            </div>
                            <div  class="result__item">
                                <p>Переплата</p> 
                                <p class="price__result">{totalInterest.toFixed(2)} ₽</p>
                            </div>
                            <div class="result__item">
                                <p>Необходимый доход</p> 
                                <p class="price__result">{requiredIncome.toFixed(2)} ₽</p>
                            </div>
                        </div>
                        <p class="text__result">Оставьте свои данные и банк пришлет вам условия</p>
                        <button type="submit" class="result__button">Заполнить анкету</button>
                    </div>
                </div>
            </div>
        </div>

    </div>       
</section>
  );
}

export default MortgageCalculator;