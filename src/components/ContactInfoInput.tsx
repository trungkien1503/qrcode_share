import React from 'react';

interface ContactInfoInputProps {
  name: string;
  email: string;
  phone: string;
  instagram: string;
  twitter: string;
  facebook: string;
  notes: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  className?: string;
}

const ContactInfoInput: React.FC<ContactInfoInputProps> = ({
  name,
  email,
  phone,
  instagram,
  twitter,
  facebook,
  notes,
  onChange,
  className
}) => {
  return (
    <div className={className}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={onChange}
        placeholder="Name"
        className="w-full px-3 py-2 mb-4 border rounded"
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={onChange}
        placeholder="Email"
        className="w-full px-3 py-2 mb-4 border rounded"
      />
      <input
        type="tel"
        name="phone"
        value={phone}
        onChange={onChange}
        placeholder="Phone"
        className="w-full px-3 py-2 mb-4 border rounded"
      />
      <input
        type="text"
        name="instagram"
        value={instagram}
        onChange={onChange}
        placeholder="Instagram"
        className="w-full px-3 py-2 mb-4 border rounded"
      />
      <input
        type="text"
        name="twitter"
        value={twitter}
        onChange={onChange}
        placeholder="Twitter"
        className="w-full px-3 py-2 mb-4 border rounded"
      />
      <input
        type="text"
        name="facebook"
        value={facebook}
        onChange={onChange}
        placeholder="Facebook"
        className="w-full px-3 py-2 mb-4 border rounded"
      />
      <textarea
        name="notes"
        value={notes}
        onChange={onChange}
        placeholder="Notes"
        className="w-full px-3 py-2 mb-4 border rounded"
      />
    </div>
  );
};

export default ContactInfoInput;