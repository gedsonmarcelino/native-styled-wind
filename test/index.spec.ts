import { stylish } from '../src/stylish';
import * as mockUtils from '../src/utils';

jest.mock('../src/utils.ts', () => {
  return {
    ...jest.requireActual('../src/utils.ts'),
    loadCustomConfig: jest
      .fn()
      .mockReturnValue(require('./mocks/native-styled-wind.json')),
  };
});

describe('native-styled-wind', () => {
  it('should return a css style', () => {
    const result = stylish({ styles: 'italic' });
    expect(result).toBe(' font-style: italic;');
  });

  it('should resolve multiple css style', () => {
    const result = stylish({ styles: 'italic text-xl' });
    expect(result).toBe(
      ' font-style: italic; font-size:  20px; line-height:  28px;'
    );
  });

  it('should resolve widths and heights', () => {
    let result = stylish({ styles: 'w-1' });
    expect(result).toBe(' width: 4px;');

    result = stylish({ styles: 'h-1' });
    expect(result).toBe(' height: 4px;');
  });

  it('should resolve dynamic widths and heights', () => {
    let result = stylish({ styles: 'w-{10}' });
    expect(result).toBe(' width: 10px;');

    result = stylish({ styles: 'h-{20}' });
    expect(result).toBe(' height: 20px;');
  });

  it('should resolve dynamic min-widths and min-heights', () => {
    let result = stylish({ styles: 'min-w-{10}' });
    expect(result).toBe(' min-width: 10px;');

    result = stylish({ styles: 'min-h-{20}' });
    expect(result).toBe(' min-height: 20px;');
  });

  it('should resolve dynamic max-widths and max-heights', () => {
    let result = stylish({ styles: 'max-w-{10}' });
    expect(result).toBe(' max-width: 10px;');

    result = stylish({ styles: 'max-h-{20}' });
    expect(result).toBe(' max-height: 20px;');
  });

  it('should resolve dynamic px- and py-', () => {
    let result = stylish({ styles: 'px-{10}' });
    expect(result).toBe(' padding-left: 10px; padding-right: 10px;');

    result = stylish({ styles: 'py-{20}' });
    expect(result).toBe(' padding-top: 20px; padding-bottom: 20px;');
  });

  it('should load custom config', () => {
    let result = stylish({ styles: 'bg-primary-light' });
    expect(result).toBe(' background-color: #362C36;');

    result = stylish({ styles: 'font-regular' });
    expect(result).toBe(' font-family: RosarivoRegular;');
  });
});
