// The facts the privacy policy and terms state, in one place. Kept in step with the app's notice
// (OL-ui frontend/constants/privacy.ts, version below). Not legal advice: a lawyer should review both pages.
// Anything still "[to be confirmed]" must be filled before launch; the pages highlight it.
export const TBC = "[to be confirmed]";

export const LEGAL = {
  noticeVersion: "2026-09-27.1",
  updated: "15 October 2026",
  brand: "OneLocal",
  legalEntity: `${TBC}: registered company name`,
  registeredAddress: `${TBC}: registered office address`,
  grievanceOfficer: { name: `${TBC}: grievance officer`, email: `${TBC}: e.g. privacy@onelocal.co`, phone: `${TBC}: phone`, hours: "Monday to Saturday, 10 am to 6 pm" },
  supportEmail: "proviyaaretailtech@gmail.com",
  responseDays: 90,
  minimumAge: 18,
  city: "Latur, Maharashtra",
};

export const isTbc = (v: string) => v.includes(TBC);
