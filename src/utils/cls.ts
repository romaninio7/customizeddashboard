export type IClsOptions = {
    states?: Object;
    modifiers?: Object;
};

export function cls(name: string = '', {modifiers = {}}: IClsOptions = {}): string {
    const classNames: string[] = [];

    Object.keys(modifiers).forEach((key: string) => modifiers[key] && classNames.push(`mod-${key}`));

    return [name].concat(classNames).join(' ');
}
