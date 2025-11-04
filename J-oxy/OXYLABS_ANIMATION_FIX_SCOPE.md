# OXYLABS Background Animation Fix - Scope of Work

## **Objective**
Fix OXYLABS background animations that work locally but stop moving when deployed to Netlify.

## **Root Cause**
CSS-in-JS animations using `<style jsx>` are not properly hydrated during Netlify's production build process.

## **Solution Strategy**
Move CSS keyframe animations from inline `<style jsx>` to `globals.css` for better production compatibility.

## **Scope of Changes**

### **Files to Modify:**
1. `app/globals.css` - Add keyframe animations
2. `app/page.tsx` - Remove inline `<style jsx>` block

### **What Will Be Changed:**
- ✅ Move 3 keyframe animations (`scrollText1`, `scrollText2`, `scrollText3`) to globals.css
- ✅ Remove the `<style jsx>` block from page.tsx
- ✅ Keep all animation properties (duration, direction, speed) exactly the same

### **What Will NOT Be Changed:**
- ❌ Component structure in page.tsx
- ❌ Animation durations, speeds, or directions
- ❌ HTML structure of OXYLABS text elements
- ❌ Any other styling or theme elements
- ❌ Color schemes or visual appearance
- ❌ Any other components or pages
- ❌ Any existing functionality

## **Risk Assessment**
- **Risk Level:** LOW
- **Why Safe:** Only moving CSS location, not changing any functionality
- **Rollback:** Easy - can revert by moving CSS back to inline

## **Testing Plan**
1. Verify animations work locally after changes
2. Ensure no visual changes to the site
3. Confirm theme toggle still works
4. Check all other components remain unaffected

## **Expected Outcome**
- Animations work both locally AND on Netlify
- No visual or functional changes to the site
- Better production deployment reliability

## **Files Backup Strategy**
Before making changes, we'll:
1. Read current implementations
2. Preserve exact animation parameters
3. Make minimal, targeted changes only

---
**Date:** November 4, 2025  
**Status:** Ready to implement  
**Estimated Time:** 10 minutes  