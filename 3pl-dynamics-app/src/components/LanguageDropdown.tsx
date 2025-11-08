// src/components/LanguageDropdown.tsx
import React from 'react';
import {
  View,
  Modal,
  Pressable,
  Text,
  FlatList,
  StyleSheet,
  Platform,
  Dimensions,
} from 'react-native';
import { setAppLanguage } from '../i18n';

type LangItem = { code: string; label: string; native?: string; rtl?: boolean };

const LANGS: LangItem[] = [
  { code: 'en', label: 'English', native: 'English' },
  { code: 'es', label: 'Spanish', native: 'Español' },
  { code: 'fr', label: 'French', native: 'Français' },
  { code: 'de', label: 'German', native: 'Deutsch' },
  { code: 'zh', label: 'Chinese', native: '中文' },
  { code: 'ar', label: 'Arabic', native: 'العربية', rtl: true },
  { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
  { code: 'ur', label: 'Urdu', native: 'اردو', rtl: true },
  { code: 'ru', label: 'Russian', native: 'Русский' },
  { code: 'pt', label: 'Portuguese', native: 'Português' },
];

type Props = {
  visible: boolean;
  onClose: () => void;
  anchorWidth?: number; // width of the triggering button (optional)
  anchorRightOffset?: number; // distance from right edge (optional)
};

export const LanguageDropdown: React.FC<Props> = ({
  visible,
  onClose,
  anchorWidth = 160,
  anchorRightOffset = 12,
}) => {
  async function pick(lang: LangItem) {
    try {
      await setAppLanguage(lang.code);
    } catch (e) {
      // ignore
    } finally {
      onClose();
    }
  }

  // WEB: absolutely positioned panel
  if (Platform.OS === 'web') {
    if (!visible) return null;
    return (
      <View style={styles.webBackdrop}>
        <View style={[styles.webDropdown, { width: anchorWidth, right: anchorRightOffset }]}>
          <Text style={styles.sheetTitle}>Select language</Text>
          <FlatList
            data={LANGS}
            keyExtractor={(i) => i.code}
            renderItem={({ item }) => (
              <Pressable style={styles.langRow} onPress={() => pick(item)}>
                <View>
                  <Text style={styles.langLabel}>{item.native ?? item.label}</Text>
                  <Text style={styles.langSub}>{item.label}</Text>
                </View>
                <Text style={styles.langCode}>{item.code.toUpperCase()}</Text>
              </Pressable>
            )}
            ItemSeparatorComponent={() => <View style={styles.sep} />}
          />
        </View>
        <Pressable style={styles.webBackdropTouchable} onPress={onClose} />
      </View>
    );
  }

  // NATIVE: modal with sheet aligned from top-right
  const screenW = Dimensions.get('window').width;
  const rightPos = anchorRightOffset;

  return (
    <Modal visible={visible} animationType="fade" transparent onRequestClose={onClose}>
      <Pressable style={styles.backdrop} onPress={onClose}>
        <View style={[styles.nativeDropdown, { width: anchorWidth, right: rightPos }]}>
          <Text style={styles.sheetTitle}>Select language</Text>
          <FlatList
            data={LANGS}
            keyExtractor={(i) => i.code}
            renderItem={({ item }) => (
              <Pressable style={styles.langRow} onPress={() => pick(item)}>
                <View>
                  <Text style={styles.langLabel}>{item.native ?? item.label}</Text>
                  <Text style={styles.langSub}>{item.label}</Text>
                </View>
                <Text style={styles.langCode}>{item.code.toUpperCase()}</Text>
              </Pressable>
            )}
            ItemSeparatorComponent={() => <View style={styles.sep} />}
          />
        </View>
      </Pressable>
    </Modal>
  );
};

export default LanguageDropdown;

const styles = StyleSheet.create({
  webBackdrop: {
    position: 'absolute',
    inset: 0,
    zIndex: 9999,
  },
  webBackdropTouchable: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'transparent',
  },
  webDropdown: {
    position: 'absolute',
    top: 44, // fine-tune if needed
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 8,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    borderWidth: 1,
    borderColor: '#e6eef9',
  },

  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.18)',
  },
  nativeDropdown: {
    position: 'absolute',
    top: 44,
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 8,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    borderWidth: 1,
    borderColor: '#e6eef9',
  },

  sheetTitle: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 6,
    paddingHorizontal: 6,
  },
  langRow: {
    paddingVertical: 10,
    paddingHorizontal: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  langLabel: {
    fontSize: 14,
    fontWeight: '600',
  },
  langSub: {
    fontSize: 12,
    color: '#6b7280',
  },
  langCode: {
    fontSize: 12,
    color: '#9ca3af',
    fontWeight: '700',
  },
  sep: { height: 1, backgroundColor: '#eef2f6' },
});
