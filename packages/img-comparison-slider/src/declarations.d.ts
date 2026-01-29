declare module '*.scss';
declare module '*.html';

// Constructable Stylesheets API
interface CSSStyleSheet {
  replaceSync(text: string): void;
  replace(text: string): Promise<CSSStyleSheet>;
}

interface ShadowRoot {
  adoptedStyleSheets: CSSStyleSheet[];
}

interface Document {
  adoptedStyleSheets: CSSStyleSheet[];
}
