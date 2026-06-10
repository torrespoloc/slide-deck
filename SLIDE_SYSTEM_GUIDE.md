# Slide Deck System Guide

A comprehensive guide to the new reusable, responsive slide component system built with React, TypeScript, and Vite.

## 📋 Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Core Components](#core-components)
3. [Slide Configuration](#slide-configuration)
4. [Navigation & Persistence](#navigation--persistence)
5. [Adding New Slides](#adding-new-slides)
6. [Keyboard Shortcuts](#keyboard-shortcuts)
7. [Responsive Design](#responsive-design)
8. [File Structure](#file-structure)

---

## Architecture Overview

The slide system is built on three core concepts:

### 1. **Centralized Configuration** (`slideConfig.ts`)
- Single source of truth for slide ordering and metadata
- Easy reordering by rearranging array items
- Supports slide IDs for URL bookmarking
- Type-safe with TypeScript interfaces

### 2. **Enhanced Viewer** (`DeckViewerEnhanced.tsx`)
- Handles all navigation and persistence logic
- Manages URL query parameters (`?slide=5`)
- Persists state to localStorage for better UX
- Responsive scaling for 16:9 presentation aspect ratio
- Accessible keyboard controls

### 3. **Reusable Slide Wrapper** (`SlideWrapper.tsx`)
- Standard padding, borders, and layout
- Uses centralized design tokens
- Ensures visual consistency across all slides

---

## Core Components

### `DeckViewerEnhanced.tsx`

The main presentation viewer component that wraps all slides.

**Features:**
- ✅ URL-based persistence (`?slide=5`)
- ✅ localStorage backup for state
- ✅ Keyboard navigation (arrows, spacebar, 1-9 keys)
- ✅ On-screen navigation buttons
- ✅ Slide thumbnail navigation
- ✅ Responsive 16:9 scaling
- ✅ Accessible (ARIA labels, semantic HTML)

**Props:**
```typescript
interface DeckViewerEnhancedProps {
  slides: SlideConfig[];           // Array of slide configurations
    initialSlide?: number;           // Default starting slide (0-indexed)
      onSlideChange?: (index: number) => void; // Callback for slide changes
      }
      ```

      **Usage:**
      ```tsx
      import { DeckViewerEnhanced } from './components/DeckViewerEnhanced';
      import { DECK_SLIDES } from './components/slideConfig';

      export default function App() {
        return <DeckViewerEnhanced slides={DECK_SLIDES} />;
        }
        ```

        ### `SlideWrapper.tsx`

        A minimal wrapper component for consistent slide styling.

        **Props:**
        ```typescript
        interface SlideWrapperProps {
          background?: string;        // CSS color (default: '#FFFCF9')
            children: React.ReactNode;
              style?: React.CSSProperties; // Custom styles override
              }
              ```

              **Usage:**
              ```tsx
              import { SlideWrapper } from './components/SlideWrapper';

              export function MySlide() {
                return (
                    <SlideWrapper background="#fff">
                          <h1>Slide Title</h1>
                                <p>Slide content here</p>
                                    </SlideWrapper>
                                      );
                                      }
                                      ```

                                      ---

                                      ## Slide Configuration

                                      ### `slideConfig.ts`

                                      Centralized configuration file that maps all slides with metadata.

                                      **Key Exports:**

                                      ```typescript
                                      // Type definition for slide metadata
                                      export interface SlideConfig {
                                        component: React.ComponentType;  // The slide component
                                          title: string;                    // Display title
                                            id?: string;                      // Optional: for URL bookmarking
                                            }

                                            // Main deck slides (8 slides)
                                            export const DECK_SLIDES: SlideConfig[] = [
                                              { component: DeckCover, title: '01 — Cover', id: 'cover' },
                                                { component: MyCareer, title: '02 - My Career', id: 'career' },
                                                  // ... more slides
                                                  ];

                                                  // Template slides for reference (18 templates)
                                                  export const TEMPLATE_SLIDES: SlideConfig[] = [
                                                    { component: Cover, title: 'Cover Template', id: 'cover-template' },
                                                      // ... more templates
                                                      ];
                                                      ```

                                                      ### How to Reorder Slides

                                                      Simply rearrange the array items in `slideConfig.ts`:

                                                      ```typescript
                                                      export const DECK_SLIDES: SlideConfig[] = [
                                                        { component: Agenda, title: '01 - Agenda', id: 'agenda' },       // Moved to first
                                                          { component: DeckCover, title: '02 — Cover', id: 'cover' },      // Moved to second
                                                            // ... rest of slides
                                                            ];
                                                            ```

                                                            ### How to Add Slides

                                                            1. Create your slide component in `src/slides/` directory
                                                            2. Export it from `src/slides/index.ts`
                                                            3. Add it to `slideConfig.ts` array:

                                                            ```typescript
                                                            import { MyNewSlide } from '../slides';

                                                            export const DECK_SLIDES: SlideConfig[] = [
                                                              // ... existing slides
                                                                { component: MyNewSlide, title: '09 - New Slide', id: 'new-slide' },
                                                                ];
                                                                ```

                                                                ---

                                                                ## Navigation & Persistence

                                                                ### Keyboard Shortcuts

                                                                | Key | Action |
                                                                |-----|--------|
                                                                | `←` / `↑` | Previous slide |
                                                                | `→` / `↓` / `Space` | Next slide |
                                                                | `1-9` | Jump to slide (1=first, 2=second, etc.) |

                                                                ### URL Persistence

                                                                Current slide is bookmarkable via query parameter:
                                                                ```
                                                                https://yoursite.com/?slide=5    // Opens slide 5
                                                                ```

                                                                ### localStorage

                                                                The viewer automatically saves the current slide index:
                                                                ```javascript
                                                                localStorage.getItem('slide-deck-current-index')  // Returns: "4"
                                                                ```

                                                                ### Persistence Priority

                                                                1. **URL query parameter** (`?slide=5`) — highest priority
                                                                2. **localStorage** (`slide-deck-current-index`)
                                                                3. **initialSlide prop** (default to 0)

                                                                ---

                                                                ## Adding New Slides

                                                                ### Step 1: Create Slide Component

                                                                Create `src/slides/MyNewSlide.tsx`:

                                                                ```tsx
                                                                import { SlideWrapper } from '../components/SlideWrapper';

                                                                export function MyNewSlide() {
                                                                  return (
                                                                      <SlideWrapper background="#FFFCF9">
                                                                            <div style={{ padding: 24 }}>
                                                                                    <h1 style={{ fontSize: 48, marginBottom: 24 }}>My New Slide</h1>
                                                                                            <p style={{ fontSize: 24 }}>Add your content here</p>
                                                                                                  </div>
                                                                                                      </SlideWrapper>
                                                                                                        );
                                                                                                        }
                                                                                                        ```
                                                                                                        
                                                                                                        ### Step 2: Export from `index.ts`
                                                                                                        
                                                                                                        Add to `src/slides/index.ts`:
                                                                                                        
                                                                                                        ```typescript
                                                                                                        export { MyNewSlide } from './MyNewSlide';
                                                                                                        ```
                                                                                                        
                                                                                                        ### Step 3: Add to Configuration
                                                                                                        
                                                                                                        Update `src/components/slideConfig.ts`:
                                                                                                        
                                                                                                        ```typescript
                                                                                                        import { MyNewSlide } from '../slides';
                                                                                                        
                                                                                                        export const DECK_SLIDES: SlideConfig[] = [
                                                                                                          // ... existing slides
                                                                                                            { component: MyNewSlide, title: '09 - My New Slide', id: 'new-slide' },
                                                                                                            ];
                                                                                                            ```
                                                                                                            
                                                                                                            ### Step 4: Done! 
                                                                                                            
                                                                                                            The slide is now:
                                                                                                            - ✅ Visible in the deck
                                                                                                            - ✅ Included in navigation
                                                                                                            - ✅ Accessible via keyboard (if it's slide 9, press `9`)
                                                                                                            - ✅ Bookmarkable via URL
                                                                                                            
                                                                                                            ---
                                                                                                            
                                                                                                            ## Responsive Design
                                                                                                            
                                                                                                            The slide system maintains a **16:9 aspect ratio** (1920×1080 base size) and scales responsively.
                                                                                                            
                                                                                                            ### How It Works
                                                                                                            
                                                                                                            ```
                                                                                                            Available viewport space: (window.innerWidth - 48px) × (window.innerHeight - 120px)
                                                                                                            Maximum scale: min(width / 1920, height / 1080, 1)
                                                                                                            Applied via CSS transform: scale(${scale})
                                                                                                            ```
                                                                                                            
                                                                                                            ### Result
                                                                                                            
                                                                                                            - **Large screens**: Slides fill the viewport with white space
                                                                                                            - **Medium screens**: Slides scale down proportionally
                                                                                                            - **Small screens**: Slides remain readable at minimum size
                                                                                                            
                                                                                                            ### Customizing Aspect Ratio
                                                                                                            
                                                                                                            To change the base dimensions, edit `DeckViewerEnhanced.tsx`:
                                                                                                            
                                                                                                            ```typescript
                                                                                                            <div style={{
                                                                                                              width: 1920,   // ← Change this
                                                                                                                height: 1080,  // ← And this
                                                                                                                  // ...
                                                                                                                  }}>
                                                                                                                  ```
                                                                                                                  
                                                                                                                  And update the scale calculation:
                                                                                                                  
                                                                                                                  ```typescript
                                                                                                                  const width = (window.innerWidth - 48) / 1920;   // ← Update
                                                                                                                  const height = (window.innerHeight - 120) / 1080; // ← Update
                                                                                                                  ```
                                                                                                                  
                                                                                                                  ---
                                                                                                                  
                                                                                                                  ## File Structure
                                                                                                                  
                                                                                                                  ```
                                                                                                                  src/
                                                                                                                  ├── components/
                                                                                                                  │   ├── DeckViewerEnhanced.tsx    # Enhanced viewer with persistence
                                                                                                                  │   ├── DeckViewer.tsx             # Original viewer (kept for reference)
                                                                                                                  │   ├── SlideWrapper.tsx           # Reusable slide container
                                                                                                                  │   ├── SlideHeader.tsx            # Optional: header component
                                                                                                                  │   ├── SlideFooter.tsx            # Optional: footer component
                                                                                                                  │   └── slideConfig.ts             # 🎯 Central configuration
                                                                                                                  │
                                                                                                                  ├── slides/
                                                                                                                  │   ├── index.ts                   # Barrel export for all slides
                                                                                                                  │   ├── deck/                      # Presentation deck slides
                                                                                                                  │   │   ├── DeckCover.tsx
                                                                                                                  │   │   ├── MyCareer.tsx
                                                                                                                  │   │   └── ...
                                                                                                                  │   ├── Cover.tsx                  # Template slides
                                                                                                                  │   ├── Timeline.tsx
                                                                                                                  │   └── ...
                                                                                                                  │
                                                                                                                  ├── tokens/
                                                                                                                  │   └── index.ts                   # Design tokens (colors, spacing, etc.)
                                                                                                                  │
                                                                                                                  ├── App.tsx                        # Main app component
                                                                                                                  ├── main.tsx                       # Entry point
                                                                                                                  ├── index.css                      # Global styles
                                                                                                                  └── App.css                        # App-specific styles
                                                                                                                  ```
                                                                                                                  
                                                                                                                  ---
                                                                                                                  
                                                                                                                  ## Type Safety
                                                                                                                  
                                                                                                                  The system is fully typed with TypeScript:
                                                                                                                  
                                                                                                                  ```typescript
                                                                                                                  // slideConfig.ts
                                                                                                                  export interface SlideConfig {
                                                                                                                    component: React.ComponentType;  // Must be a React component
                                                                                                                      title: string;                    // Display title
                                                                                                                        id?: string;                      // Optional unique ID
                                                                                                                        }
                                                                                                                        
                                                                                                                        export type DeckMode = 'deck' | 'template';  // Literal types for modes
                                                                                                                        ```
                                                                                                                        
                                                                                                                        This ensures:
                                                                                                                        - ✅ IDE autocomplete works
                                                                                                                        - ✅ Type errors caught at build time
                                                                                                                        - ✅ Refactoring is safe
                                                                                                                        
                                                                                                                        ---
                                                                                                                        
                                                                                                                        ## Best Practices
                                                                                                                        
                                                                                                                        ### Do ✅
                                                                                                                        
                                                                                                                        - Keep `slideConfig.ts` as the single source of truth
                                                                                                                        - Use `SlideWrapper` for consistency
                                                                                                                        - Leverage design tokens from `src/tokens/`
                                                                                                                        - Create reusable layout components
                                                                                                                        - Add meaningful `id` values for bookmarking
                                                                                                                        
                                                                                                                        ### Don't ❌
                                                                                                                        
                                                                                                                        - Hardcode slide arrays in components
                                                                                                                        - Inline all styling (use design tokens)
                                                                                                                        - Create slides without proper exports
                                                                                                                        - Skip TypeScript typing
                                                                                                                        - Ignore the 1920×1080 base size
                                                                                                                        
                                                                                                                        ---
                                                                                                                        
                                                                                                                        ## Extending the System
                                                                                                                        
                                                                                                                        ### Custom Transitions
                                                                                                                        
                                                                                                                        To add entrance animations, modify `DeckViewerEnhanced.tsx`:
                                                                                                                        
                                                                                                                        ```typescript
                                                                                                                        <div style={{
                                                                                                                          // ... existing styles
                                                                                                                            animation: `slideIn 0.5s ease-in-out`,
                                                                                                                            }}>
                                                                                                                              <Slide />
                                                                                                                              </div>
                                                                                                                              ```
                                                                                                                              
                                                                                                                              ### Slide-Specific Controls
                                                                                                                              
                                                                                                                              Pass metadata through `SlideConfig`:
                                                                                                                              
                                                                                                                              ```typescript
                                                                                                                              export interface SlideConfig {
                                                                                                                                component: React.ComponentType;
                                                                                                                                  title: string;
                                                                                                                                    id?: string;
                                                                                                                                      canSkip?: boolean;        // New custom field
                                                                                                                                        duration?: number;        // Auto-advance after N seconds
                                                                                                                                          presenter?: string;       // Metadata
                                                                                                                                          }
                                                                                                                                          ```
                                                                                                                                          
                                                                                                                                          ### Analytics Integration
                                                                                                                                          
                                                                                                                                          Use the `onSlideChange` callback:
                                                                                                                                          
                                                                                                                                          ```tsx
                                                                                                                                          <DeckViewerEnhanced
                                                                                                                                            slides={DECK_SLIDES}
                                                                                                                                              onSlideChange={(index) => {
                                                                                                                                                  analytics.track('slide_viewed', { slide_index: index });
                                                                                                                                                    }}
                                                                                                                                                    />
                                                                                                                                                    ```
                                                                                                                                                    
                                                                                                                                                    ---
                                                                                                                                                    
                                                                                                                                                    ## Troubleshooting
                                                                                                                                                    
                                                                                                                                                    ### Slide not appearing?
                                                                                                                                                    
                                                                                                                                                    1. Check it's exported from `src/slides/index.ts`
                                                                                                                                                    2. Verify it's added to `slideConfig.ts`
                                                                                                                                                    3. Ensure component name matches exactly
                                                                                                                                                    
                                                                                                                                                    ### URL parameter not working?
                                                                                                                                                    
                                                                                                                                                    1. Verify URL format: `?slide=5` (not `?slide=5th`)
                                                                                                                                                    2. Index is 0-based (0 = first slide)
                                                                                                                                                    3. Invalid indices default to 0
                                                                                                                                                    
                                                                                                                                                    ### Styling looks off?
                                                                                                                                                    
                                                                                                                                                    1. Check `SlideWrapper` background color
                                                                                                                                                    2. Verify viewport is not zoomed in browser
                                                                                                                                                    3. Confirm 1920×1080 base dimensions in viewer
                                                                                                                                                    
                                                                                                                                                    ---
                                                                                                                                                    
                                                                                                                                                    ## Commands
                                                                                                                                                    
                                                                                                                                                    ```bash
                                                                                                                                                    # Development
                                                                                                                                                    npm run dev          # Start dev server with HMR
                                                                                                                                                    
                                                                                                                                                    # Production
                                                                                                                                                    npm run build        # Build for production
                                                                                                                                                    npm run preview      # Preview production build locally
                                                                                                                                                    
                                                                                                                                                    # Quality
                                                                                                                                                    npm run lint         # Run ESLint and TypeScript checks
                                                                                                                                                    ```
                                                                                                                                                    
                                                                                                                                                    ---
                                                                                                                                                    
                                                                                                                                                    ## Summary
                                                                                                                                                    
                                                                                                                                                    You now have a professional, production-ready slide deck system that:
                                                                                                                                                    
                                                                                                                                                    ✅ Maintains semantic structure with `slideConfig.ts`
                                                                                                                                                    ✅ Persists state via URL and localStorage
                                                                                                                                                    ✅ Provides smooth, responsive scaling
                                                                                                                                                    ✅ Supports multiple navigation methods
                                                                                                                                                    ✅ Is fully typed with TypeScript
                                                                                                                                                    ✅ Scales from a few slides to hundreds
                                                                                                                                                    
                                                                                                                                                    Happy presenting! 🎉
