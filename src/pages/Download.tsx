import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download as DownloadIcon, Apple, Monitor, Loader2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useTranslation } from 'react-i18next';

export const Download = () => {
  const { t } = useTranslation();
  const [release, setRelease] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/repos/iqbalfasyah/fuira-release/releases/latest')
      .then(res => res.json())
      .then(data => {
        setRelease(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching release:', err);
        setLoading(false);
      });
  }, []);

  const version = release?.tag_name || 'v0.9.0-beta';
  const downloadUrl = release?.assets?.find((a: any) => a.name.endsWith('.exe'))?.browser_download_url || 
    'https://github.com/iqbalfasyah/fuira-release/releases/download/v0.9.0-beta/Fuira-Setup-0.9.0-beta.exe';
  
  const rawNotes = release?.body || '';
  const notes = rawNotes
    .split('\n')
    .filter((line: string) => line.trim().startsWith('-') || line.trim().startsWith('*'))
    .map((line: string) => line.replace(/^[-*]\s*/, '').trim());

  const hasNotes = notes.length > 0;

  return (
    <div className="pt-20 md:pt-24 pb-16 md:pb-32">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">{t('download.title')}</h1>
          <p className="text-xl md:text-2xl text-gray-600">
            {t('download.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-20">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/40 text-center relative overflow-hidden flex flex-col items-center">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
            <Monitor className="w-12 h-12 text-gray-400 mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Windows</h3>
            <p className="text-gray-500 mb-8">{t('download.windows_desc')}</p>
            <a 
              href={downloadUrl}
              className="w-full mb-4 block"
            >
              <Button size="lg" className="w-full" leftIcon={loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <DownloadIcon className="w-5 h-5" />} disabled={loading}>
                {loading ? 'Loading...' : t('download.btn')}
              </Button>
            </a>
            {!loading && release?.assets?.find((a: any) => a.name.endsWith('.exe')) && (
              <div className="text-xs text-gray-400 w-full overflow-hidden text-ellipsis px-4">
                Size: {(release.assets.find((a: any) => a.name.endsWith('.exe')).size / (1024 * 1024)).toFixed(1)} MB
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
        </div>

        <div className="bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-sm max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('download.notes_title')} ({version})</h2>
          <ul className="space-y-4 text-gray-600">
            {loading ? (
              <li className="flex items-center justify-center py-4">
                <Loader2 className="w-6 h-6 animate-spin text-primary" />
              </li>
            ) : hasNotes ? (
              notes.map((note: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                  <p>{note}</p>
                </li>
              ))
            ) : (
              <>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                  <p>{t('download.n1')}</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                  <p>{t('download.n2')}</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                  <p>{t('download.n3')}</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                  <p>{t('download.n4')}</p>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
