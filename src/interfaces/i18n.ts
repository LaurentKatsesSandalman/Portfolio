export type Mode = "gd" | "dev";
export type Lang = "en" | "fr";

export const MODES: Mode[] = ["gd", "dev"];
export const LANGS: Lang[] = ["en", "fr"];

export type Localized<T> = Record<Lang, T>;
