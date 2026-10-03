export interface Product {
  id: string
  name: string
  image: string
  platform: string
  tone: string
  detail: string
  download?: string
}
export const products: Product[] = [
  {
    id: 'framix',
    name: 'Framix Editor',
    image: '/images/framix/editor.webp',
    platform: 'Windows',
    tone: 'creative',
    detail: '/products/framix',
  },
  {
    id: 'kebunpintar',
    name: 'Kebun Pintar: Huruf & Angka',
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
]

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
  sizeMB: '9.88',
  sha256: 'dba0ac7294012d10450ec4cc9627153da9becc11499c8f381a510cdba85f35a6',
  minAndroid: '8.0',
}
