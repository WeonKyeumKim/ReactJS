import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HeaderButtons, { HeaderButton, Item } from 'react-navigation-header-buttons';


//* need to install react-navigation-header-buttons
//*     HeaderButton, HeaderButtons, OverflowButton
//*
//*     >choco install yarn
//*     >npm install -g yarn
//*     >yarn add react-navigation-header-buttons
//*     >yarn add react-native-vector-icons
//*
//*  CustomButtons folder contains the above three buttons
//*     just saved to see the source codes


// define IconComponent, color, sizes and OverflowIcon in one place
const MaterialHeaderButton = props => (
  <HeaderButton {...props} IconComponent={MaterialIcons} iconSize={23} color="blue" />
);

export const MaterialHeaderButtons = props => {
  return (
    <HeaderButtons
      HeaderButtonComponent={MaterialHeaderButton}
      OverflowIcon={<MaterialIcons name="more-vert" size={23} color="white" />}
      {...props}
    />
  );
};

//* chnaged Item to Itema by me
export const Itema = HeaderButtons.Item;