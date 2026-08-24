import React, { useState } from 'react';
import { X, Headphones, CheckCircle, Send, AlertTriangle, Wrench, Radio } from 'lucide-react';
import { BRAND_INFO } from '../../data/grainExData';

interface ServiceTicketModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ServiceTicketModal: React.FC<ServiceTicketModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [ticketType, setTicketType] = useState('Urgent Breakdown / Machine Stoppage');
  const [plantName, setPlantName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [equipmentCode, setEquipmentCode] = useState('Dryer Unit / Blower');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `GRX-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(generatedId);
    setSubmitted(true);
  };

  const handleSendWhatsAppEmergency = () => {
    const text = `*🚨 EMERGENCY SERVICE TICKET ${ticketId || 'REQUEST'}*%0A*Plant:* ${plantName}%0A*Contact:* ${contactPerson} (${contactPhone})%0A*Type:* ${ticketType}%0A*Equipment:* ${equipmentCode}%0A*Issue:* ${description}`;
    window.open(`https://wa.me/919789325252?text=${text}`, '_blank');
  };

  return (
    <div
      id="service-ticket-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="service-ticket-modal-dialog"
        className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-gray-200 overflow-hidden animate-in zoom-in-95 duration-200 text-gray-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0b2118] text-white p-5 px-6 flex items-center justify-between border-b border-[#1b4332]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-[#116c4a] rounded-lg text-[#a1f4c8]">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-[#a1f4c8] uppercase tracking-wider block">
                24/7 Field Engineering Portal
              </span>
              <h3 className="font-heading font-black text-lg text-white">
                Raise Technical Support Ticket
              </h3>
            </div>
          </div>
          <button
            id="close-service-modal-btn"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-4 space-y-4">
              <div className="w-14 h-14 bg-[#116c4a] text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                <CheckCircle className="w-8 h-8 text-[#a1f4c8]" />
              </div>
              <div className="space-y-1">
                <span className="px-3 py-1 bg-gray-100 text-[#1b4332] font-mono font-bold text-xs rounded-full inline-block">
                  Ticket #{ticketId}
                </span>
                <h4 className="font-heading font-bold text-xl text-[#1b4332]">
                  Service Ticket Dispatched
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Our regional on-call engineer for your zone has received this request. You will receive an immediate acknowledgment call on <strong className="text-[#1b4332]">{contactPhone}</strong>.
                </p>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  id="ticket-whatsapp-escalate-btn"
                  onClick={handleSendWhatsAppEmergency}
                  className="w-full py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2"
                >
                  <span>Escalate to Chief Engineer on WhatsApp</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-heading font-bold text-xs uppercase tracking-wider rounded-lg"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Issue Priority / Service Type *</label>
                <select
                  id="ticket-priority-select"
                  value={ticketType}
                  onChange={(e) => setTicketType(e.target.value)}
                  className="w-full bg-[#f9faf6] border border-gray-300 rounded-lg px-3 py-2 text-xs font-medium focus:outline-none focus:border-[#116c4a]"
                >
                  <option value="Urgent Breakdown / Machine Stoppage">🚨 Urgent Breakdown / Machine Stoppage</option>
                  <option value="Routine Preventive Maintenance (AMC)">Routine Preventive Maintenance (AMC)</option>
                  <option value="PLC / SCADA Software Calibration">PLC / SCADA Software Calibration</option>
                  <option value="Sensor / Thermocouple Replacement">Sensor / Thermocouple Replacement</option>
                  <option value="Spare Parts Urgent Dispatch">Spare Parts Urgent Dispatch</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">Plant / Mill Name *</label>
                  <input
                    id="ticket-plant-name"
                    type="text"
                    required
                    placeholder="Mill Name"
                    value={plantName}
                    onChange={(e) => setPlantName(e.target.value)}
                    className="w-full bg-[#f9faf6] border border-gray-300 rounded-lg px-3.5 py-2 text-xs focus:outline-none focus:border-[#116c4a]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">Contact Phone *</label>
                  <input
                    id="ticket-contact-phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    className="w-full bg-[#f9faf6] border border-gray-300 rounded-lg px-3.5 py-2 text-xs focus:outline-none focus:border-[#116c4a]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Contact Person Name</label>
                <input
                  id="ticket-contact-person"
                  type="text"
                  placeholder="Manager / Operator Name"
                  value={contactPerson}
                  onChange={(e) => setContactPerson(e.target.value)}
                  className="w-full bg-[#f9faf6] border border-gray-300 rounded-lg px-3.5 py-2 text-xs focus:outline-none focus:border-[#116c4a]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Machine / Module Affected</label>
                <select
                  id="ticket-equipment-select"
                  value={equipmentCode}
                  onChange={(e) => setEquipmentCode(e.target.value)}
                  className="w-full bg-[#f9faf6] border border-gray-300 rounded-lg px-3 py-2 text-xs font-medium focus:outline-none focus:border-[#116c4a]"
                >
                  <option value="Dryer Unit / Blower">Dryer Unit / Blower</option>
                  <option value="Parboiling Vessel / Steam Line">Parboiling Vessel / Steam Line</option>
                  <option value="Storage Bin / Discharge Gate">Storage Bin / Discharge Gate</option>
                  <option value="Boiler Feedwater / Steam Valves">Boiler Feedwater / Steam Valves</option>
                  <option value="SCADA Panel / Sensor Network">SCADA Panel / Sensor Network</option>
                  <option value="Paddy Cooler Tower">Paddy Cooler Tower</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Description of Symptoms</label>
                <textarea
                  id="ticket-description"
                  rows={2}
                  placeholder="Describe error code, vibration, temperature spike, or abnormal sound..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-[#f9faf6] border border-gray-300 rounded-lg px-3.5 py-2 text-xs focus:outline-none focus:border-[#116c4a] resize-none"
                />
              </div>

              <button
                id="submit-ticket-btn"
                type="submit"
                className="w-full py-3 bg-[#116c4a] hover:bg-[#158058] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-lg shadow transition-all flex items-center justify-center gap-2"
              >
                <span>Dispatch Service Ticket</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
