/* 
ALTERNATIVE SOLUTION: font-display: block

If the preload strategy doesn't work, replace your font import in globals.css with:

@import url('https://api.fontshare.com/v2/css?f[]=satoshi@700,500,300,400&display=block');

This will:
- Show invisible text until fonts load (no FOUT)
- Prevent layout shifts
- May cause FOIT (Flash of Invisible Text) but eliminates the "zoom" effect

Use this if the preload + font-loaded class approach doesn't resolve the issue.
*/
