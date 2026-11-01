import { test } from 'node:test';
import assert from 'node:assert';
import { greet } from './app.js';

test('greet returns a personalized message', () => {
    assert.strictEqual(greet('Raghavendra'), 'Hello, Raghavendra!');
});

test('greet returns a default message for empty input', () => {
    assert.strictEqual(greet(''), 'Hello, Guest!');
});