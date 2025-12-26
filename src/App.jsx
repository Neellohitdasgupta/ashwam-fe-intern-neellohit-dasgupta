import React, { useState } from 'react';
import SymptomPicker from './components/SymptomPicker';
import SymptomList from './components/SymptomList';
import './styles/App.css';

function App() {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [symptomData, setSymptomData] = useState({});

  const handleSymptomSelect = (symptom) => {
    if (selectedSymptoms.length < 5 && !selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
      setSymptomData({
        ...symptomData,
        [symptom]: {
          severity: '',
          duration: '',
          impact: '',
          triggers: []
        }
      });
    }
  };

  const handleSymptomRemove = (symptom) => {
    setSelectedSymptoms(selectedSymptoms.filter(s => s !== symptom));
    const newData = { ...symptomData };
    delete newData[symptom];
    setSymptomData(newData);
  };

  const handleSymptomUpdate = (symptom, field, value) => {
    setSymptomData({
      ...symptomData,
      [symptom]: {
        ...symptomData[symptom],
        [field]: value
      }
    });
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>How are you feeling today?</h1>
        <p>Select up to 5 symptoms you're experiencing</p>
      </header>
      
      <main className="app-main">
        <div className="symptom-picker-section">
          <SymptomPicker 
            selectedSymptoms={selectedSymptoms}
            onSymptomSelect={handleSymptomSelect}
            maxReached={selectedSymptoms.length >= 5}
          />
        </div>
        
        <div className="symptom-cards-section">
          <SymptomList 
            selectedSymptoms={selectedSymptoms}
            symptomData={symptomData}
            onSymptomRemove={handleSymptomRemove}
            onSymptomUpdate={handleSymptomUpdate}
          />
        </div>
      </main>
    </div>
  );
}

export default App;