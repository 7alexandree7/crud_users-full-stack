import { useEffect } from "react";

function ChangeFavicon() {
  useEffect(() => {
    const faviconList = [
      "../../../public/amigo.png",
      "../../../public/civil-engineering.png",
      "../../../public/funcionario.png",
      "../../../public/user-interface.png",
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
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return null;
}

export default ChangeFavicon;
