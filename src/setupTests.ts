// Testing setup for Vitest + React Testing Library
// Extends expect with jest-dom matchers (Vitest-specific entry)
import '@testing-library/jest-dom/vitest'

// Minimal IntersectionObserver polyfill for jsdom tests
if (!('IntersectionObserver' in globalThis)) {
	class IO {
		constructor(_cb: any, _options?: any) {}
		observe() {}
		unobserve() {}
		disconnect() {}
	}
	// @ts-ignore
	globalThis.IntersectionObserver = IO as any
}
