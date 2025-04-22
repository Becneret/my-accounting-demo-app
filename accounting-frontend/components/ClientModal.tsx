// components/ClientModal.tsx
import React, { useState, useEffect } from 'react';

interface ClientModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (client: { name: string; email: string }) => void;
  clientToEdit?: { name: string; email: string }; // Optional prop for editing a client
}

const ClientModal: React.FC<ClientModalProps> = ({ isOpen, onClose, onSave, clientToEdit }) => {
  const [name, setName] = useState(clientToEdit?.name || '');
  const [email, setEmail] = useState(clientToEdit?.email || '');

  useEffect(() => {
    if (clientToEdit) {
      setName(clientToEdit.name);
      setEmail(clientToEdit.email);
    }
  }, [clientToEdit]);

  const handleSave = () => {
    onSave({ name, email });
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md w-96">
            <h2 className="text-xl font-bold mb-4">{clientToEdit ? 'Edit Client' : 'Add Client'}</h2>
            <div className="mb-4">
              <label className="block mb-2">Name</label>
              <input
                type="text"
                className="w-full border p-2 rounded-md"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Email</label>
              <input
                type="email"
                className="w-full border p-2 rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button onClick={onClose} className="bg-gray-400 text-white px-4 py-2 rounded-md">
                Cancel
              </button>
              <button onClick={handleSave} className="bg-blue-600 text-white px-4 py-2 rounded-md">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ClientModal;
