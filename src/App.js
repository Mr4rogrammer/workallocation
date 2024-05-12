import './App.css';
import React, { useState } from 'react';

function App() {
  const [skill, setSkill] = useState('');
  const [count, setCount] = useState('');
  const [date, setDate] = useState('');

  const [tableData, setTableData] = useState([]);

  const handleChangeForSkill = (event) => {
    const newValue = event.target.value;
    setSkill(newValue);

  };

  const handleChangeForCount = (event) => {
    const newValue = event.target.value;
    setCount(newValue);
  };


  const handleChangeForDate = (event) => {
    const newValue = event.target.value;
    setDate(newValue);
  };

  const deleteRow = (index) => {
    const newData = tableData.filter((_, i) => i !== index);
    setTableData(newData);
  };

  const handleButtonClick = () => {
    if (!skill.trim() || !count.trim() || !date.trim()) {
      alert('Please fill in all fields.');
      return;
    }
    const newRow = {
      column1: skill,
      column2: count,
      column3: date
    };
    setTableData([...tableData, newRow]);

    setCount('')
    setDate('')
    setSkill('')
  };


  return (
    <div className="App">
      <header className="App-header">
        <center>
          <div className='main-div'>
            <div className='level1'>
              <h1>Work Allocation</h1>
              <div className="table-container">
                <table className="my-table">
                  <thead>
                    <tr>
                      <th>Skill</th>
                      <th>Count</th>
                      <th>Date</th>
                      <th>Options</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        <td>{row.column1}</td>
                        <td>{row.column2}</td>
                        <td>{row.column3}</td>
                        <td>
                          <button className='delete-button' onClick={() => deleteRow(rowIndex)}>Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>

                </table>
                <br />
                <table className="input-table">
                  <thead>
                    <center>
                      <tr>
                        <th><input className='input-style' placeholder="Enter Skill" value={skill} onChange={handleChangeForSkill} /></th>
                        <th><input type='number' className='input-style' placeholder="Enter Count" value={count} onChange={handleChangeForCount} /></th>
                        <th><input type="date" className='input-style' placeholder="Enter Date" value={date} onChange={handleChangeForDate} /></th>
                      </tr>
                    </center>
                  </thead>
                </table>
                <div className='custom-button-container'>
                  <button className='custom-button' onClick={handleButtonClick}>Creates</button>
                </div>
                <div className='submit-button-container'>
                  <button className='submit-button'>Submit</button>
                </div>
              </div>
            </div>
            <div className="table-container staff-table">
              <table className="my-table">
                <thead>
                  <tr>
                    <th>Staff Name</th>
                    <th>Staff Id</th>
                  </tr>
                </thead>

              </table>
            </div>

            <p className='nextPage'>Next ></p>
          </div>
        </center>
      </header>
    </div>
  );
}

export default App;
