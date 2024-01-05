import { create } from "zustand";
import { Subscription } from "@/types/Subcription";

const FREE_LANGUAGES_COUNT = 2;

export type LanguagesSupported =
	| "en"
	| "de"
	| "fr"
	| "es"
	| "hi"
	| "ja"
	| "la"
	| "ru"
	| "zh"
	| "ar";

export const LanguagesSupportedMap: Record<LanguagesSupported, string> = {
	en: "English",
	de: "German",
	fr: "French",
	es: "Spanish",
	hi: "Hindi",
	ja: "Japanese",
	la: "Latin",
	ru: "Russian",
	zh: "Mandarin",
	ar: "Arabic",
};

interface LanguageState {
	language: LanguagesSupported;
	setLanguage: (language: LanguagesSupported) => void;
	getLanguages: (isPro: boolean) => LanguagesSupported[];
	getNotSupportedLanguages: (isPro: boolean) => LanguagesSupported[];
}

export const useLanguageStore = create<LanguageState>()((set, get) => ({
	language: "en",
	setLanguage: (language: LanguagesSupported) => set({ language }),
	getLanguages: (isPro: boolean) => {
		// Pro users get all language support
		if (isPro)
			return Object.keys(LanguagesSupportedMap) as LanguagesSupported[];
		// Non-Pro users get only the first 2 languages
		return Object.keys(LanguagesSupportedMap).slice(
			0,
			FREE_LANGUAGES_COUNT,
		) as LanguagesSupported[];
	},
	getNotSupportedLanguages: (isPro: boolean) => {
		// All languages are supported to Pro user
		if (isPro) {
			return [];
		}
		// Excludes first two languages which are supported in case of non-pro user
		return Object.keys(LanguagesSupportedMap).slice(
			FREE_LANGUAGES_COUNT,
		) as LanguagesSupported[];
	},
}));

interface SubscriptionState {
	subscription: Subscription | null | undefined;
	setSubscription: (subscription: Subscription | null) => void;
}

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
	subscription: undefined,
	setSubscription: (subscription: Subscription | null) => set({ subscription }),
}));
