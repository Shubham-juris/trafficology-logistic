import React from "react";

const TransportContentSection = () => {
  return (
    <div className="px-6 pb-10 space-y-6 mb-10 text-gray-700">
      {/* 3PL */}
      <div>
        <h3 className="text-xl font-semibold">3PL (Third Party Logistics)</h3>
        <p className="mt-2 text-sm">
          Third-party logistics, also called 3PL, is when a business hires
          another company to handle its logistics and supply chain needs. This
          allows the business to concentrate on its main activities while the
          logistics expert manages the logistics side. 3PL services and
          facilities often handle warehousing, transportation, and distribution.
          Trafficology Logistics INC is a reliable 3PL provider, backed by
          advanced software capabilities, cutting-edge logistics technology, and
          deep industry expertise — increasing efficiency and productivity
          significantly.
        </p>
      </div>

      {/* 4PL */}
      <div>
        <h3 className="text-xl font-semibold">4PL (Fourth Party Logistics)</h3>
        <p className="mt-2 text-sm">
          4PL, or Fourth-Party Logistics, refers to a service where the provider
          manages the entire supply chain for a business from start to finish.
          Unlike 3PL, which focuses on certain tasks like shipping or inventory
          management, 4PL offers complete oversight and strategic control of the
          entire logistics process. Trafficology Logistics INC provides
          data-driven 4PL solutions that centralize all logistics operations into
          one unified system — allowing businesses to focus on their core
          strengths while we optimize contracts, routes, and courier costs for
          maximum performance.
        </p>
      </div>

      {/* Freight Forwarding */}
      <div>
        <h3 className="text-xl font-semibold">Freight Forwarding</h3>
        <p className="mt-2 text-sm">
          Trafficology Logistics INC provides comprehensive air, sea, and land
          freight forwarding solutions for global shipments, ensuring every
          product moves quickly and securely. Our services include booking cargo
          space, preparing shipping documentation, and GPS tracking to ensure
          the fastest arrival of valuable or time-sensitive goods. We also
          assist with customs duties, taxes, and international regulations to
          ensure smooth delivery. With years of expertise in international
          freight management, we design customized shipping plans that guarantee
          cost-effective, on-time deliveries to destinations worldwide.
        </p>
      </div>
    </div>
  );
};

export default TransportContentSection;
