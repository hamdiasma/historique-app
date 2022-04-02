import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { createPrd, deleteProduct } from "../redux/actions/product";
import { createHistorique } from "../redux/actions/historique";
import moment from "moment";

function Page3(props) {
  const { auth, products } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    productTitle: "",
    productDesc: "",
  });

  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (formData.productTitle === "" || formData.productDesc === "") {
      return alert("Empty fileds");
    }
    dispatch(createPrd(formData, auth.token));
    dispatch(
      createHistorique({
        messageHistorique: `${auth.user.fullname} ${auth.user.username} create new product`,
      })
    );
    setFormData({ productTitle: "", productDesc: "" });
  };
  const handeldelete = (prd) => {
    dispatch(deleteProduct(products.products, prd._id, auth.token));
    dispatch(
      createHistorique({
        messageHistorique: `${auth.user.fullname} ${auth.user.username} delete le produit: ${prd.productTitle}`,
      })
    );
  };

  return (
    <div>
      <div className="row">
        <div className="col">
          <h6>Get all products</h6>
          {products.products.length === 0 ? (
            <div>No Product yset .!</div>
          ) : (
            <ul className="list-group ">
              {products.products.map((prd) => (
                <li
                  className="list-group-item d-flex justify-content-between"
                  key={prd._id}
                >
                  <span>{prd.productTitle}</span>
                  <button
                    className="btn btn-danger"
                    onClick={() => handeldelete(prd)}
                  >
                    delete
                  </button>{" "}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="col">
          <h6>Create new product</h6>
          <form onSubmit={handelSubmit}>
            <div className="mb-3">
              <label htmlFor="product" className="form-label">
                Product title
              </label>
              <input
                name="productTitle"
                type="text"
                className="form-control"
                id="product"
                aria-describedby="emailHelp"
                onChange={handelChange}
                value={formData.productTitle}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="desc" className="form-label">
                Product desc
              </label>
              <input
                name="productDesc"
                type="text"
                className="form-control"
                id="desc"
                onChange={handelChange}
                value={formData.productDesc}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

Page3.propTypes = {};

export default Page3;
