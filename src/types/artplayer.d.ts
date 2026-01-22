import Hls from 'hls.js';

declare module 'artplayer' {
  interface Artplayer {
    hls?: Hls;
  }
}
