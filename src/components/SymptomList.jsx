import React from 'react';
import SymptomCard from './SymptomCard';
import '../styles/SymptomList.css';

function SymptomList({ selectedSymptoms, symptomData, onSymptomRemove, onSymptomUpdate }) {
  if (selectedSymptoms.length === 0) {
    return (
      <div className="symptom-list empty">
        <div className="empty-state">
          <p>Select symptoms above to start your check-in</p>
        </div>
      </div>
    );
  }

  return (
    <div className="symptom-list">
      {selectedSymptoms.map(symptom => (
        <SymptomCard
          key={symptom}
          symptom={symptom}
          data={symptomData[symptom] || { severity: '', duration: '', impact: '', triggers: [] }}
          onUpdate={onSymptomUpdate}
          onRemove={onSymptomRemove}
        />
      ))}
    </div>
  );
}

export default SymptomList;