import { useState } from "react";
import Router from "next/router";
import cogo from "cogo-toast";
import PrimaryButton from "./PrimaryButton";
import Page from "../pages";

export default props => {
  /**
   * initial state
   */
  const [query, setQuery] = useState("");
  const handleInput = e => setQuery(e.target.value);

  /**
   * event handlers
   */
  const refreshPage = () => {
    window.location.reload();
  };
  const goTo = url => {
    window.open(url, "_blank");
  };

  /**
   * remove key from localstorage
   */
  const unsetKey = () => {
    localStorage.removeItem("apikey");

    if (!localStorage.getItem("apikey")) {
      window.location.reload();
    }
  };

  return (
    <div className="wrapper mb-5">
      <p className="text-muted font-weight-light">
        Search TokenDatabase News API
      </p>
      <div className="row mb-2">
        <div className="col-12 col-lg-9">
          <div className="input-wrapper">
            <form
              onSubmit={e => {
                e.preventDefault();
                return props.search(query);
              }}
            >
              <input
                type="text"
                name="apikey"
                placeholder="Search for..."
                className="form-control apikey-input"
                onChange={e => handleInput(e)}
                value={query}
              />
            </form>
          </div>
        </div>
        <div className="col-12 col-lg-3">
          <PrimaryButton
            className="btn-block"
            onClick={() => props.search(query)}
          >
            Search TokenDatabase
          </PrimaryButton>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-9 d-flex justify-content-between">
          <div className="d-inline-block">
            <button
              className="btn btn-link text-theme-primary"
              onClick={() => goTo("https://tokendatabase.com/?pk_campaign=news_search_login")}
            >
              Login to TokenDatabase
            </button>
          </div>
          <div className="text-right d-inline-block pt-2">
            {props.remaining && (
              <span className="text-muted font-weight-light mr-2">
                <small className="blank-badge">
                  Credits remaining:{" "}
                  <span className="text-theme-primary">{props.remaining}</span>
                </small>
              </span>
            )}
            <span className="text-muted font-weight-light mr-2">
              <small className="success-badge">API key is connected</small>
            </span>
            <span
              className="text-muted font-weight-light"
              onClick={() => unsetKey()}
            >
              <small className="info-badge">Remove key</small>
            </span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .input-wrapper {
          border: 1px solid #5266e3;
          border-radius: 5px;
          padding: 10px 15px;
          box-sizing: border-box;
        }
        .apikey-input {
          border: none;
          outline: none !important;

          :focus {
            outline: none !important;
          }

          ::placeholder {
            color: #7c8be5;
          }
        }
        .blank-badge {
          padding: 5px 7px;
          // background: #F2F6FA;
          color: #aaaaaa;
          font-weight: 500;
        }
        .success-badge {
          padding: 5px 7px;
          background: #ddffeb;
          color: #14753c;
          font-weight: 500;
        }
        .info-badge {
          padding: 5px 7px;
          background: #dce1ff;
          color: #5266e3;
          font-weight: 500;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};
