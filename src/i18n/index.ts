import { en } from './en';
import { es } from './es';

export const languages = ['en', 'es'] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = 'en';

/** La forma del inglés es el contrato que el español debe cumplir. */
export type SiteContent = typeof en;

const content: Record<Lang, SiteContent> = { en, es };

/** Contenido completo del idioma indicado. */
export function getContent(lang: Lang): SiteContent {
  return content[lang];
}

/** Deduce el idioma a partir del primer segmento de la ruta (/es/… → es). */
export function getLangFromUrl(url: URL): Lang {
  const seg = url.pathname.split('/')[1];
  return seg === 'es' ? 'es' : 'en';
}

/**
 * Prefija una ruta interna con el idioma. Los anchors (#..), mailto, tel y
 * enlaces externos se devuelven sin tocar. Las rutas ya con /es se normalizan.
 */
export function localizePath(path: string, lang: Lang): string {
  if (!path.startsWith('/')) return path;
  const clean = path.replace(/^\/es(?=\/|$)/, '') || '/';
  if (lang === 'en') return clean;
  return clean === '/' ? '/es/' : '/es' + clean;
}

/** Base del inicio para cada idioma ('/' o '/es/'), útil para anchors desde subpáginas. */
export function homeBase(lang: Lang): string {
  return lang === 'es' ? '/es/' : '/';
}

/**
 * Dada la ruta actual, devuelve la equivalente en el otro idioma (para el
 * selector EN/ES). Mantiene el resto del path intacto.
 */
export function getAltPath(pathname: string, to: Lang): string {
  const stripped = pathname.replace(/^\/es(?=\/|$)/, '') || '/';
  if (to === 'en') return stripped;
  return stripped === '/' ? '/es/' : '/es' + stripped;
}
