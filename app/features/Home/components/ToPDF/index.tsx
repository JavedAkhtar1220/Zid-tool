import React from "react";
import { toPDFMockData } from "../../mockData";
import Image from "next/image";

const ToPDF: React.FC = () => {
  return (
    <div className="my-8">
      <h1 className="font-bold text-4xl">Convert to PDF</h1>

      <div className="mt-8 flex flex-wrap gap-4">
        {toPDFMockData.map((val) => (
          <div
            className="border p-4 w-64 h-48 rounded-xl hover:shadow-md cursor-pointer"
            key={val.id}
          >
            <Image src={val.img_uri} alt={val.heading} width={65} height={65} />
            <h2 className="text-xl font-bold mt-2">{val.heading}</h2>
            <p className="mt-2 text-gray-500 text-sm">{val.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToPDF;
