import { IEventBase } from "../Entities/IEventBase";
import { ICardStyles } from "../Styles/ICardStyles";

export interface IEventProps {
  content: IEventBase;
  styles?: ICardStyles;
}
