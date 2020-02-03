import { useState } from "react";
import api from "../api";
import Router from "next/router";
import cogo from "cogo-toast";
import PrimaryButton from "./PrimaryButton";
import Page from "../pages";

export default () => {
  /**
   * Initial state
   */
  const [key, setKey] = useState("");
  const [added, keyWasAdded] = useState(false);

  /**
   * Event handlers
   */
  const handleInput = e => setKey(e.target.value);
  const refreshPage = () => {
    window.location.reload();
  };

  /**
   * Set key to localStorage
   */
  const setApiKey = async key => {
    localStorage.setItem("apikey", key);
    if (localStorage.getItem("apikey")) {
      keyWasAdded(true);
      setTimeout(() => {
        refreshPage();
      }, 1500);
    }
  };

  return (
    <div className="wrapper mb-5">
      {!added ? (
        <>
          <p className="text-muted font-weight-light">
            To get started, <a href="https://tokendatabase.com/register?pk_campaign=news_search_signup" className="text-theme-primary font-weight-normal" target="_blank">sign up for TokenDatabase</a> and paste your API key below
          </p>
          <div className="row">
            <div className="col-12 col-lg-7">
              <div className="input-wrapper">
                <input
                  type="text"
                  name="apikey"
                  placeholder="API Key"
                  className="form-control apikey-input"
                  onChange={e => handleInput(e)}
                  value={key}
                />
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <PrimaryButton
                className="btn-block"
                onClick={() => setApiKey(key)}
              >
                Add Key
              </PrimaryButton>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center">
          <img
            src="/loading.gif"
            height={75}
            className="mx-auto text-center mb-3"
          />
          <br />
          <span className="lead text-theme-primary">
            Adding Your Key
          </span>
        </div>
      )}
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
      `}</style>
    </div>
  );
};
