// Generated by BUCKLESCRIPT VERSION 5.0.4, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");

function RepoItem(Props) {
  var repo = Props.repo;
  return React.createElement("div", undefined, React.createElement("a", {
                  href: repo[/* html_url */2]
                }, React.createElement("h2", undefined, repo[/* full_name */0])), String(repo[/* stargazers_count */1]) + " stars");
}

var make = RepoItem;

exports.make = make;
/* react Not a pure module */
