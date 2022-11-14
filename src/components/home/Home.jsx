import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Product from "../product/Product";
import "./Home.css";
import axios from "axios";
const Home = () => {
  const navigate = useNavigate();
  const [products, setproducts] = useState();
  const [handleshowproduct, sethandleshowproduct] = useState(true);
  const getproducts = async () => {
    const { data } = await axios.get(
      "https://backend.akash.nepalifykart.com/api/product/getAllProduct"
    );
    setproducts(data.products);
  };

  console.log(handleshowproduct);
  useEffect(() => {
    getproducts();
  }, [handleshowproduct]);

  return (
    <>
      <nav>
        {handleshowproduct && (
          <button
            className="btnhome"
            onClick={() => sethandleshowproduct(false)}
          >
            Hide Products
          </button>
        )}

        {!handleshowproduct && (
          <button
            className="btnhome"
            onClick={() => sethandleshowproduct(true)}
          >
            Show Products
          </button>
        )}

        <button className="btnhome" onClick={() => navigate("/showuserlist")}>
          Show Userlist
        </button>
        <button className="btnhome" onClick={() => navigate("/counter")}>
          Counter
        </button>
        <button className="btnhome" onClick={() => navigate("/sum")}>
          Sum of two no
        </button>
      </nav>
      {handleshowproduct ? (
        <>
          <section id="products" className="container mt-5">
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {products &&
                products.map((product) => {
                  return (
                    <>
                      <Product key={product._id} product={product} />
                    </>
                  );
                })}
            </div>
          </section>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Home;
