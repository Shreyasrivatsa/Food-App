// src/Components/utils/FormatFunction.jsx

export function FormatFraction(text) {
    return text
      .replace(/\(Grain-free Baking Powder Recipe\*\* see recipe below\*\*\)/g, '') // Remove unwanted text
      .replace(/\b1\/2\b/g, '½')
      .replace(/\b1\/3\b/g, '⅓')
      .replace(/\b2\/3\b/g, '⅔')
      .replace(/\b1\/4\b/g, '¼')
      .replace(/\b3\/4\b/g, '¾')
      .replace(/\b1\/5\b/g, '⅕')
      .replace(/\b2\/5\b/g, '⅖')
      .replace(/\b3\/5\b/g, '⅗')
      .replace(/\b4\/5\b/g, '⅘')
      .replace(/\b1\/6\b/g, '⅙')
      .replace(/\b5\/6\b/g, '⅚')
      .replace(/\b1\/8\b/g, '⅛')
      .replace(/\b3\/8\b/g, '⅜')
      .replace(/\b5\/8\b/g, '⅝')
      .replace(/\b7\/8\b/g, '⅞')
      .replace(/(5 ¼ cups powdered sugar, sifted) a pinch of salt/g, '5 ¼ cups powdered sugar, sifted, a pinch of salt');
}
