import React, { useState } from 'react';
import '../styles/SymptomCard.css';

function SymptomCard({ symptom, data, onUpdate, onRemove }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleSeveritySelect = (severity) => {
    onUpdate(symptom, 'severity', severity);
  };

  const handleDurationSelect = (duration) => {
    onUpdate(symptom, 'duration', duration);
  };

  const handleImpactSelect = (impact) => {
    onUpdate(symptom, 'impact', impact);
  };

  const handleTriggerSelect = (trigger) => {
    const currentTriggers = data.triggers || [];
    const newTriggers = currentTriggers.includes(trigger)
      ? currentTriggers.filter(t => t !== trigger)
      : [...currentTriggers, trigger];
    onUpdate(symptom, 'triggers', newTriggers);
  };

  const isComplete = data.severity && data.duration && data.impact;

  if (isCollapsed && isComplete) {
    return (
      <div className="symptom-card collapsed">
        <div className="collapsed-header" onClick={() => setIsCollapsed(false)}>
          <div className="collapsed-info">
            <h3 className="symptom-name">{symptom}</h3>
            <div className="summary-badge">
              <span className="severity-emoji">
                {data.severity === 'mild' ? '😌' : data.severity === 'moderate' ? '😐' : '😣'}
              </span>
              <span className="duration-text">{data.duration}</span>
              <span className="impact-text">{data.impact === 'yes' ? 'Affected activities' : 'No impact'}</span>
            </div>
          </div>
          <button 
            className="remove-button"
            onClick={(e) => { e.stopPropagation(); onRemove(symptom); }}
          >
            ×
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="symptom-card">
      <div className="card-header">
        <h3 className="symptom-name">{symptom}</h3>
        <div className="header-actions">
          {isComplete && (
            <button 
              className="collapse-button"
              onClick={() => setIsCollapsed(true)}
              title="Collapse card"
            >
              ↑
            </button>
          )}
          <button 
            className="remove-button"
            onClick={() => onRemove(symptom)}
            aria-label={`Remove ${symptom}`}
          >
            ×
          </button>
        </div>
      </div>

      <div className="card-section">
        <h4>How severe did {symptom.toLowerCase()} feel?</h4>
        <div className="severity-buttons">
          <button
            className={`severity-btn ${data.severity === 'mild' ? 'selected' : ''}`}
            onClick={() => handleSeveritySelect('mild')}
          >
            <span className="emoji">😌</span>
            <span>Mild</span>
          </button>
          <button
            className={`severity-btn ${data.severity === 'moderate' ? 'selected' : ''}`}
            onClick={() => handleSeveritySelect('moderate')}
          >
            <span className="emoji">😐</span>
            <span>Moderate</span>
          </button>
          <button
            className={`severity-btn ${data.severity === 'severe' ? 'selected' : ''}`}
            onClick={() => handleSeveritySelect('severe')}
          >
            <span className="emoji">😣</span>
            <span>Severe</span>
          </button>
        </div>
      </div>

      <div className="card-section">
        <h4>How long did it last?</h4>
        <div className="duration-buttons">
          <button
            className={`duration-btn ${data.duration === 'minutes' ? 'selected' : ''}`}
            onClick={() => handleDurationSelect('minutes')}
          >
            Minutes
          </button>
          <button
            className={`duration-btn ${data.duration === 'hours' ? 'selected' : ''}`}
            onClick={() => handleDurationSelect('hours')}
          >
            Hours
          </button>
          <button
            className={`duration-btn ${data.duration === 'all-day' ? 'selected' : ''}`}
            onClick={() => handleDurationSelect('all-day')}
          >
            All day
          </button>
          <button
            className={`duration-btn ${data.duration === 'unsure' ? 'selected' : ''}`}
            onClick={() => handleDurationSelect('unsure')}
          >
            Unsure
          </button>
        </div>
      </div>

      <div className="card-section">
        <h4>Did {symptom.toLowerCase()} affect your usual activities or energy?</h4>
        <div className="impact-buttons">
          <button
            className={`impact-btn ${data.impact === 'a-little' ? 'selected' : ''}`}
            onClick={() => handleImpactSelect('a-little')}
          >
            A little
          </button>
          <button
            className={`impact-btn ${data.impact === 'somewhat' ? 'selected' : ''}`}
            onClick={() => handleImpactSelect('somewhat')}
          >
            Somewhat
          </button>
          <button
            className={`impact-btn ${data.impact === 'a-lot' ? 'selected' : ''}`}
            onClick={() => handleImpactSelect('a-lot')}
          >
            A lot
          </button>
          <button
            className={`impact-btn ${data.impact === 'no' ? 'selected' : ''}`}
            onClick={() => handleImpactSelect('no')}
          >
            No impact
          </button>
        </div>
      </div>

      <div className="card-section">
        <h4>Did anything seem to trigger or worsen it?</h4>
        <div className="trigger-buttons">
          {['Food', 'Stress', 'Sleep', 'Environment', 'Hormones', 'Movement', 'Other'].map(trigger => (
            <button
              key={trigger}
              className={`trigger-btn ${(data.triggers || []).includes(trigger) ? 'selected' : ''}`}
              onClick={() => handleTriggerSelect(trigger)}
            >
              {trigger}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SymptomCard;