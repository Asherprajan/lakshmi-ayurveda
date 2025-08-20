export type Language = 'en' | 'ru'

export interface Translations {
  // Navigation
  nav: {
    home: string
    about: string
    services: string
    packages: string
    contact: string
  }
  
  // Hero Section
  hero: {
    title: string
    subtitle: string
    description: string
    ctaButton: string
    scrollButton: string
  }
  
  // About Villa
  aboutVilla: {
    title: string
    subtitle: string
    description: string
    features: {
      title: string
      heritage: string
      heritageDesc: string
      location: string
      locationDesc: string
      experience: string
      experienceDesc: string
      personalized: string
      personalizedDesc: string
    }
  }
  
  // Ayurveda Treatments
  treatments: {
    title: string
    subtitle: string
    description: string
    items: {
      chavitti: {
        name: string
        description: string
      }
      sirodhara: {
        name: string
        description: string
      }
      abhyanga: {
        name: string
        description: string
      }
      panchakarma: {
        name: string
        description: string
      }
    }
  }
  
  // Facilities
  facilities: {
    title: string
    subtitle: string
    description: string
    cta: {
      title: string
      description: string
      button: string
    }
    items: {
      pool: string
      hall: string
      concierge: string
      parking: string
      wifi: string
      garden: string
    }
  }
  
  // Attractions
  attractions: {
    title: string
    subtitle: string
    description: string
    items: {
      beach: string
      temple: string
      airport: string
      museum: string
    }
    distance: string
  }
  
  // Testimonials
  testimonials: {
    title: string
    subtitle: string
    cta: {
      title: string
      description: string
      button: string
    }
  }
  
  // Contact
  contact: {
    title: string
    subtitle: string
    description: string
    get_in_touch: string
    phone: string
    address: string
    form: {
      name: string
      email: string
      phone: string
      message: string
      name_placeholder: string
      phone_placeholder: string
      message_placeholder: string
      submit: string
      success: string
      error: string
      sending: string
      send_message: string
    }
  }
  
  // Footer
  footer: {
    description: string
    quickLinks: string
    contactInfo: string
    followUs: string
    copyright: string
  }
  
  // Common
  common: {
    learnMore: string
    bookNow: string
    viewAll: string
    readMore: string
    close: string
    loading: string
  }

