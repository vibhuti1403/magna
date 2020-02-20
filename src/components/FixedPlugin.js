
import React,{useContext} from "react";
import '../../src/css/FixedPlugin.css';
import {black,blue,red,green,dark_blue} from './helperComponents/Themes';
import {ThemeContext} from '../App'
import { ThemePalleteContext } from "./Store";
export default function FixedPlugin(props) {

  const [,setTheme] = useContext(ThemeContext)
  const [themePallete,setThemePallete] = useContext(ThemePalleteContext)

  return (
    <div className={"fixed-plugin"}>
      <ul className="dropdown-menu">
        <li className="header-title">Theme</li>
        <li className="adjustments-line">
          <span
            className={
              
              "badge filter badge-blue"
            }

            onClick={() => {
              setTheme(blue)
              setThemePallete(!themePallete)
            }}
          />

          <span
            className={"badge filter badge-dark-blue"}
            onClick={() => {
              setTheme(dark_blue)
              setThemePallete(!themePallete)

            }}
          />

          <span
            className={"badge filter black"}
            onClick={() => {
              setTheme(black)
              setThemePallete(!themePallete)

            }}
          />

          <span
            className={"badge filter badge-green"}
            onClick={() => {
              setTheme(green)
              setThemePallete(!themePallete)

            }}
          />

          <span
            className={"badge filter badge-red"}
            onClick={() => {
              setTheme(red)
              setThemePallete(!themePallete)

            }}
          />



        </li>
      </ul>
    </div>
  );
}

