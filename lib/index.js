import Manager from './ThemeManager';
import { EventRegister } from 'react-native-event-listeners'
import { AsyncStorage } from 'react-native';

const THEME_NAME = 'THEME_NAME';
const THEME_CHANGE = 'THEME_CHANGE';
const DEFAULT_THEME = 'DEFAULT_THEME';


let _colors;

const init = (colors) => {
    _colors = colors
    AsyncStorage.getItem(THEME_NAME)
        .then((themeName) => {
            if (themeName) {
                setColorTheme(themeName);
            } else {
                setColorTheme(DEFAULT_THEME);
            }
        }).catch((e) => {
            setColorTheme(DEFAULT_THEME);
        });
}

const setColorTheme = (themeName, callback) => {
    _colors.setTheme(themeName);
    AsyncStorage.setItem(THEME_NAME, themeName);

    if (callback) {
        callback();
    } else {
        EventRegister.emit(THEME_CHANGE)
    }
    // Issue
    // global.rnColorTheme = {};
    // global.rnColorTheme.colors = colors;
    // global.rnColorTheme.colorTheme = themeName;
}

const getColors = () => {
    return global.rnColorTheme.colors;
}

const getColorTheme = () => {
    return global.rnColorTheme.colorTheme;
}

const getStyles = (styles) => {
    return styles(getColors());
}

const addThemeListener = (action) => {
    return EventRegister.addEventListener(THEME_CHANGE, action);
}

const removeThemeListener = (listener) => {
    EventRegister.removeEventListener(listener);
}

const Colors = (colors) => {
    _colors = new Manager(colors);
    init(_colors);
}

export default {
    Colors,
    init,
    setColorTheme,
    getColors,
    getColorTheme,
    getStyles,
    addThemeListener,
    removeThemeListener
}