import React from "react";
const obj = {
    id: "10002",
  
    name: "Eco-Friendly Water Bottle",
  
    description: "Stay hydrated with our durable, eco-friendly water bottle.",
  
    price: 14.99,
  
    currency: "USD",
  
    imageURL: "https://example.com/images/product-10002.jpg",
  };
  

export default function Assignment3(){
  const entries = Object.entries(obj).reduce((acc, [key, value], index) => { 
      acc.push(
          <tr key={index}>
              <td>{key}</td>
              <td>{value}</td>
              <td>{index}</td>
          </tr>
        );
        return acc;
  }, []);

    return (
      <>
        <table>
          <tr>
            <th>key</th>
            <th>value</th>
            <th>position</th>
          </tr>
            {entries}
        </table>
      </>
    );
  }
  