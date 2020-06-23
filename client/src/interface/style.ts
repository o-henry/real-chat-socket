interface IProps {
  /**
   * @Param children : prop text
   * @Param style : 조건부 CSS 위한 props
   */

  children?: any;
  style?: string;
}

export interface IText extends IProps {}

export interface ICount extends IProps {}

export interface IImg extends IProps {
  /**
   * @Param alt : descriptoin
   * @Param src : img source
   */

  alt: string;
  src: any;
}

export interface IButton extends IProps {
  /**
   * @Param onclick : click events
   */

  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
