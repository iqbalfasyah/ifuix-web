export const products = [
  {
    id: 'kebunpintar',
    name: 'KebunPintar',
    image: '/images/kebunpintar/home.png',
    platform: 'Android',
    tone: 'garden',
    detail: '/products/kebunpintar',
    download: '/download/kebunpintar',
  },
  {
    id: 'fuira',
    name: 'Fuira',
    image: '/images/fuira/Welcome.png',
    platform: 'Windows',
    tone: 'focus',
    detail: '/products/fuira',
    download: '/download/fuira',
  },
] as const

// Populate only with a verified APK and a publicly accessible download URL.
export const kebunRelease: {
  version: string | null
  url: string | null
  filename: string | null
  sizeMB: string | null
  sha256: string | null
  minAndroid: string | null
} = {
  version: '3.2.1',
  url: '/downloads/Kebun-Pintar-3.2.1-Android.apk',
  filename: 'Kebun-Pintar-3.2.1-Android.apk',
  sizeMB: '10.36',
  sha256: '8715292fab0f324bf3ffe84f4bf992408ac004c9809703c8a820bfc44c9583c2',
  minAndroid: '8.0',
}
