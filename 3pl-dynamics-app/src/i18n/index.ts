// src/i18n/index.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { I18nManager, Alert } from 'react-native';

// locale JSONs
import en from './locales/en.json';
import es from './locales/es.json';
import fr from './locales/fr.json';
import de from './locales/de.json';
import zh from './locales/zh.json';
import ar from './locales/ar.json';
import hi from './locales/hi.json';
import ur from './locales/ur.json';
import ru from './locales/ru.json';
import pt from './locales/pt.json';

const LANGUAGE_KEY = 'user-language';

// 👇 Safe device language detection for latest expo-localization
const deviceLang =
  Array.isArray(Localization.getLocales()) && Localization.getLocales().length > 0
    ? Localization.getLocales()[0].languageCode
    : 'en';

const resources = {
  en: { translation: en },
  es: { translation: es },
  fr: { translation: fr },
  de: { translation: de },
  zh: { translation: zh },
  ar: { translation: ar },
  hi: { translation: hi },
  ur: { translation: ur },
  ru: { translation: ru },
  pt: { translation: pt },
};

i18n
  .use(initReactI18next)
  .init(
    {
      resources,
      lng: deviceLang,
      fallbackLng: 'en',
      interpolation: { escapeValue: false },
      compatibilityJSON: 'v4',
    } as any
  )
  .catch(() => {});

async function getStoredLanguage(): Promise<string | null> {
  try {
    return await AsyncStorage.getItem(LANGUAGE_KEY);
  } catch {
    return null;
  }
}

export async function loadStoredLanguage(): Promise<void> {
  const stored = await getStoredLanguage();
  if (stored) {
    try {
      await i18n.changeLanguage(stored);
    } catch {}
  }
}

export async function setAppLanguage(lang: string): Promise<void> {
  try {
    await i18n.changeLanguage(lang);
    await AsyncStorage.setItem(LANGUAGE_KEY, lang);

    const shouldBeRTL = ['ar', 'ur'].includes(lang);
    if (I18nManager.isRTL !== shouldBeRTL) {
      I18nManager.forceRTL(shouldBeRTL);
      Alert.alert(
        i18n.t('welcome_title') || '3PL Dynamics',
        i18n.t('language_changed_restart') ||
          'Language changed. Please restart the app to apply layout direction.'
      );
    }
  } catch {}
}

export default i18n;
export { LANGUAGE_KEY };
