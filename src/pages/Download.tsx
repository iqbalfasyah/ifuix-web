import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download as DownloadIcon, Apple, Monitor, Loader2, Globe } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

export const Download = () => {
  const { t } = useTranslation();
  const [releases, setReleases] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fallback release in case of GitHub API rate limits
  const fallbackRelease = {
    id: 'fallback',
    tag_name: 'v0.9.7-beta',
    name: '0.9.7-beta',
    body: 'New features and improvements.\n- Sync conflict resolution\n- UI improvements\n- Startup & system tray options',
    assets: [
      {
        name: 'Fuira-Setup-0.9.7-beta.exe',
        browser_download_url: 'https://github.com/iqbalfasyah/fuira-release/releases/download/v0.9.7-beta/Fuira-Setup-0.9.7-beta.exe',
        size: 78643200
      }
    ]
  };

  useEffect(() => {
    fetch('https://api.github.com/repos/iqbalfasyah/fuira-release/releases')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setReleases(data);
        } else if (data && data.tag_name) {
          setReleases([data]);
        } else {
          // Rate limit or API error
          setReleases([fallbackRelease]);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching releases:', err);
        setReleases([fallbackRelease]);
        setLoading(false);
      });
  }, []);

  const latestRelease = releases.length > 0 ? releases[0] : null;
  
  const exeAsset = latestRelease?.assets?.find((a: any) => a.name.toLowerCase().endsWith('.exe'));
  const downloadUrl = exeAsset?.browser_download_url || 
    latestRelease?.assets?.[0]?.browser_download_url || 
    'https://github.com/iqbalfasyah/fuira-release/releases/latest';

  return (
    <div className="pt-20 md:pt-24 pb-16 md:pb-32">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">{t('download.title')}</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6">
            {t('download.subtitle')}
          </p>
          <Link to="/support">
            <Button size="sm" variant="outline" className="rounded-full">
              💝 Support Us
            </Button>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/40 text-center relative overflow-hidden flex flex-col items-center">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
            <Monitor className="w-12 h-12 text-gray-400 mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Windows</h3>
            <p className="text-gray-500 mb-8">{t('download.windows_desc')}</p>
            <a 
              href={downloadUrl}
              download
              className="w-full mb-4 block"
            >
              <Button size="lg" className="w-full" leftIcon={loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <DownloadIcon className="w-5 h-5" />} disabled={loading}>
                {loading ? 'Loading...' : t('download.btn')}
              </Button>
            </a>
            {!loading && latestRelease?.assets?.find((a: any) => a.name.endsWith('.exe')) && (
              <div className="text-xs text-gray-400 w-full overflow-hidden text-ellipsis px-4">
                Size: {(latestRelease.assets.find((a: any) => a.name.endsWith('.exe')).size / (1024 * 1024)).toFixed(1)} MB
              </div>
            )}
          </div>
          
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 border-dashed text-center flex flex-col items-center">
            <Apple className="w-12 h-12 text-gray-400 mb-6" />
            <h3 className="text-2xl font-bold text-gray-400 mb-2">{t('download.mac_title')}</h3>
            <p className="text-gray-400 mb-8">{t('download.mac_desc')}</p>
            <Button size="lg" variant="outline" className="w-full text-gray-400 border-gray-300" disabled>
              {t('download.mac_btn')}
            </Button>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 border-dashed text-center flex flex-col items-center">
            <Globe className="w-12 h-12 text-gray-400 mb-6" />
            <h3 className="text-2xl font-bold text-gray-400 mb-2">{t('download.web_title')}</h3>
            <p className="text-gray-400 mb-8">{t('download.web_desc')}</p>
            <Button size="lg" variant="outline" className="w-full text-gray-400 border-gray-300" disabled>
              {t('download.web_btn')}
            </Button>
          </div>
        </div>

        <details className="group bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-sm max-w-3xl mx-auto mb-8">
          <summary className="flex items-center justify-between cursor-pointer list-none outline-none">
            <h2 className="text-2xl font-bold text-gray-900">📖 Guide: {t('download.install_title')}</h2>
            <span className="transition-transform group-open:rotate-180 text-gray-400">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path></svg>
            </span>
          </summary>
          <div className="space-y-4 text-gray-600 mt-6">
            <p>{t('download.install_p1')}</p>
            <p>{t('download.install_p2')}</p>
            <p>{t('download.install_p3')}</p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>{t('download.install_li1')}</li>
              <li>{t('download.install_li2')}</li>
            </ol>
            <p className="pt-2 font-medium text-gray-500">{t('download.install_p4')}</p>
          </div>
        </details>

        <div className="bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-sm max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
            <h2 className="text-2xl font-bold text-gray-900">{t('download.notes_title')}</h2>
            <a href="https://github.com/iqbalfasyah/fuira-release/releases" target="_blank" rel="noopener noreferrer">
              <Button size="sm" variant="outline">GitHub Releases</Button>
            </a>
          </div>
          
          <div className="space-y-8">
            {loading ? (
              <div className="flex items-center justify-center py-4">
                <Loader2 className="w-6 h-6 animate-spin text-primary" />
              </div>
            ) : releases.length > 0 ? (
              releases.map((rel: any, idx: number) => {
                // Strip null bytes and replacement chars caused by encoding mismatches
                const cleanNotes = (rel.body || '').replace(/\0/g, '').replace(/\uFFFD/g, '');
                
                return (
                  <details key={rel.id} open={idx === 0} className="group border-b border-gray-100 pb-4 mb-4 last:border-0 last:pb-0 last:mb-0">
                    <summary className="flex items-center justify-between cursor-pointer list-none text-lg font-bold text-gray-900 outline-none">
                      <span>{rel.name || rel.tag_name}</span>
                      <span className="transition-transform group-open:rotate-180 text-gray-400">
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path></svg>
                      </span>
                    </summary>
                    <div className="pt-4">
                      {cleanNotes ? (
                        <div className="text-sm text-gray-600 leading-relaxed font-sans [&>h1]:text-xl [&>h1]:font-bold [&>h1]:mt-4 [&>h1]:mb-2 [&>h2]:text-lg [&>h2]:font-semibold [&>h2]:mt-3 [&>h2]:mb-2 [&>h3]:text-base [&>h3]:font-medium [&>h3]:mt-2 [&>h3]:mb-1 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:mb-4 [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:mb-4 [&>p]:mb-3 [&>li]:mb-1 [&_a]:text-primary [&_a]:underline">
                          <ReactMarkdown>{cleanNotes}</ReactMarkdown>
                        </div>
                      ) : (
                        <p className="text-sm italic text-gray-400">No release notes provided.</p>
                      )}
                    </div>
                  </details>
                );
              })
            ) : (
              <div className="text-gray-500 text-center py-4">No releases found.</div>
            )}
          </div>
        </div>
        <div className="bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-sm max-w-3xl mx-auto mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQ</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is Fuira free?</h3>
              <p className="text-gray-600">Yes, Fuira is completely free to use.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Does it collect data?</h3>
              <p className="text-gray-600">No, Fuira is privacy-first and does not collect your personal data.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Does it require internet?</h3>
              <p className="text-gray-600">No, Fuira is an offline-first application and works perfectly without an internet connection.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I sync?</h3>
              <p className="text-gray-600">Yes! Fuira supports optional syncing via Google Drive so you can back up and sync your data across devices, including sync conflict resolution.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
