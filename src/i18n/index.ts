
import { ENLang } from './en';
import { ILangKeys } from './keys';
class LanguageUtil {
    public lang: ILangKeys;
    public defaultLang: ILangKeys;
    constructor() {
        let selectedLang = navigator.language ? navigator.language.substr(0, 2) : 'en';
        this.defaultLang = ENLang; // used when key exists in lang but the value is empty
        switch (selectedLang) {
            case 'en':
                this.lang = ENLang;
                break;
            default:
                this.lang = ENLang;
                break;
        }

    }
    translate(key: string): string {
        if (this.lang[key] !== undefined) {
            if (this.lang[key].length > 0) {
                return this.lang[key];
            } else {
                return this.defaultLang[key];
            }
        } else {
            alert('No translation key for : "' + key + '"');
            throw 'No translation key for : "' + key + '"';
        }
    }
}

export const Lang = new LanguageUtil().translate;
