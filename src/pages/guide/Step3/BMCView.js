import React from 'react';
import { useNavigate } from 'react-router-dom';
import html2pdf from 'html2pdf.js';

const sections = [
  'Key Partnerships',
  'Key Activities',
  'Key Resources',
  'Value Propositions',
  'Customer Relationships',
  'Channels',
  'Customer Segments',
  'Cost Structure',
  'Revenue Streams',
];


const BMCView = ({ bmc }) => {
    let navigate = useNavigate();
  return (
    <div className='bmc  Step1Form'>
        <h1>BUSINESS CANVAS MODEL</h1>
    <div className="bmc-container">
      <div className="bmc-section bmc-key-partnerships">
        <h2 className="bmc-section-title">Key Partnerships</h2>
        <p className="bmc-section-value">{bmc[0]?.value || ''}</p>
      </div>
      <div className="bmc-section bmc-key-activities">
        <h2 className="bmc-section-title">Key Activities</h2>
        <p className="bmc-section-value">{bmc[1]?.value || ''}</p>
      </div>
      <div className="bmc-section bmc-key-resources">
        <h2 className="bmc-section-title">Key Resources</h2>
        <p className="bmc-section-value">{bmc[2]?.value || ''}</p>
      </div>
      <div className="bmc-section bmc-value-propositions">
        <h2 className="bmc-section-title">Value Propositions</h2>
        <p className="bmc-section-value">{bmc[3]?.value || ''}</p>
      </div>
      <div className="bmc-section bmc-customer-relationships">
        <h2 className="bmc-section-title">Customer Relationships</h2>
        <p className="bmc-section-value">{bmc[4]?.value || ''}</p>
      </div>
      <div className="bmc-section bmc-channels">
        <h2 className="bmc-section-title">Channels</h2>
        <p className="bmc-section-value">{bmc[5]?.value || ''}</p>
      </div>
      <div className="bmc-section bmc-customer-segments">
        <h2 className="bmc-section-title">Customer Segments</h2>
        <p className="bmc-section-value">{bmc[6]?.value || ''}</p>
      </div>
      <div className="bmc-section bmc-cost-structure">
        <h2 className="bmc-section-title">Cost Structure</h2>
        <p className="bmc-section-value">{bmc[7]?.value || ''}</p>
      </div>
      <div className="bmc-section bmc-revenue-streams">
        <h2 className="bmc-section-title">Revenue Streams</h2>
        <p className="bmc-section-value">{bmc[8]?.value || ''}</p>
      </div>
    </div>
    <div className="bmc-actions">
        <button onClick={()=>{}}>Download BMC PDF</button>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
};

export default BMCView;
