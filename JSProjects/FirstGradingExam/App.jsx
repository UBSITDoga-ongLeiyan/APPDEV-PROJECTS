
import React from 'react';
import Header from './Header';
import KeyboardInfo from './KeyboardInfo';
import Footer from './Footer';
import './index.css';

const App = () => {
    const keyboardData = {
        model: 'KB-X1000',
        overview: 'The KB-X1000 is a high-performance mechanical keyboard designed for gamers, professionals, and everyday users who demand precision and comfort. It features customizable RGB backlighting, durable mechanical switches, and programmable keys to enhance your typing and gaming experience.',
        specifications: [
            'Switch Type: Cherry MX Red (Mechanical)',
            'Key Layout: Full-size (104 keys)',
            'Backlighting: RGB with customizable colors',
            'Connectivity: Wired (USB 2.0)',
            'Dimensions: 440 mm x 135 mm x 35 mm',
            'Weight: 1.2 kg',
            'Cable Length: 1.8 meters',
            'Additional Features: Anti-ghosting, N-key rollover, dedicated media controls',
        ],
        features: [
            'Customizable RGB Backlighting: Personalize the keyboard’s illumination with a wide range of colors and lighting effects.',
            'Mechanical Switches: Cherry MX Red switches for a responsive and smooth typing experience.',
            'Programmable Keys: Assign macros and custom functions to any key with the included software.',
            'Anti-Ghosting & N-Key Rollover: Ensure accurate keypress registration during intense gaming sessions.',
            'Dedicated Media Controls: Easily control music and videos with dedicated media keys.',
        ],
        instructions: {
            unboxing: 'Carefully remove the keyboard and accessories from the box.',
            connecting: 'Plug the USB cable into an available USB port on your computer. The keyboard should be automatically recognized and ready for use. No additional drivers are required.',
            software: 'Download the configuration software from the manufacturer’s website if you wish to customize key functions or lighting. Follow the on-screen instructions to install the software.',
        },
        troubleshooting: [
            'Keyboard Not Responding: Ensure the USB connection is secure. Try connecting the keyboard to a different USB port. Restart your computer if necessary.',
            'Backlighting Not Working: Check if the backlight is disabled or set to a minimal brightness level. Verify that the configuration software is properly installed.',
            'Key Not Registering: Confirm that no physical obstructions are affecting the key. Test the key in different applications to determine if the issue is software-related.',
        ],
        maintenance: {
            cleaning: 'Disconnect the keyboard from the computer. Use a soft, dry cloth to clean the surface. For deeper cleaning, carefully remove keycaps and use compressed air to remove debris.',
            storage: 'Store the keyboard in a cool, dry place. Avoid exposure to liquids or extreme temperatures.',
        },
        warranty: {
            period: '2 years from the date of purchase.',
            support: 'For assistance, contact customer support via the manufacturer’s website or call the support hotline at 1-800-555-1234.',
        },
    };

    return (
        <div>
            <Header />
            <KeyboardInfo {...keyboardData} />
            <Footer />
        </div>
    );
};

export default App;
