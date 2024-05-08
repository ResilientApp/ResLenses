import { Color } from "three";

// t should be between 0 and 1
export function lerp(a, b, t) {
    return a + (b - a) * t;
}

export function getColorFromRamp(colors, t) {
    t *= (colors.length - 1);
    let index = Math.floor(t);
    let u = t - index;
    let color1 = colors[index];
    let color2 = colors[(index < colors.length - 1 ? index + 1 : index)];
    return new Color(
        lerp(color1.r, color2.r, u),
        lerp(color1.g, color2.g, u),
        lerp(color1.b, color2.b, u)
    )
}