import React, { useEffect, useState } from 'react';


export default function Product() {
  const [apiResponse, setApiResponse] = useState(); 
  useEffect(() => {
    fetch("http://localhost:9000/testAPI")
    .then(res => res.text())
    .then(res => setApiResponse(res));
  });

  return(
    <div className="wrapper">
      {apiResponse}
    </div>
  )
}