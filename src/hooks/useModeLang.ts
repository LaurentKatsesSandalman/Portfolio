import { useParams } from "react-router-dom";
import type { Lang, Mode } from "../interfaces/i18n";

// Safe to cast: the parent `:mode/:lang` route (App.tsx) already redirects away
// before rendering children if these params aren't valid Mode/Lang values.
export function useModeLang() {
    const { mode, lang } = useParams();
    return { mode: mode as Mode, lang: lang as Lang };
}
