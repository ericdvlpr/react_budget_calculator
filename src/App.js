import React, {useState} from 'react';
import './App.css';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import Alert from './components/Alert';
import  { v4 as uuid } from 'uuid';


const initialExpenses = [
  {id:uuid(),charge:"rent",amount:1600},
  {id:uuid(),charge:"electricity",amount:1700},
  {id:uuid(),charge:"water",amount:1800}
]

function App() {
  const [expenses,setExpenses] = useState(initialExpenses);

  return ( 
    <>
      <Alert/>
      <h1>Budget Calculator</h1>
      <main className="App">
        <ExpenseForm />
        <ExpenseList expenses={expenses} />
      </main>
      <h1>
        total spending : <span className="total">
          Php {expenses.reduce((acc,curr)=>{
              return (acc += curr.amount);
          },0)}
        </span>
      </h1>
    </>
  );
}

export default App;
