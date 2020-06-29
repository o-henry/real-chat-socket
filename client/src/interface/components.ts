interface IProps {
  /**
   * @param children : prop text
   * @param style : 조건부 CSS 위한 props
   */

  children?: any;
  style?: string;
}

export interface IText extends IProps {}

export interface ICount extends IProps {}

export interface IImg extends IProps {
  /**
   * @param alt : descriptoin
   * @param src : img source
   */

  alt: string;
  src: any;
}

export interface IButton extends IProps {
  /**
   * @param onclick : click events
   */

  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface IInput extends IProps {
  /**
   * @param value: input state
   * @param placeholder: place holder
   * @param onChange: input data handler
   * @param onKeyDown: key event handler
   */
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: any;
}
