import { DetailedHTMLProps, HTMLAttributes, ReactElement } from "react";

declare interface HiddenProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  /**
   * hides from sm & above
   */
  sm?: boolean;
  /**
   * hides from md & above
   */
  md?: boolean;
  /**
   * hides from lg & above
   */
  lg?: boolean;
  /**
   * hides from xl & above
   */
  xl?: boolean;
  /**
   * hides from 2xl & above
   */
  xxl?: boolean;
  /**
   * hides while hovering over the component or its children
   */
  hover?: boolean;
  /**
   * hides while clicking over the component or its children
   */
  active?: boolean;
  /**
   * hides while focusing over the component or its children
   */
  focus?: boolean;
}

/**
 * Hides any component passed as children inside of it.
 * It can hide them based on responsiveness & different user input states.
 * Responsiveness is mobile-first thus hides the components on breakpoint
 * size & above
 * 
 * Using multiple breakpoints isn't supported
 */
declare function Hidden(props: HiddenProps): ReactElement;

export default Hidden;
