declare module "turn-js/turn.min" {
  export const enum TurnDisplay {
    SINGLE = "single",
    DOUBLE = "double",
  }

  export type TurnView = Array<number>;

  export type TurnSize = {
    width: number;
    height: number;
  };

  export type TurnWhen = {
    end?: TurnEndEvent;
    first?: TurnFirstEvent;
    last?: TurnLastEvent;
    missing?: TurnMissingEvent;
    start?: TurnStartEvent;
    turning?: TurnTurningEvent;
    turned?: TurnTurnedEvent;
    zooming?: TurnZoomingEvent;
  };

  export type TurnEndEvent = (
    event: Event,
    page: number,
    pageObject: unknown // object
  ) => void;
  export type TurnFirstEvent = (event: Event) => void;
  export type TurnLastEvent = (event: Event) => void;
  export type TurnMissingEvent = (event: Event, pages: Array<number>) => void;
  export type TurnStartEvent = (
    event: Event,
    pageObject: unknown, // object
    corner: TurnCorner
  ) => void;
  export type TurnTurningEvent = (
    event: Event,
    page: number,
    view: TurnView
  ) => void;
  export type TurnTurnedEvent = (
    event: Event,
    page: number,
    view: TurnView
  ) => void;
  export type TurnZoomingEvent = (
    event: Event,
    newFactor: number,
    current: number
  ) => void;

  export const enum TurnCorner {
    TOP_LEFT = "tl",
    TOP_RIGHT = "tr",
    BOTTOM_LEFT = "bl",
    BOTTOM_RIGHT = "br",
    RIGHT = "r",
    LEFT = "l",
  }

  export type TurnOptions = {
    acceleration: boolean;
    autoCenter: boolean;
    display: TurnDisplay;
    duration: number;
    gradients: number;
    height: number;
    inclination: number;
    page: number;
    pages: number;
    when: TurnWhen;
    width: number;
  };
}

interface JQuery {
  turn(options?: Partial<TurnOptions>): JQuery;

  turn(method: "animating"): boolean;
  turn(method: "display"): TurnDisplay;
  turn(method: "page"): number;
  turn(method: "pages"): number;
  turn(method: "size"): TurnSize;
  turn(method: "view"): TurnView;
  turn(method: "zoom"): number;

  turn(method: "addPage", element: JQuery, pageNumber: number): JQuery;
  turn(method: "display", displayMode: TurnDisplay): JQuery;
  turn(method: "disable", disable: boolean): JQuery;
  turn(method: "destroy"): JQuery;
  turn(method: "hasPage", pageNumber: number): boolean;
  turn(method: "next"): JQuery;
  turn(method: "is"): boolean;
  turn(method: "page", page: number): JQuery;
  turn(method: "pages", pages: number): JQuery;
  turn(method: "peel", corner: TurnCorner): JQuery;
  turn(method: "peel", corner: false): JQuery;
  turn(method: "previous"): JQuery;
  turn(method: "range", pageNumber?: number): Array<JQuery>;
  turn(method: "removePage", pageNumber: number): JQuery;
  turn(method: "resize"): JQuery;
  turn(method: "size", width: number, height: number): JQuery;
  turn(method: "stop"): JQuery;
  turn(method: "zoom", factor: number, duration?: number): JQuery;
}
