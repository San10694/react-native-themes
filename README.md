# react-native-themes


## Getting started

`$ npm install react-native-themes --save`



## Steps of Usage

### Step 1 - Define the color themes.
```javascript
import Theme from 'react-native-themes';

const colors = new Theme.Colors({
    dark: {
        backgroundColor: '#3b5998',
    },
    light: {
        backgroundColor: '#fff',
    }
});

export default colors;
```

Note - Do not forget to import this file at the top of your component(ie. App.js).

### Step 2 - Apply theme on App Launch

By default the first theme in the colors template is selected. In the root component of your app like `App.js`, register `ThemeListeners` for the component to act on the default theme applied.

```js
componentWillMount() {
    this.listener = Theme.addThemeListener(() => {
      this.setState({});
    });
}

componentWillUnmount() {
    Theme.removeThemeListener(this.listener);
}
```

### Step 3 - Create Stylesheet

Create the stylesheet for your components as a function. 

Example - 
```js
import { StyleSheet } from 'react-native';

const styles = (colors) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.backgroundColor,
        },
        ...
    });
}

export default styles;
```

### Step 4 - Apply colors on Components

In the components where you would like to apply the theme colors call the `getStyles(stylesheet)` function in `componentWillMount()`.

```js
import Theme from 'react-native-themes';
import stylesheet from './styles'; //Stylesheet created in Step 2

let styles;

class MyComponent extends Component {
    ...
    
    componentWillMount(){
        styles = Theme.getStyles(stylesheet);
        //use the styles for styling the components in render methods.
    }
    
    ...
}
```

**Note**
For inline styles, you can get the colors by calling `Theme.getColors()`

Example
```js
    render(){
        const colors = Theme.getColors();
        return (
        <View style={{ backgroundColor: colors.backgroundColor, flex:1 }}>
            ...
        </View>    
        );
    }
```

### Step 5 - Change Color Theme

By `default` the first color theme will be applied. If you want to change the color theme you need to call the `Theme.setColorTheme(themeName, callback)`

* `themeName` - Name of the theme defined in Step 1.
* `callback` - Callback function to be called after theme is set

Example-

```js
    import Theme from 'react-native-themes';
    
    ...
    
    render(){
        //have to fetch styles again as the Theme Change 
        //will re-render the Component.
        styles = Theme.getStyles(stylesheet);
        
        return (
        ...
            <Button
              onPress={() => {
                if (Theme.getColorTheme() === 'dark') {
                  Theme.setColorTheme('light', () => {
                    this.setState({}); //force re-render of the component
                  });
                } else {
                  Theme.setColorTheme('dark', () => {
                    this.setState({}); //force re-render of the component
                  }));
                }
              }}
              title="Change Theme" />
          ...       
        );
    }
```

# Feedback
Bugs? Comments? Features? PRs and Issues happily welcomed!

# Contributor
Sandeep Tiwari
