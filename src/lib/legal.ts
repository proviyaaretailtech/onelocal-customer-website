// The facts the privacy policy and terms state, in one place. Kept in step with the app's notice
// (OL-ui frontend/constants/privacy.ts, version below). Not legal advice: a lawyer should review both pages.
// Anything still "[to be confirmed]" must be filled before launch; the pages highlight it.
export const TBC = "[to be confirmed]";

export const LEGAL = {
  noticeVersion: "2026-09-27.1",
  updated: "16 October 2026",
  brand: "OneLocal",
  // From the Certificate of Incorporation dated 2 April 2026 (Ministry of Corporate Affairs). The certificate
  // calls this address the "mailing address as per record"; confirm it is also the registered office.
  legalEntity: "Proviyaa Global (OPC) Private Limited (CIN U70200ME2026OPC474234)",
  registeredAddress: "C/o Yerte Manisha Baswaraj, Bunglow No. 37, New Adarsh Colony, Ausa Road, Latur 413512, Maharashtra, India",
  grievanceOfficer: { name: "Vaishnavi Baswaraj Yerte", email: "proviyaaretailtech@gmail.com", phone: "+91 86683 20699", hours: "Monday to Saturday, 10 am to 6 pm" },
  supportEmail: "proviyaaretailtech@gmail.com",
  responseDays: 90,
  minimumAge: 18,
  city: "Latur, Maharashtra",
};

export const isTbc = (v: string) => v.includes(TBC);
