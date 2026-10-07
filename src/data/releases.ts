export interface ReleaseAsset {
  name: string
  browser_download_url: string
  size: number
}
export interface FuiraRelease {
  id: string | number
  tag_name: string
  name: string
  body: string
  assets: ReleaseAsset[]
}

export const fuiraReleasesUrl =
  'https://github.com/iqbalfasyah/fuira-release/releases'
export const recordedFuiraRelease: FuiraRelease = {
  id: 'recorded',
  tag_name: 'v0.9.8-beta',
  name: '0.9.8-beta',
  body: '',
  assets: [
    {
      name: 'Fuira-Setup-0.9.8-beta.exe',
      browser_download_url: `${fuiraReleasesUrl}/download/v0.9.8-beta/Fuira-Setup-0.9.8-beta.exe`,
      size: 73066843,
    },
  ],
}

export function parseFuiraReleases(input: unknown): FuiraRelease[] {
  if (!Array.isArray(input)) throw new Error('Invalid release response')
  return input
    .filter(
      (item): item is Record<string, unknown> =>
        !!item && typeof item === 'object' && typeof item.tag_name === 'string',
    )
    .map((item) => ({
      id: typeof item.id === 'number' ? item.id : String(item.tag_name),
      tag_name: String(item.tag_name),
      name: typeof item.name === 'string' ? item.name : String(item.tag_name),
      body: typeof item.body === 'string' ? item.body : '',
      assets: Array.isArray(item.assets)
        ? item.assets.filter(
            (asset): asset is ReleaseAsset =>
              !!asset &&
              typeof asset.name === 'string' &&
              typeof asset.size === 'number' &&
              typeof asset.browser_download_url === 'string' &&
              asset.browser_download_url.startsWith(
                `${fuiraReleasesUrl}/download/`,
              ),
          )
        : [],
    }))
}
