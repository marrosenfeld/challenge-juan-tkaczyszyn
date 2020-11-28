import spacing from 'material-ui/styles/spacing';
import typography from 'material-ui/styles/typography';

export const setProperty = (style, key, value) =>{
  const newStyle = {}
  for(let k in style){
    newStyle[k] = style[k]
  }
  if (value){
    newStyle[key]=value
  }
  return newStyle;
}

const styles = (currentTheme) => ({
  logo: {
    fontSize: 22,
    color: currentTheme.logoColor,
    lineHeight: `${spacing.desktopKeylineIncrement}px`,
    fontWeight: typography.fontWeightLight,
    backgroundColor: currentTheme.logoBackgroundColor,
    paddingLeft: 35,
    height: 56,
  },
  headerItem: {
    color: currentTheme.headerItemColor,
    fontSize: 14,
    boxShadow: currentTheme.headerItemBoxShadow,
    backgroundColor: currentTheme.headerItemBackgroundColor,
    fontWeight: currentTheme.headerItemFontWeight,
  },
  selectedMenuListItem: {
    color: currentTheme.selectedMenuListItemColor,
    fontSize: 14,
    background: currentTheme.selectedMenuListItemBackgroundColor,
  },
  selectedListItem: {
    color: currentTheme.selectedListItemColor,
    fontSize: 14,
    background: currentTheme.selectedListItemBackgroundColor,
  },
  menuItem: {
    color: currentTheme.menuItemColor,
    fontSize: 14,
  },
  menuItem: {
    color: currentTheme.menuItemColor,
    fontSize: 14,
  },
  avatar: {
    div: {
      padding: '15px 0 20px 15px',
      height: 45,
    },
    icon: {
      float: 'left',
      display: 'block',
      marginRight: 15,
      boxShadow: '0px 0px 0px 8px rgba(0,0,0,0.2)',
      objectFit: 'contain',
      padding: '5px'
    },
    span: {
      paddingTop: 12,
      display: 'block',
      color: currentTheme.avatarSpanColor,
      fontWeight: 300,
      textShadow: currentTheme.avatarSpanTextShadow,
    },
  },
  loading: {
    textAlign: 'center',
    paddingTop: 12,
    display: 'block',
    color: currentTheme.menuItemColor,
    fontWeight: 300,
    textShadow: currentTheme.avatarSpanTextShadow,
  },


});

export default styles;
