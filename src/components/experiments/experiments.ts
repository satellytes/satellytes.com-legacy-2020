import { EffectFactory } from '@satellytes/effect-factory';

// We need to maintain this file as webpack needs to know about
// about the package being loaded during compile name. So no plain
// list of package name strings possible.

async function perlinNoise() {
  const Effect = await import('@satellytes/effect-star-wars');
  return Effect;
}

async function starWars() {
  const Effect = await import('@satellytes/effect-svg-perlin-noise');
  return Effect;
}

const availableEffects = [starWars, perlinNoise];

let lastIndex = -1;

async function nextEffect() {
  const count = availableEffects.length;

  let newIndex = Math.round((count - 1) * Math.random());

  if(newIndex == lastIndex) {
    newIndex = (newIndex + 1)%count;
  }

  lastIndex = newIndex;

  return availableEffects[newIndex]();
}



export async function run() {
  const scrollContainer = <any>document.querySelector('.satellytes-scroll-container');
  const effect = await nextEffect();
  EffectFactory.run(effect, {element: scrollContainer});
}