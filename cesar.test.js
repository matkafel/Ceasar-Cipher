import cesar13 from './js/cesar13';
import { TestScheduler } from 'jest'


test('Test uppercase letter', () => {
    const capitalWord = 'PRZEPROGRAMOWANI';
    const result = cesar13(capitalWord);

    expect(result).toBe('CEMRCEBTENZBJNAV');
});

test('Decrypt what has been encrypted ', () => {
    const descrypt = 'CEMRCEBTENZBJNAV';
    const result = cesar13(descrypt);

    expect(result).toBe('PRZEPROGRAMOWANI')
})


test('Test lowercase letter', () => {
    const lowercaseWord = 'przeprogramowani'
    const result = cesar13(lowercaseWord)

    expect(result).toBe('cemrcebtenzbjnav')
})

test('Number in the middle of the word', () => {
    const numberInWord = 'prze4programowani'
    const result = cesar13(numberInWord);

    expect(result).toBe('cemr4cebtenzbjnav')
})

test('Special characters in middle', () => {
    const charactersInWord = 'prze!pr%ogramowani';
    const result = cesar13(charactersInWord);

    expect(result).toBe('cemr!ce%btenzbjnav')
})

test('if number throw error', () => {
    const number = 12345;
    const result = cesar13(number);

    expect(result).toBe('The phrase must be text and contain at least one letter')
})

test('if empty throw error', () => {
    const empty = '';
    const result = cesar13(empty);

    expect(result).toBe('The phrase must be text and contain at least one letter')
})