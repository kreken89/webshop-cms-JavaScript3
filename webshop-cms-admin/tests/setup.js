import { afterEach, expect } from 'vitest';
import matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';

// Extends the functionality from expect so we can use functions like .toBeVisible etc.
expect.extend(matchers);


//Clearing jsdom after each test are finished, so they don't depend on each other
afterEach(() => {
  cleanup();
});