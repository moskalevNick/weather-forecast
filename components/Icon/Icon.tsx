import { CloudyIcon } from "./icons/CloudyIcon";
import { RainyIcon } from "./icons/RainyIcon";
import { SnowyIcon } from "./icons/SnowyIcon";
import { SunIcon } from "./icons/SunIcon";

type Props = {
  name: string;
  className: string;
};

export type Styles = {
  w?: string;
  h?: string;
  fill?: string;
  stroke?: string;
};

const Icon = ({ name, className }: Props) => {
  const classArr = className.toLowerCase().split(" ");
  const styles: Styles = {};
  classArr.map((el) => {
    const arr: string[] = el.split("-");
    if (arr.length !== 2) return;
    if (
      arr[0] === "w" ||
      arr[0] === "h" ||
      arr[0] === "fill" ||
      arr[0] === "stroke"
    ) {
      const key = arr[0];
      let val = arr[1];
      if (key === "h" || key === "w") val = (+val * 12).toString();
      styles[key] = val;
    }
  });

  function getIcon(name: string) {
    switch (name) {
      case "Rain":
        return <RainyIcon styles={styles} />;
      case "Clouds":
        return <CloudyIcon styles={styles} />;
      case "Clear":
        return <SunIcon styles={styles} />;
      case "Snow":
        return <SnowyIcon styles={styles} />;
      default:
        return <div className="font-bold">No Icon :(</div>;
    }
  }

  return <div className="m-auto w-fit">{getIcon(name)}</div>;
};

export default Icon;
