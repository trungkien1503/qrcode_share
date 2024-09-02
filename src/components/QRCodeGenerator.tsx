import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react'; // Use the correct named export
import ContactInfoInput from './ContactInfoInput';

const QRCodeGenerator: React.FC = () => {
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
    instagram: '',
    twitter: '',
    facebook: '',
    notes: ''
  });
  const [qrCodeData, setQrCodeData] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleGenerateQRCode = () => {
    console.log("Generate QR Code button clicked");
    const { name, email, phone } = contactInfo;
    if (!name || !email || !phone) {
      console.error("All fields are required");
      return;
    }
    const qrData = JSON.stringify(contactInfo);
    setQrCodeData(qrData);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">QR Code Generator</h1>
      <ContactInfoInput
        name={contactInfo.name}
        email={contactInfo.email}
        phone={contactInfo.phone}
        instagram={contactInfo.instagram}
        twitter={contactInfo.twitter}
        facebook={contactInfo.facebook}
        notes={contactInfo.notes}
        onChange={handleChange}
        className="mb-4"
      />
      <button
        onClick={handleGenerateQRCode}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
      >
        Generate QR Code
      </button>
      {qrCodeData && (
        <div className="mt-4 text-center">
          <QRCodeSVG value={qrCodeData} className="mx-auto" />
          <p className="mt-2 text-sm text-gray-600 break-words">
            QR Code Data: {qrCodeData}
          </p>
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;