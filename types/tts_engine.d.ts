export type TTSEngineType = {
  act: string;
  browser: string;
  webSocket: string;
};

export type TTSEngineTypes = keyof TTSEngineType;

export interface TTSEngine {
  play: (text: string) => void;
}
