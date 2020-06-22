import React from "react";
import { useRecoilState } from "recoil";
import { about_SelectedPortrait } from "../../Storage";
import { ReactComponent as Portrait } from "../../svgs/About Page/Self_Portrait.svg";
//this needs to be replaced with links later but for testing/now we'll go with this
import { ReactComponent as HtmlCssLogo } from "../../svgs/About Page/Logos/Html + Css Logo.svg";
import { ReactComponent as JsLogo } from "../../svgs/About Page/Logos/Js Logo.svg";
import { ReactComponent as ReactLogo } from "../../svgs/About Page/Logos/React Logo.svg";
import { ReactComponent as GitLogo } from "../../svgs/About Page/Logos/Git Logo.svg";
import { ReactComponent as LinuxLogo } from "../../svgs/About Page/Logos/Linux Logo.svg";
import { ReactComponent as PythonLogo } from "../../svgs/About Page/Logos/Python Logo.svg";
import DrawSVG from "../Animation/DrawSVG";
import "./SkillsLogos.css";

function SkillsLogos(props) {
  const [selectedLogo, setSelectedLogo] = useRecoilState(
    about_SelectedPortrait
  );

  const handleChangeLogo = (newLogo) => {
    if (newLogo !== selectedLogo) {
      setSelectedLogo(newLogo);
    }
  };

  // Easy way to modify order without copy pasting inside logosHandle
  const order = [
    "HtmlCss",
    "Js",
    "React",
    "Portrait",
    "Git",
    "Linux",
    "Python",
  ];

  const logoClassName = (logoName) =>
    selectedLogo === logoName ? "logo selected" : "logo";

  const logosHandle = {
    HtmlCss: (
      <HtmlCssLogo
        className={logoClassName("HtmlCss")}
        onClick={() => handleChangeLogo("HtmlCss")}
      />
    ),
    Js: (
      <JsLogo
        className={logoClassName("Js")}
        onClick={() => handleChangeLogo("Js")}
      />
    ),
    React: (
      <ReactLogo
        className={logoClassName("React")}
        onClick={() => handleChangeLogo("React")}
      />
    ),
    Git: (
      <GitLogo
        className={logoClassName("Git")}
        onClick={() => handleChangeLogo("Git")}
      />
    ),
    Linux: (
      <LinuxLogo
        className={logoClassName("Linux")}
        onClick={() => handleChangeLogo("Linux")}
      />
    ),
    Python: (
      <PythonLogo
        className={logoClassName("Python")}
        onClick={() => handleChangeLogo("Python")}
      />
    ),
    Portrait: (
      <Portrait
        className={logoClassName("Portrait")}
        onClick={() => handleChangeLogo("Portrait")}
      />
    ),
  };

  return (
    <div className="skills-logos">
      {order.map((elem, index) => {
        return (
          <div className={"logo-box " + elem} key={index}>
            <div className="stacked-logos">
              <DrawSVG
                delay={1500 + index * 300}
                duration="3000"
                outlineOnly="true"
                easingFunction="ease"
                undraw={props.undraw}
              >
                {logosHandle[elem]}
              </DrawSVG>
              {elem !== "Portrait" && typeof props.undraw === "undefined" && (
                <div className="fade-in">{logosHandle[elem]}</div>
              )}
            </div>
            {/* h3 is probably placeholder ...? */}
            {/* <h3 className="logo-subtitle">{logosHandle[elem].subtitle}</h3> */}
          </div>
        );
      })}
    </div>
  );
}

export default SkillsLogos;
