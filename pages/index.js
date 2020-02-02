import React from "react";
import Head from "next/head";
import api from "../api/index";
import uuid from "uuid";
import { Spring } from "react-spring";

import PatternBackground from "../components/PatternBackground";
import ApiKeyForm from "../components/ApiKeyForm";
import SearchBar from "../components/SearchBar";
import ArticleCard from "../components/ArticleCard";

export default class Page extends React.Component {
  constructor() {
    super();

    /**
     * initial component state
     */
    this.state = {
      results: [],
      error: "",
      remaining: "",
      query: "",
      apikey: "",
      searching: false
    };

    /**
     * bind event handlers to component class
     */
    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
  }

  /**
   * get apikey from localstorage and set to state
   */
  componentDidMount() {
    const apikey = localStorage.getItem("apikey");
    this.setState({ apikey });
  }

  /**
   * make search request to TokenDatabase.com API
   * @param   {String}  q  news post query
   */
  search(q) {
    if (q) {
      this.setState({ searching: true });
      api.queryNews(q).then(({ results, remaining }) => {
        this.setState({ results, remaining, searching: false });
      });
    }
  }

  /**
   * handle input change event
   */
  handleChange(e) {
    const { value } = e.target;

    this.setState({
      query: value
    });
  }

  render() {
    /**
     * map results to ArticleCard components
     * note: only rendered if this.state.results.length > 0
     */
    const results = this.state.results.map(x => <ArticleCard article={x} />);

    return (
      <div className="wrapper">
        <PatternBackground>
          <div className="container page-offset-padding">
            <Spring
              from={{ opacity: 0, marginTop: -50 }}
              to={{ opacity: 1, marginTop: 0 }}
            >
              {props => (
                <div style={props}>
                  <h1 className="header-main mb-4 display-4">
                    TokenDatabase News API Search
                  </h1>
                </div>
              )}
            </Spring>
            {/**
             * if apikey is set, show search area
             * else show form to input api key
             */}
            {this.state.apikey ? (
              <SearchBar
                search={this.search}
                remaining={this.state.remaining}
              />
            ) : (
              <ApiKeyForm />
            )}
          </div>
        </PatternBackground>
        {this.state.searching && (
          <div className="text-center">
            <img
              src="/loading.gif"
              height={75}
              className="mx-auto text-center"
            />
          </div>
        )}
        {this.state.apikey && results.length > 0 && (
          <div className="results-wrapper mt-4">
            <div className="container">
              <div className="row">
                <div className="col-12">{results}</div>
              </div>
            </div>
          </div>
        )}
        <style jsx>{`
          .header-main {
            color: #5266e3;
            letter-spacing: -2px;
            font-weight: 700;
          }
          .result {
            margin: 1rem 0rem;
            text-align: left;
          }
          .results {
            border: 1px solid #eee;
            width: 100%;
            height: 100%;
          }
          .results-wrapper {
            background: #e5ebf5;
            padding-top: 4rem;
            padding-bottom: 10rem;
          }
          .search-bar {
            width: 100%;
            padding: 10px 20px;
            transition: all 0.3s;
            border: 1px solid black;
          }
          .page-offset-padding {
            padding-top: 8rem;
            min-height: 370px;
          }
          .wrapper {
          }
        `}</style>
      </div>
    );
  }
}
