import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

export default function App() {
  const { t } = useTranslation();
  return (
    <div className="font-sans text-gray-900 bg-gray-50 w-screen">
      {/* Language switcher */}
      <div className="p-4 text-right">
        <LanguageSwitcher />
      </div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-24 px-6">
        <h1 className="text-5xl font-extrabold">{t("hero.title")}</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">{t("hero.subtitle")}</p>
        <button className="mt-6 bg-white text-blue-600 hover:bg-gray-200 px-8 py-3 rounded-lg font-semibold shadow-md transition">
          {t("hero.cta")}
        </button>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 text-center bg-gray-900 text-white">
        <h2 className="text-3xl font-bold mb-8">{t("features.title")}</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-8 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">
              {t("features.fastDeploy.title")}
            </h3>
            <p className="mt-3 text-gray-300">
              {t("features.fastDeploy.description")}
            </p>
          </div>
          <div className="p-8 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">
              {t("features.affordablePricing.title")}
            </h3>
            <p className="mt-3 text-gray-300">
              {t("features.affordablePricing.description")}
            </p>
          </div>
          <div className="p-8 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">
              {t("features.scalableInfra.title")}
            </h3>
            <p className="mt-3 text-gray-300">
              {t("features.scalableInfra.description")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
