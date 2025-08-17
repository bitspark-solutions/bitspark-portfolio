/**
 * Keyboard navigation utilities for accessibility
 */

// Key codes for common navigation keys
export const KEYS = {
  TAB: 'Tab',
  ENTER: 'Enter',
  SPACE: ' ',
  ESCAPE: 'Escape',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  HOME: 'Home',
  END: 'End',
} as const;

/**
 * Get all focusable elements within a container
 */
export function getFocusableElements(container: HTMLElement): HTMLElement[] {
  const focusableSelectors = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
    '[contenteditable="true"]',
  ].join(', ');

  return Array.from(container.querySelectorAll(focusableSelectors)) as HTMLElement[];
}

/**
 * Focus trap implementation for modals and overlays
 */
export class FocusTrap {
  private container: HTMLElement;
  private focusableElements: HTMLElement[] = [];
  private firstFocusable: HTMLElement | null = null;
  private lastFocusable: HTMLElement | null = null;
  private previouslyFocused: HTMLElement | null = null;

  constructor(container: HTMLElement) {
    this.container = container;
    this.updateFocusableElements();
  }

  private updateFocusableElements() {
    this.focusableElements = getFocusableElements(this.container);
    this.firstFocusable = this.focusableElements[0] || null;
    this.lastFocusable = this.focusableElements[this.focusableElements.length - 1] || null;
  }

  activate() {
    this.previouslyFocused = document.activeElement as HTMLElement;
    this.updateFocusableElements();
    
    // Focus the first focusable element
    if (this.firstFocusable) {
      this.firstFocusable.focus();
    }

    // Add event listener for tab key
    document.addEventListener('keydown', this.handleKeyDown);
  }

  deactivate() {
    document.removeEventListener('keydown', this.handleKeyDown);
    
    // Return focus to previously focused element
    if (this.previouslyFocused) {
      this.previouslyFocused.focus();
    }
  }

  private handleKeyDown = (event: KeyboardEvent) => {
    if (event.key !== KEYS.TAB) return;

    this.updateFocusableElements();

    if (this.focusableElements.length === 0) {
      event.preventDefault();
      return;
    }

    if (this.focusableElements.length === 1) {
      event.preventDefault();
      this.focusableElements[0].focus();
      return;
    }

    if (event.shiftKey) {
      // Shift + Tab (backward)
      if (document.activeElement === this.firstFocusable) {
        event.preventDefault();
        this.lastFocusable?.focus();
      }
    } else {
      // Tab (forward)
      if (document.activeElement === this.lastFocusable) {
        event.preventDefault();
        this.firstFocusable?.focus();
      }
    }
  };
}

/**
 * Create a roving tabindex for arrow key navigation
 */
export class RovingTabIndex {
  private container: HTMLElement;
  private items: HTMLElement[];
  private currentIndex = 0;
  private orientation: 'horizontal' | 'vertical' | 'both';

  constructor(
    container: HTMLElement,
    itemSelector: string,
    orientation: 'horizontal' | 'vertical' | 'both' = 'both'
  ) {
    this.container = container;
    this.orientation = orientation;
    this.items = Array.from(container.querySelectorAll(itemSelector)) as HTMLElement[];
    this.init();
  }

  private init() {
    // Set initial tabindex values
    this.items.forEach((item, index) => {
      item.tabIndex = index === 0 ? 0 : -1;
      item.addEventListener('keydown', this.handleKeyDown);
      item.addEventListener('focus', () => this.setCurrentIndex(index));
    });
  }

  private setCurrentIndex(index: number) {
    // Update tabindex values
    this.items.forEach((item, i) => {
      item.tabIndex = i === index ? 0 : -1;
    });
    this.currentIndex = index;
  }

  private handleKeyDown = (event: KeyboardEvent) => {
    let newIndex = this.currentIndex;
    let handled = false;

    switch (event.key) {
      case KEYS.ARROW_RIGHT:
        if (this.orientation === 'horizontal' || this.orientation === 'both') {
          newIndex = (this.currentIndex + 1) % this.items.length;
          handled = true;
        }
        break;
      case KEYS.ARROW_LEFT:
        if (this.orientation === 'horizontal' || this.orientation === 'both') {
          newIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
          handled = true;
        }
        break;
      case KEYS.ARROW_DOWN:
        if (this.orientation === 'vertical' || this.orientation === 'both') {
          newIndex = (this.currentIndex + 1) % this.items.length;
          handled = true;
        }
        break;
      case KEYS.ARROW_UP:
        if (this.orientation === 'vertical' || this.orientation === 'both') {
          newIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
          handled = true;
        }
        break;
      case KEYS.HOME:
        newIndex = 0;
        handled = true;
        break;
      case KEYS.END:
        newIndex = this.items.length - 1;
        handled = true;
        break;
    }

    if (handled) {
      event.preventDefault();
      this.setCurrentIndex(newIndex);
      this.items[newIndex].focus();
    }
  };

  destroy() {
    this.items.forEach(item => {
      item.removeEventListener('keydown', this.handleKeyDown);
    });
  }
}

/**
 * Skip link component for keyboard navigation
 */
export function createSkipLink(targetId: string, text = 'Skip to main content'): HTMLElement {
  const skipLink = document.createElement('a');
  skipLink.href = `#${targetId}`;
  skipLink.textContent = text;
  skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded';
  
  skipLink.addEventListener('click', (event) => {
    event.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.focus();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });

  return skipLink;
}

/**
 * Handle escape key to close modals/overlays
 */
export function handleEscapeKey(callback: () => void) {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === KEYS.ESCAPE) {
      callback();
    }
  };

  document.addEventListener('keydown', handleKeyDown);
  
  return () => {
    document.removeEventListener('keydown', handleKeyDown);
  };
}

/**
 * Announce content to screen readers
 */
export function announceToScreenReader(message: string, priority: 'polite' | 'assertive' = 'polite') {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}