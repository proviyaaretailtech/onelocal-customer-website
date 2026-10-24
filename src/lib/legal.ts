// The facts the privacy policy and terms state, in one place. Kept in step with the app's notice
// (OL-ui frontend/constants/privacy.ts, version below). Not legal advice: a lawyer should review both pages.
// Anything still "[to be confirmed]" must be filled before launch; the pages highlight it.
export const TBC = "[to be confirmed]";

export const LEGAL = {
  noticeVersion: "2026-10-24.1",
  updated: "24 October 2026",
  brand: "OneLocal",
  // Company name as on the PAN card (incorporated 28 July 2026). The CIN is left out until the new Certificate of
  // Incorporation is in hand. The address below comes from the earlier certificate: confirm it is still the registered
  // office. The earlier certificate calls this address the "mailing address as per record"; confirm it is also the registered office.
  legalEntity: "Proviyaa Retail Technologies Private Limited",
  registeredAddress: "C/o Yerte Manisha Baswaraj, Bunglow No. 37, New Adarsh Colony, Ausa Road, Latur 413512, Maharashtra, India",
  grievanceOfficer: { name: "Vaishnavi Baswaraj Yerte", email: "proviyaaretailtech@gmail.com", phone: "+91 86683 20699", hours: "Monday to Saturday, 10 am to 6 pm" },
  // Business phone shown in the site footer. Empty hides it until the founder supplies the number.
  businessPhone: "",
  supportEmail: "proviyaaretailtech@gmail.com",
  responseDays: 90,
  minimumAge: 18,
  city: "Latur, Maharashtra",
};

export const isTbc = (v: string) => v.includes(TBC);
