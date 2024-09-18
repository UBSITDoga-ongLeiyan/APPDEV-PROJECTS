
import React, { useState } from 'react';

const KeyboardInfo = ({ model, overview, specifications, features, instructions, troubleshooting, maintenance, warranty }) => {
    const [visibleSection, setVisibleSection] = useState(null);

    const toggleSection = (section) => {
        setVisibleSection(visibleSection === section ? null : section);
    };

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
            <h1>{model}</h1>
            <h2>Product Overview</h2>
            <p>{overview}</p>

            <button onClick={() => toggleSection('specifications')}>Specifications</button>
            {visibleSection === 'specifications' && (
                <ul>
                    {specifications.map((spec, index) => (
                        <li key={index}>{spec}</li>
                    ))}
                </ul>
            )}

            <button onClick={() => toggleSection('features')}>Key Features</button>
            {visibleSection === 'features' && (
                <ul>
                    {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            )}

            <button onClick={() => toggleSection('instructions')}>Setup Instructions</button>
            {visibleSection === 'instructions' && (
                <div>
                    <h3>Unboxing:</h3>
                    <p>{instructions.unboxing}</p>
                    <h3>Connecting the Keyboard:</h3>
                    <p>{instructions.connecting}</p>
                    <h3>Software Installation (Optional):</h3>
                    <p>{instructions.software}</p>
                </div>
            )}

            <button onClick={() => toggleSection('troubleshooting')}>Troubleshooting</button>
            {visibleSection === 'troubleshooting' && (
                <ul>
                    {troubleshooting.map((issue, index) => (
                        <li key={index}>{issue}</li>
                    ))}
                </ul>
            )}

            <button onClick={() => toggleSection('maintenance')}>Maintenance and Care</button>
            {visibleSection === 'maintenance' && (
                <div>
                    <h3>Cleaning:</h3>
                    <p>{maintenance.cleaning}</p>
                    <h3>Storage:</h3>
                    <p>{maintenance.storage}</p>
                </div>
            )}

            <button onClick={() => toggleSection('warranty')}>Warranty and Support</button>
            {visibleSection === 'warranty' && (
                <div>
                    <h3>Warranty Period:</h3>
                    <p>{warranty.period}</p>
                    <h3>Customer Support:</h3>
                    <p>{warranty.support}</p>
                </div>
            )}
        </div>
    );
};

export default KeyboardInfo;
