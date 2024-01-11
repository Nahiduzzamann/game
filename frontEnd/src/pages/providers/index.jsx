import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Providers() {
  const [providers, setProviders] = useState([]);
  const { category } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const data = localStorage.getItem("category");
    if (data) {
      setProviders(JSON.parse(data));
    }
  }, []);
  return (
    <div className="container mx-auto">
      <div className="grid px-6 py-6 grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-6 ">
        {providers[parseInt(category)]?.subCategory?.map((doc, i) => (
          <div
            onClick={() => navigate(`/games/${doc.system}/${category}`)}
            key={i}
            className="flex hover:bg-gray-400 cursor-pointer flex-wrap justify-center bg-blue-300 rounded-md px-3 py-2"
          >
            <img className="w-full" src={doc.image_colored} />
            <div className="text-lg font-bold w-full text-center">
              {doc.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
