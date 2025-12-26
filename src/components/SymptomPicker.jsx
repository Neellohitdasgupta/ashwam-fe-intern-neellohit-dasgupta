import React from 'react';
import '../styles/SymptomPicker.css';

const SYMPTOM_CATEGORIES = {
  '🌿 Energy & Fatigue': ['Tiredness', 'Low stamina', 'Exhaustion'],
  '💪 Muscles & Joints': ['Stiffness', 'Aches', 'Cramps', 'Body pain'],
  '🔥 Hormonal & Thermoregulation': ['Hot flashes', 'Sweats', 'Chills'],
  '🧠 Head & Concentration': ['Headache', 'Fogginess'],
  '💩 Gut & Digestion': ['Bloating', 'Constipation', 'Nausea'],
  '❤️ Reproductive & Sexual': ['Dryness', 'Tenderness', 'Libido'],
  '💆 Skin, Hair & Nails': ['Acne', 'Dryness', 'Hair loss'],
  '🫁 Breathing & Heart': ['Palpitations', 'Breathlessness']
};

function SymptomPicker({ selectedSymptoms, onSymptomSelect, maxReached }) {
  return (
    <div className="symptom-picker">
      <div className="picker-header">
        <h2>Did you notice any new or recurring physical symptoms today?</h2>
        <p>Select up to 5 symptoms you're experiencing</p>
      </div>
      
      <div className="symptom-categories">
        {Object.entries(SYMPTOM_CATEGORIES).map(([category, symptoms]) => (
          <div key={category} className="symptom-category">
            <h3 className="category-title">{category}</h3>
            <div className="symptom-chips">
              {symptoms.map(symptom => (
                <button
                  key={symptom}
                  className={`symptom-chip ${
                    selectedSymptoms.includes(symptom) ? 'selected' : ''
                  } ${
                    maxReached && !selectedSymptoms.includes(symptom) ? 'disabled' : ''
                  }`}
                  onClick={() => onSymptomSelect(symptom)}
                  disabled={maxReached && !selectedSymptoms.includes(symptom)}
                >
                  {symptom}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="skip-options">
        <button className="skip-btn">None today</button>
        <button className="skip-btn">Unsure</button>
      </div>
      
      {maxReached && (
        <div className="limit-message">
          <span>You've selected the maximum of 5 symptoms</span>
        </div>
      )}
      
      {selectedSymptoms.length > 0 && (
        <div className="selected-count">
          <span>{selectedSymptoms.length} of 5 symptoms selected</span>
        </div>
      )}
    </div>
  );
}

export default SymptomPicker;