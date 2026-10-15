// Where the OneLocal customer app (Android APK) is downloaded from.
// Every button on the site links to /download, which redirects to CUSTOMER_APK_URL when set (e.g. the
// Play Store later), else to the newest GitHub release below.
export const DOWNLOAD_PATH = "/download";

// GitHub "latest" link: always serves the newest release in the releases-only repository
// (proviyaaretailtech/onelocal-app-releases: APK files, no source code). Publish a new build with
// `scripts/publish-apk.sh` in the OneLocal app (OL-ui/frontend).
export const FALLBACK_APK_URL = "https://github.com/proviyaaretailtech/onelocal-app-releases/releases/latest/download/onelocal.apk";

// The partner website, for shop owners who land here.
export const PARTNER_SITE = "https://partner.onelocal.co";
