# Russian Translation System for Lakshmi Ayurveda

## Overview

This project now includes a comprehensive Russian translation system that allows users to switch between English and Russian languages throughout the entire website. The system is built using React Context API and provides seamless language switching with persistent user preferences.

## Features

- 🌍 **Bilingual Support**: Full English and Russian translations
- 🔄 **Language Switching**: Easy toggle between languages with a beautiful dropdown
- 💾 **Persistent Preferences**: Remembers user's language choice
- 🌐 **Browser Detection**: Automatically detects Russian-speaking users
- 📱 **Responsive Design**: Works perfectly on all devices
- ♿ **Accessibility**: Full ARIA support for screen readers

## Implementation Details

### 1. Translation Files

**Location**: `lib/translations.ts`

The translation system uses a structured approach with nested objects for easy maintenance:

```typescript
export interface Translations {
  nav: { home: string; about: string /* ... */ };
  hero: { title: string; subtitle: string /* ... */ };
  aboutVilla: { title: string; description: string /* ... */ };
  // ... and more
}
```

### 2. Language Context

**Location**: `contexts/LanguageContext.tsx`

Provides global language state management:

- Language switching functionality
- Persistent storage in localStorage
- Browser language detection
- Translation helper function

### 3. Language Switcher Component

**Location**: `components/LanguageSwitcher.tsx`

A beautiful, accessible dropdown component that:

- Shows current language with flag and name
- Provides smooth animations
- Includes proper ARIA labels
- Works on both desktop and mobile

### 4. Integration

All major components have been updated to use translations:

- ✅ Header (Navigation)
- ✅ Hero Section
- ✅ About Villa
- ✅ Ayurveda Treatments
- ✅ Facilities
- ✅ Contact Form
- ✅ Footer

## Usage

### For Users

1. **Language Switching**: Click the globe icon (🌍) in the header
2. **Language Selection**: Choose between English (🇺🇸) and Russian (🇷🇺)
3. **Automatic Detection**: Russian-speaking users see Russian by default
4. **Persistent Choice**: Your language preference is remembered

### For Developers

#### Adding New Translations

1. **Update the interface** in `lib/translations.ts`:

```typescript
export interface Translations {
  // ... existing translations
  newSection: {
    title: string;
    description: string;
  };
}
```

2. **Add translations** for both languages:

```typescript
export const translations: Record<Language, Translations> = {
  en: {
    // ... existing English translations
    newSection: {
      title: "English Title",
      description: "English Description",
    },
  },
  ru: {
    // ... existing Russian translations
    newSection: {
      title: "Русский заголовок",
      description: "Русское описание",
    },
  },
};
```

3. **Use in components**:

```typescript
import { useLanguage } from "@/contexts/LanguageContext";

export default function NewComponent() {
  const { t } = useLanguage();

  return (
    <div>
      <h1>{t("newSection.title")}</h1>
      <p>{t("newSection.description")}</p>
    </div>
  );
}
```

#### Adding New Languages

1. **Update the Language type**:

```typescript
export type Language = "en" | "ru" | "de"; // Add new language
```

2. **Add translations** for the new language
3. **Update the LanguageSwitcher** component to include the new language

## Russian Translations Included

### Navigation

- Home → Главная
- About → О нас
- Services → Услуги
- Packages → Пакеты
- Contact → Контакты

### Hero Section

- "Lakshmi Ayurveda Heritage Villa" → "Наследие Аюрведы Лакшми"
- "Authentic Kerala Ayurvedic Retreat" → "Аутентичный аюрведический ретрит в Керале"

### About Villa

- "About Our Heritage Villa" → "О нашей усадьбе-наследии"
- "Where Tradition Meets Luxury" → "Где традиция встречается с роскошью"

### Treatments

- "Ayurvedic Treatments" → "Аюрведические процедуры"
- "Ancient Wisdom for Modern Wellness" → "Древняя мудрость для современного благополучия"

### Facilities

- "World-Class Facilities" → "Мировые удобства"
- "Comfort Meets Tradition" → "Комфорт встречается с традицией"

### Contact

- "Contact Us" → "Свяжитесь с нами"
- "Begin Your Wellness Journey" → "Начните свой путь к благополучию"

## Technical Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    LanguageProvider                        │
│                 (Context Provider)                        │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────┐ │
│  │   Header        │  │   Hero          │  │   About     │ │
│  │ (with switcher) │  │ (translated)    │  │ (translated)│ │
│  └─────────────────┘  └─────────────────┘  └─────────────┘ │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────┐ │
│  │  Treatments     │  │   Facilities    │  │   Contact   │ │
│  │ (translated)    │  │ (translated)    │  │ (translated)│ │
│  └─────────────────┘  └─────────────────┘  └─────────────┘ │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────┐ │
│  │     Footer      │  │  Other          │  │  Components │ │
│  │ (translated)    │  │ (translated)    │  │ (translated)│ │
│  └─────────────────┘  └─────────────────┘  └─────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

## Benefits

### For Russian Users

- **Native Language Experience**: Full website in Russian
- **Cultural Connection**: Better understanding of Ayurvedic concepts
- **Easier Navigation**: Familiar language for booking and inquiries

### For Business

- **Expanded Market**: Access to Russian-speaking customers
- **Professional Image**: Multilingual support shows international reach
- **Better Conversion**: Users are more likely to engage in their native language

### For Development

- **Scalable Architecture**: Easy to add more languages
- **Maintainable Code**: Centralized translation management
- **Type Safety**: Full TypeScript support for translations

## Future Enhancements

- [ ] **More Languages**: German, French, Spanish, Hindi
- [ ] **RTL Support**: For Arabic and Hebrew
- [ ] **Dynamic Content**: API-driven translations
- [ ] **SEO Optimization**: Language-specific meta tags
- [ ] **Analytics**: Track language preferences

## Testing

### Manual Testing

1. Switch between English and Russian
2. Verify all text changes appropriately
3. Check mobile responsiveness
4. Test accessibility with screen readers

### Automated Testing

```bash
# Run the development server
npm run dev

# Test language switching
# Test persistent preferences
# Test browser language detection
```

## Support

For questions or issues with the translation system:

1. Check the component files for usage examples
2. Review the translation interface in `lib/translations.ts`
3. Ensure the LanguageProvider wraps your app in `app/layout.tsx`

## Conclusion

The Russian translation system provides a solid foundation for internationalizing the Lakshmi Ayurveda website. It's designed to be maintainable, scalable, and user-friendly, ensuring that Russian-speaking visitors can fully experience the authentic Ayurvedic retreat offerings in their native language.
