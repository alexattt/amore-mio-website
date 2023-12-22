import React, { memo, useContext } from "react";
import { langContext } from "../App";
import Title from "./shared-components/Title";
import { useWindowSize } from "../utils/helpers";

const AboutUsContainer = () => {
  const translations = useContext(langContext);
  const size = useWindowSize();

  var aboutUs = translations.aboutUs.split(/[\r\n]+/);
  var signature = translations.aboutUsSignature.split(/[\r\n]+/);

  return (
    <div id="about-us" className={"flex-column"}>
      <Title title={translations.navbar["about-us"]} />
      <div className="flex-row" style={{ marginTop: "50px" }}>
        <div className="flex-column about-us-text">
          {aboutUs.map((sentence: string) => {
            return (
              <p key={sentence.slice(0, 20)} className="sentence">
                {sentence}
              </p>
            );
          })}
          <br />
          {signature.map((sentence: string) => {
            return (
              <p key={sentence.slice(0, 20)} className="sentence">
                {sentence}
              </p>
            );
          })}
        </div>
      </div>
      <div id="keywords" className="flex-row">
        {translations.keywords.map((keyword: string) => {
          return (
            <p key={keyword} className="keyword">
              {keyword}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default memo(AboutUsContainer);
