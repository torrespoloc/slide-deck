# Quick Start Guide

Get your slide deck up and running in 60 seconds.

## Installation & Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
# http://localhost:5173
```

## Using the Slide Deck

### Navigation

| Keyboard | Action |
|----------|--------|
| `←` / `↑` | Go to previous slide |
| `→` / `↓` / `Space` | Go to next slide |
| `1-9` | Jump to slide 1-9 |

**Mouse:** Click "Prev" / "Next" buttons or thumbnail numbers

### Persistent Bookmarking

Save your place with a bookmarkable URL:

```
http://localhost:5173/?slide=5   # Opens to slide 5
```

Share this URL with others to jump directly to a specific slide.

---

## Adding a Slide in 3 Steps

### 1️⃣ Create the Component

Create `src/slides/MyNewSlide.tsx`:

```tsx
import { SlideWrapper } from '../components/SlideWrapper';

export function MyNewSlide() {
  return (
      <SlideWrapper background="#FFFCF9">
            <div style={{ padding: 48 }}>
                    <h1 style={{ fontSize: 48, fontWeight: 700, marginBottom: 24 }}>
                              My New Slide
                                      </h1>
                                              <p style={{ fontSize: 24, opacity: 0.7 }}>
                                                        Your content goes here
                                                                </p>
                                                                      </div>
                                                                          </SlideWrapper>
                                                                            );
                                                                            }
                                                                            ```

                                                                            ### 2️⃣ Export from Index

                                                                            Add to `src/slides/index.ts`:

                                                                            ```typescript
                                                                            export { MyNewSlide } from './MyNewSlide';
                                                                            ```

                                                                            ### 3️⃣ Add to Configuration

                                                                            Update `src/components/slideConfig.ts`:

                                                                            ```typescript
                                                                            import { MyNewSlide } from '../slides';

                                                                            export const DECK_SLIDES: SlideConfig[] = [
                                                                              // ... existing slides ...
                                                                                { component: MyNewSlide, title: '09 - My New Slide', id: 'new-slide' },
                                                                                ];
                                                                                ```

                                                                                **Done!** Your slide is now in the presentation.

                                                                                ---

                                                                                ## Common Tasks

                                                                                ### Reorder Slides

                                                                                Edit `src/components/slideConfig.ts` and rearrange the array:

                                                                                ```typescript
                                                                                export const DECK_SLIDES: SlideConfig[] = [
                                                                                  { component: Agenda, title: '01 - Agenda', id: 'agenda' },              // Moved to first!
                                                                                    { component: DeckCover, title: '02 — Cover', id: 'cover' },              // Was first, now second
                                                                                      { component: MyCareer, title: '03 - My Career', id: 'career' },
                                                                                        // ... rest
                                                                                        ];
                                                                                        ```

                                                                                        ### Change Slide Colors

                                                                                        In your slide component:

                                                                                        ```tsx
                                                                                        <SlideWrapper background="#001a33">  {/* Dark blue background */}
                                                                                          <div style={{ color: '#fff' }}>
                                                                                              <h1>White text on dark background</h1>
                                                                                                </div>
                                                                                                </SlideWrapper>
                                                                                                ```

                                                                                                ### Use Design Tokens

                                                                                                Import from `src/tokens/`:

                                                                                                ```typescript
                                                                                                import { radius, spacing, colors } from '../tokens';

                                                                                                <SlideWrapper background={colors.background}>
                                                                                                  <div style={{ padding: spacing['padding-large'] }}>
                                                                                                      {/* Content using tokens */}
                                                                                                        </div>
                                                                                                        </SlideWrapper>
                                                                                                        ```
                                                                                                        
                                                                                                        ### Add Keyboard Shortcut Handling
                                                                                                        
                                                                                                        In your component, use the viewer's built-in support:
                                                                                                        
                                                                                                        - Number keys `1-9` already jump to specific slides
                                                                                                        - Arrow keys / spacebar already handle navigation
                                                                                                        - No additional setup needed!
                                                                                                        
                                                                                                        ### Save Slide Position on Refresh
                                                                                                        
                                                                                                        This works automatically:
                                                                                                        
                                                                                                        1. **URL parameter** is set automatically: `?slide=5`
                                                                                                        2. **localStorage** saves the index
                                                                                                        3. On refresh, you return to the same slide
                                                                                                        
                                                                                                        Try it: Go to slide 5, refresh the page — you're back at slide 5!
                                                                                                        
                                                                                                        ---
                                                                                                        
                                                                                                        ## Keyboard Shortcuts Reference
                                                                                                        
                                                                                                        ```
                                                                                                        Navigation:
                                                                                                          ←  / ↑       Previous slide
                                                                                                            →  / ↓       Next slide
                                                                                                              Space        Next slide (faster than →)
                                                                                                                1-9          Jump to slides 1-9
                                                                                                                
                                                                                                                Presentation:
                                                                                                                  Esc          (Future: Exit fullscreen)
                                                                                                                    P            (Future: Show presenter notes)
                                                                                                                    ```
                                                                                                                    
                                                                                                                    ---
                                                                                                                    
                                                                                                                    ## File Structure Overview
                                                                                                                    
                                                                                                                    ```
                                                                                                                    src/
                                                                                                                    ├── components/
                                                                                                                    │   ├── DeckViewerEnhanced.tsx    ← Navigation & persistence logic
                                                                                                                    │   ├── SlideWrapper.tsx           ← Reusable slide container
                                                                                                                    │   └── slideConfig.ts             ← Central slide configuration
                                                                                                                    │
                                                                                                                    ├── slides/
                                                                                                                    │   ├── index.ts                   ← Export all slides here
                                                                                                                    │   ├── deck/                      ← Your presentation slides
                                                                                                                    │   │   ├── DeckCover.tsx
                                                                                                                    │   │   ├── MyCareer.tsx
                                                                                                                    │   │   └── ...
                                                                                                                    │   └── ...                        ← Template examples
                                                                                                                    │
                                                                                                                    ├── tokens/
                                                                                                                    │   └── index.ts                   ← Design tokens (colors, spacing)
                                                                                                                    │
                                                                                                                    ├── App.tsx                        ← Main app (don't change much)
                                                                                                                    ├── main.tsx                       ← Entry point
                                                                                                                    └── index.css                      ← Global styles
                                                                                                                    ```
                                                                                                                    
                                                                                                                    ---
                                                                                                                    
                                                                                                                    ## Styling
                                                                                                                    
                                                                                                                    ### Default Colors
                                                                                                                    
                                                                                                                    - **Background**: `#FFFCF9` (cream)
                                                                                                                    - **Dark mode**: `#1a1a1a` (charcoal)
                                                                                                                    - **Accent**: `#19AFC4` (cyan)
                                                                                                                    
                                                                                                                    ### Standard Spacing
                                                                                                                    
                                                                                                                    ```typescript
                                                                                                                    // From src/tokens/index.ts
                                                                                                                    spacing['padding-default']   // Default padding
                                                                                                                    spacing['padding-large']     // Larger padding
                                                                                                                    spacing['gap-small']         // Gap between elements
                                                                                                                    ```
                                                                                                                    
                                                                                                                    ### Fonts
                                                                                                                    
                                                                                                                    No specific font library installed. Uses system fonts by default.
                                                                                                                    
                                                                                                                    To use custom fonts:
                                                                                                                    
                                                                                                                    ```tsx
                                                                                                                    <h1 style={{
                                                                                                                      fontFamily: '"Your Font", sans-serif',
                                                                                                                        fontSize: 48,
                                                                                                                        }}>
                                                                                                                          Title
                                                                                                                          </h1>
                                                                                                                          ```
                                                                                                                          
                                                                                                                          ---
                                                                                                                          
                                                                                                                          ## Building for Production
                                                                                                                          
                                                                                                                          ```bash
                                                                                                                          # Create optimized build
                                                                                                                          npm run build
                                                                                                                          
                                                                                                                          # Test production build locally
                                                                                                                          npm run preview
                                                                                                                          
                                                                                                                          # Output goes to dist/ folder
                                                                                                                          ```
                                                                                                                          
                                                                                                                          ---
                                                                                                                          
                                                                                                                          ## Troubleshooting
                                                                                                                          
                                                                                                                          ### "Slide not showing"
                                                                                                                          - Check it's exported in `src/slides/index.ts`
                                                                                                                          - Check it's in `slideConfig.ts` array
                                                                                                                          - Check component name spelling
                                                                                                                          
                                                                                                                          ### "URL parameter not working"
                                                                                                                          - Use `?slide=0` for first slide (0-indexed)
                                                                                                                          - `?slide=5` = 6th slide (index 5)
                                                                                                                          - Reload page after URL change
                                                                                                                          
                                                                                                                          ### "Styling looks weird"
                                                                                                                          - Zoom reset: `Cmd+0` (Mac) or `Ctrl+0` (Windows/Linux)
                                                                                                                          - Check 1920×1080 isn't zoomed
                                                                                                                          - Clear browser cache
                                                                                                                          
                                                                                                                          ### "Navigation buttons disabled"
                                                                                                                          - Normal! First slide disables "Prev", last slide disables "Next"
                                                                                                                          - Use arrow keys or number keys to always navigate
                                                                                                                          
                                                                                                                          ---
                                                                                                                          
                                                                                                                          ## Next Steps
                                                                                                                          
                                                                                                                          1. ✅ **Done!** Your basic slide deck is working
                                                                                                                          2. **Next:** Customize slides in `src/slides/`
                                                                                                                          3. **Then:** Add your content with your branding
                                                                                                                          4. **Finally:** Deploy and share URLs like `?slide=5`
                                                                                                                          
                                                                                                                          ---
                                                                                                                          
                                                                                                                          ## Tips & Tricks
                                                                                                                          
                                                                                                                          ### Bookmark a Specific Slide
                                                                                                                          
                                                                                                                          Send others directly to a slide:
                                                                                                                          ```
                                                                                                                          https://yoursite.com/?slide=3
                                                                                                                          ```
                                                                                                                          
                                                                                                                          ### Test on Phone
                                                                                                                          
                                                                                                                          Use your machine's IP address:
                                                                                                                          ```
                                                                                                                          http://192.168.1.100:5173/?slide=2
                                                                                                                          ```
                                                                                                                          
                                                                                                                          ### Presentation Mode
                                                                                                                          
                                                                                                                          Use your browser's fullscreen:
                                                                                                                          - F11 (Windows/Linux)
                                                                                                                          - Cmd+Ctrl+F (Mac)
                                                                                                                          
                                                                                                                          Then navigate with keyboard shortcuts!
                                                                                                                          
                                                                                                                          ---
                                                                                                                          
                                                                                                                          ## Questions?
                                                                                                                          
                                                                                                                          See the full guide: [SLIDE_SYSTEM_GUIDE.md](./SLIDE_SYSTEM_GUIDE.md)
                                                                                                                          
                                                                                                                          Happy presenting! 🎉
