import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const window = {
  width,
  height,
};

const colors = {
  primaryColor: '#1860EF',
  orangeColor: '#FF9B01',
  orangeColor2: 'rgba(255,160,1,0.5)',
  orangeColor3: "rgba(255, 160, 1, 0.4)",
  red1: '#FF2E01',
  red2: '#CB0000',
  red3: '#EE6C4D',
  red6: '#D30000',
  red5: 'rgba(211, 0, 0, 0.08)',
  yellowColor: '#FFE600',
  secondaryColor: '#e0e9ff',
  gold: '#FC9605',
  black: '#000',
  black2: '#686869',
  black3: '#383535',
  green: '#31932A',
  green2: '#0A673B',
  green3: '#E6F7F1',
  green4: '#EAF8F3',
  green5: '#0EBD96',
  blue: '#004FE9',
  white: '#FFFFFF',
  gray0: '#F5F5F5',
  gray: '#595959',
  gray2: '#C2C2C2',
  gray3: '#ECECEC',
  gray4: '#F3F3F3',
  gray5: '#D9D9D9',
  darkBrown: '#3F2117',
  blue2: '#0098FD',
  blue3: '#06B3C4',
  lightBlue: '#177cd4',
  red4: '#DD1E0C',
  shadowColor: 'rgba(0, 0, 0, 0.24)',
  orangeColor: '#F94209'
};

const fontFamily = {
  semiBold: 'Lato-Semibold',
  bold: 'Lato-Bold',
  extraBold: 'Lato-Heavy',
  medium: 'Lato-Medium',
  regular: 'Lato-Regular',
  thin: 'Lato-thin',
  light: 'Lato-Light',
  hairline: 'Lato-Hairline',
  black: 'Lato-Black',
  pangram: 'pangram',
  popinRegular: 'Poppins-Regular',
  popinBold: 'Poppins-Bold',
  popinMedium: 'Poppins-Medium',
  popinLight: 'Poppins-Light',
  popinSemi: 'Poppins-SemiBold',
  PoetsenOneRegular: 'PoetsenOne-Regular',
  pacificoRegular: 'Pacifico-Regular',
  yellowtailRegular: 'Yellowtail-Regular',
  HelveticaNeue: 'Helvetica Neue',
};
const timer = {
  loaderTime: 1000,
};
export { timer, window, colors, fontFamily };
