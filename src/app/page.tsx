"use client";

import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

export default function Home() {
  const { t, i18n } = useTranslation();

  const switchTo = async (lng: "en" | "th") => {
    await i18n.changeLanguage(lng); // แจ้ง i18next เปลี่ยนภาษา
    Cookies.set("i18next", lng, { sameSite: "lax" }); // กันกรณี detector ไม่ได้เขียนเอง
    document.documentElement.lang = lng; // SEO/assistive tech
  };

  return (
    <div>
      {t("get_start")} <code>src/app/page.tsx</code>
      {t("save_your_change")}
      {t("errors.name_required")}
      <div style={{ marginTop: 16 }}>
        <button onClick={() => switchTo("en")}>English</button>
        <button onClick={() => switchTo("th")} style={{ marginLeft: 8 }}>
          ภาษาไทย
        </button>
      </div>
    </div>
  );
}