  // Contact Modal
  contactModal: {
    title: string
  }
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      packages: "Packages",
      contact: "Contact"
    },
    hero: {
      title: "Lakshmi Ayurveda Heritage Villa",
      subtitle: "Authentic Kerala Ayurvedic Retreat",
      description: "Experience the ancient wisdom of Ayurveda in our serene heritage villa. Discover authentic Panchakarma treatments, traditional therapies, and holistic wellness programs in the heart of Kerala.",
      ctaButton: "Book Your Retreat",
      scrollButton: "Discover More"
    },
    aboutVilla: {
      title: "About Our Heritage Villa",
      subtitle: "Where Tradition Meets Luxury",
      description: "Nestled in the serene landscapes of Kovalam, our heritage villa offers an authentic Ayurvedic experience that honors centuries-old traditions while providing modern comfort and personalized care.",
      features: {
        title: "Why Choose Lakshmi Ayurveda",
        heritage: "Heritage Villa",
        heritageDesc: "Experience authentic Kerala architecture and traditional design elements that create a truly immersive Ayurvedic environment.",
        location: "Prime Location",
        locationDesc: "Located just minutes from Kovalam Beach and Trivandrum, offering easy access to both tranquility and city amenities.",
        experience: "Expert Care",
        experienceDesc: "Our experienced Ayurvedic doctors and therapists provide personalized treatments based on ancient wisdom and modern understanding.",
        personalized: "Personalized Programs",
        personalizedDesc: "Every treatment plan is customized to your unique constitution and health goals, ensuring optimal results."
      }
    },
    treatments: {
      title: "Ayurvedic Treatments",
      subtitle: "Ancient Wisdom for Modern Wellness",
      description: "Our comprehensive range of traditional Ayurvedic treatments is designed to restore balance, promote healing, and enhance your overall well-being.",
      items: {
        chavitti: {
          name: "Chavitti Tirumal",
          description: "A traditional Kerala massage performed with the feet, using controlled pressure and rhythmic movements to release deep-seated tension and improve circulation."
        },
        sirodhara: {
          name: "Sirodhara",
          description: "Continuous pouring of warm herbal oil on the forehead to calm the nervous system, reduce stress, and promote deep relaxation and mental clarity."
        },
        abhyanga: {
          name: "Abhyanga",
          description: "Full-body oil massage using warm herbal oils, synchronized hand movements to nourish the skin, improve circulation, and balance the doshas."
        },
        panchakarma: {
          name: "Panchakarma",
          description: "Complete detoxification and rejuvenation program combining five therapeutic procedures to cleanse the body of toxins and restore natural balance."
        }
      }
    },
    facilities: {
      title: "Our Facilities",
      subtitle: "Our Amenities",
      description: "Every amenity thoughtfully designed to enhance your wellness journey and ensure complete comfort.",
      cta: {
        title: "Experience Our Facilities",
        description: "Discover how our world-class amenities can enhance your wellness journey and provide the perfect environment for healing and relaxation.",
        button: "Book Your Stay"
      },
      items: {
        pool: "Private Pool",
        hall: "Ayurveda Hall",
        concierge: "Concierge",
        parking: "Parking",
        wifi: "WiFi",
        garden: "Garden Therapy"
      }
    },
    attractions: {
      title: "Attractions Nearby",
      subtitle: "Explore the Beauty of Kerala",
      description: "Discover the rich cultural heritage and natural beauty that surrounds our villa, from pristine beaches to ancient temples.",
      items: {
        beach: "Kovalam Beach",
        temple: "Padmanabhaswamy Temple",
        airport: "Trivandrum Airport",
        museum: "Napier Museum"
      },
      distance: "min"
    },
    testimonials: {
      title: "What Our Guests Say",
      subtitle: "Real experiences from wellness seekers who found healing at Lakshmi Ayurveda",
      cta: {
        title: "Join Our Wellness Community",
        description: "Experience the transformative power of authentic Ayurveda and become part of our growing community of wellness seekers.",
        button: "Book Your Retreat"
      }
    },
    contact: {
      title: "Contact Us",
      subtitle: "Begin Your Wellness Journey",
      description: "Ready to experience authentic Ayurveda? Get in touch with us to plan your personalized wellness retreat.",
      get_in_touch: "Get in Touch",
      phone: "Phone",
      address: "Address",
      form: {
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        message: "Your Message",
        name_placeholder: "Your Name",
        phone_placeholder: "Your Phone",
        message_placeholder: "Your Message",
        submit: "Send Message",
        success: "Message sent successfully!",
        error: "Error sending message. Please try again.",
        sending: "Sending...",
        send_message: "Send Message"
      }
    },
    footer: {
      description: "Experience authentic Ayurvedic healing in the heart of Kerala. Our heritage villa offers traditional treatments, modern comfort, and personalized care for your wellness journey.",
      quickLinks: "Quick Links",
      contactInfo: "Contact Info",
      followUs: "Follow Us",
      copyright: "© 2024 Lakshmi Ayurveda Heritage Villa. All rights reserved."
    },
    common: {
      learnMore: "Learn More",
      bookNow: "Book Now",
      viewAll: "View All",
      readMore: "Read More",
      close: "Close",
      loading: "Loading..."
    },
    contactModal: {
      title: "Book Ayurvedic Consultation"
    }
  },
  ru: {
    nav: {
      home: "Главная",
      about: "О нас",
      services: "Услуги",
      packages: "Пакеты",
      contact: "Контакты"
    },
    hero: {
      title: "Наследие Аюрведы Лакшми",
      subtitle: "Аутентичный аюрведический ретрит в Керале",
      description: "Испытайте древнюю мудрость Аюрведы в нашей умиротворяющей усадьбе-наследии. Откройте для себя аутентичные процедуры Панчакармы, традиционные терапии и программы целостного оздоровления в сердце Кералы.",
      ctaButton: "Забронировать ретрит",
      scrollButton: "Узнать больше"
    },
    aboutVilla: {
      title: "О нашей усадьбе-наследии",
      subtitle: "Где традиция встречается с роскошью",
      description: "Расположенная в умиротворенных пейзажах Ковалама, наша усадьба-наследие предлагает аутентичный аюрведический опыт, который чтит многовековые традиции, обеспечивая современный комфорт и персональный уход.",
      features: {
        title: "Почему выбирают Лакшми Аюрведу",
        heritage: "Усадьба-наследие",
        heritageDesc: "Испытайте аутентичную архитектуру Кералы и традиционные элементы дизайна, которые создают по-настоящему погружающую аюрведическую среду.",
        location: "Отличное расположение",
        locationDesc: "Расположена всего в нескольких минутах от пляжа Ковалам и Тривандрума, обеспечивая легкий доступ как к спокойствию, так и к городским удобствам.",
        experience: "Экспертный уход",
        experienceDesc: "Наши опытные аюрведические врачи и терапевты предоставляют персональные процедуры, основанные на древней мудрости и современном понимании.",
        personalized: "Персональные программы",
        personalizedDesc: "Каждый план лечения адаптирован к вашей уникальной конституции и целям здоровья, обеспечивая оптимальные результаты."
      }
    },
    treatments: {
      title: "Аюрведические процедуры",
      subtitle: "Древняя мудрость для современного благополучия",
      description: "Наш комплексный спектр традиционных аюрведических процедур разработан для восстановления баланса, содействия исцелению и улучшения вашего общего самочувствия.",
      items: {
        chavitti: {
          name: "Чавитти Тирумал",
          description: "Традиционный керальский массаж, выполняемый ногами, с использованием контролируемого давления и ритмичных движений для снятия глубоко укоренившегося напряжения и улучшения кровообращения."
        },
        sirodhara: {
          name: "Широдхара",
          description: "Непрерывное выливание теплого травяного масла на лоб для успокоения нервной системы, снижения стресса и содействия глубокому расслаблению и ментальной ясности."
        },
        abhyanga: {
          name: "Абхьянга",
          description: "Полный массаж тела теплыми травяными маслами, синхронизированные движения рук для питания кожи, улучшения кровообращения и балансировки дош."
        },
        panchakarma: {
          name: "Панчакарма",
          description: "Полная программа детоксикации и омоложения, объединяющая пять терапевтических процедур для очищения тела от токсинов и восстановления естественного баланса."
        }
      }
    },
    facilities: {
      title: "Мировые удобства",
      subtitle: "Наши удобства",
      description: "Каждое удобство продуманно спроектировано для улучшения вашего пути к благополучию и обеспечения полного комфорта.",
      cta: {
        title: "Испытайте наши удобства",
        description: "Откройте для себя, как наши мировые удобства могут улучшить ваш путь к благополучию и обеспечить идеальную среду для исцеления и расслабления.",
        button: "Забронировать пребывание"
      },
      items: {
        pool: "Приватный бассейн",
        hall: "Аюрведический зал",
        concierge: "Консьерж",
        parking: "Парковка",
        wifi: "WiFi",
        garden: "Садово-терапия"
      }
    },
    attractions: {
      title: "Близлежащие достопримечательности",
      subtitle: "Исследуйте красоту Кералы",
      description: "Откройте для себя богатое культурное наследие и природную красоту, окружающую нашу усадьбу, от нетронутых пляжей до древних храмов.",
      items: {
        beach: "Пляж Ковалам",
        temple: "Храм Падманабхасвами",
        airport: "Аэропорт Тривандрум",
        museum: "Музей Напьера"
      },
      distance: "мин"
    },
    testimonials: {
      title: "Что говорят наши гости",
      subtitle: "Реальные опыты от ценителей здоровья, которые нашли исцеление в Лакшми Аюрведе",
      cta: {
        title: "Присоединяйтесь к нашему сообществу здоровья",
        description: "Испытайте мощь аутентичной Аюрведы и станьте частью нашего растущего сообщества ценителей здоровья.",
        button: "Забронировать ретрит"
      }
    },
    contact: {
      title: "Свяжитесь с нами",
      subtitle: "Начните свой путь к благополучию",
      description: "Готовы испытать аутентичную Аюрведу? Свяжитесь с нами, чтобы спланировать ваш персональный оздоровительный ретрит.",
      get_in_touch: "Свяжитесь с нами",
      phone: "Телефон",
      address: "Адрес",
      form: {
        name: "Полное имя",
        email: "Адрес электронной почты",
        phone: "Номер телефона",
        message: "Ваше сообщение",
        name_placeholder: "Ваше имя",
        phone_placeholder: "Ваш телефон",
        message_placeholder: "Ваше сообщение",
        submit: "Отправить сообщение",
        success: "Сообщение успешно отправлено!",
        error: "Ошибка отправки сообщения. Попробуйте еще раз.",
        sending: "Отправка...",
        send_message: "Отправить сообщение"
      }
    },
    footer: {
      description: "Испытайте аутентичное аюрведическое исцеление в сердце Кералы. Наша усадьба-наследие предлагает традиционные процедуры, современный комфорт и персональный уход для вашего пути к благополучию.",
      quickLinks: "Быстрые ссылки",
      contactInfo: "Контактная информация",
      followUs: "Следите за нами",
      copyright: "© 2024 Наследие Аюрведы Лакшми. Все права защищены."
    },
    common: {
      learnMore: "Узнать больше",
      bookNow: "Забронировать сейчас",
      viewAll: "Посмотреть все",
      readMore: "Читать далее",
      close: "Закрыть",
      loading: "Загрузка..."
    },
    contactModal: {
      title: "Забронировать аюрведическую консультацию"
    }
  }
}

export const getTranslation = (language: Language, key: string): string => {
  const keys = key.split('.')
  let value: any = translations[language]
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k]
    } else {
      return key // Return key if translation not found
    }
  }
  
  return typeof value === 'string' ? value : key
} 