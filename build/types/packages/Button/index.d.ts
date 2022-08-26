/// <reference types="react" />
import './index.less';
export interface IButtonProps {
    label?: string;
    onClick?(): void;
}
declare const Button: ({ label, onClick }: IButtonProps) => JSX.Element;
export default Button;
