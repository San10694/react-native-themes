import Theme from 'react-native-themes';

const colors = new Theme.Colors({
  regular: {
    titleColor: '#1c7ee7',
    primaryTextColor: '#3b5998',
    fontColor: '#fff',
    background: '#e73536',
    menuItemColor: '#000'
  },
  darkTheme: {
    titleColor: '#9b9b9b',
    primaryTextColor: '#9b9b9b',
    fontColor: '#fff',
    background: '#000000',
    menuItemColor: 'red'
  }
});

export default colors;
