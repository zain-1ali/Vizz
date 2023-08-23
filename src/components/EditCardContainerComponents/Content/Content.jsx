import React from "react";
import "./content.scss";
import { AiOutlinePlus } from "react-icons/ai";
import Switch from "@mui/material/Switch";
import { ThemeProvider, createTheme } from "@mui/material";
import { RiDraggable } from "react-icons/ri";
import { FaRedditAlien } from "react-icons/fa";
const Content = () => {
  const theme = createTheme({
    palette: {
      switchClr: {
        primary: "#DEA527",
      },
    },
  });

  return (
    <div className="content-main">
      <div className="content-upper">
        <div className="lead-direct">
          <div className="lead">
            {/* <ThemeProvider theme={theme}> */}
            <Switch defaultChecked />
            {/* </ThemeProvider> */}

            <p>Lead Mode</p>
          </div>
          <div className="direct">
            {/* <ThemeProvider theme={theme}> */}
            <Switch defaultChecked size="small" />
            {/* </ThemeProvider> */}
            <p>Direct</p>
          </div>
        </div>
        <div className="add-link">
          <AiOutlinePlus
            style={{ color: "white", fontSize: "20px", marginRight: "5px" }}
          />{" "}
          Add Links and Contacts
        </div>
      </div>

      <div className="content-links">
        <div className="single-link">
          <div className="link-inner">
            <div className="link-left">
              <RiDraggable />
              <div className="icon-container">
                <FaRedditAlien style={{ color: "white" }} />
              </div>
              <p>Reddit</p>
            </div>

            <div className="link-right">
              <div className="remove-btn">Remove Link</div>
              <div className="open-btn">Open Link</div>
            </div>
          </div>
        </div>

        <div className="single-link">
          <div className="link-inner">
            <div className="link-left">
              <RiDraggable />
              <div className="icon-container">
                <FaRedditAlien style={{ color: "white" }} />
              </div>
              <p>Reddit</p>
            </div>

            <div className="link-right">
              <div className="remove-btn">Remove Link</div>
              <div className="open-btn">Open Link</div>
            </div>
          </div>
        </div>

        <div className="single-link">
          <div className="link-inner">
            <div className="link-left">
              <RiDraggable />
              <div className="icon-container">
                <FaRedditAlien style={{ color: "white" }} />
              </div>
              <p>Reddit</p>
            </div>

            <div className="link-right">
              <div className="remove-btn">Remove Link</div>
              <div className="open-btn">Open Link</div>
            </div>
          </div>
        </div>

        <div className="single-link">
          <div className="link-inner">
            <div className="link-left">
              <RiDraggable />
              <div className="icon-container">
                <FaRedditAlien style={{ color: "white" }} />
              </div>
              <p>Reddit</p>
            </div>

            <div className="link-right">
              <div className="remove-btn">Remove Link</div>
              <div className="open-btn">Open Link</div>
            </div>
          </div>
        </div>

        <div className="single-link">
          <div className="link-inner">
            <div className="link-left">
              <RiDraggable />
              <div className="icon-container">
                <FaRedditAlien style={{ color: "white" }} />
              </div>
              <p>Reddit</p>
            </div>

            <div className="link-right">
              <div className="remove-btn">Remove Link</div>
              <div className="open-btn">Open Link</div>
            </div>
          </div>
        </div>

        <div className="add-link-btn">
          <AiOutlinePlus
            style={{ color: "#878787", fontSize: "16px", marginRight: "5px" }}
          />
          Add Links and Contacts
        </div>
      </div>
    </div>
  );
};

export default Content;
