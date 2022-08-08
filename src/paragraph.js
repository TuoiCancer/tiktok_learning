import { useContext } from "react";
import { themeContext } from "./ThemeContext";

function Paragraph() {
  const obectContext = useContext(themeContext);
  return (
    <p className={obectContext.theme}>
      The nested url segments map to nested component trees. This is perfect for
      creating UI that has persistent navigation in layouts with an inner
      section that changes with the URL. If you look around the web you'll
      notice many websites (and especially web apps) have multiple levels of
      layout nesting.
    </p>
  );
}

export default Paragraph;
