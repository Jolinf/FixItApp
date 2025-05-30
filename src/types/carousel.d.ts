declare module "react-native-snap-carousel" {
  import { Component } from "react";
  import { ViewStyle, StyleProp } from "react-native";

  interface CarouselProperties {
    data: any[];
    renderItem: (item: { item: any; index: number }) => React.ReactNode;
    sliderWidth: number;
    itemWidth: number;
    onSnapToItem?: (index: number) => void;
    loop?: boolean;
    ref?: React.RefObject<any>;
  }

  export default class Carousel extends Component<CarouselProperties> {}
}
