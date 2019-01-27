import Theme from 'react-native-themes';

const colors = new Theme.Colors({
  DEFAULT_THEME: {
    titleColor: '#1c7ee7',
    primaryTextColor: '#3b5998',
    fontColor: '#fff',
    background: '#e73536',
    menuItemColor: '#000'
  },
  DARK_THEME: {
    titleColor: '#9b9b9b',
    primaryTextColor: '#9b9b9b',
    fontColor: '#fff',
    background: '#000000',
    menuItemColor: 'red'
  }
});

export default colors;
