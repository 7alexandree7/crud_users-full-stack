import { useEffect } from "react";

function ChangeFavicon() {
  useEffect(() => {
    const faviconList = [
      "../../../public/111.png",
      "../../../public/222.png",
      "../../../public/333.png",
      "../../../public/444.png",
    ];
    let index = 0;

    const interval: any = setInterval(() => {
      const link: any =
        document.querySelector("link[rel='icon']") ||
        document.createElement("link");
      link.rel = "icon";
      link.href = faviconList[index];
      document.head.appendChild(link);

      index = (index + 1) % faviconList.length;
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return null;
}

export default ChangeFavicon;
