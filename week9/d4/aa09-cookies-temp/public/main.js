/* ============================== PHASE 1 + 2 ============================== */

// For storing user's theme selection in cookies

// helper function
function getCookieValue(cookieName) {
    console.log("hello!", cookieName) // cookieName => "display-name"

    const cookies = document.cookie;
    console.log("cookies ->",cookies) // theme=dragon; display-name=Aaron
    const splitCookies = cookies.split("; ")

    const found = splitCookies.find(cookie => {
        return cookie.startsWith(cookieName)
    });

    if (!found) return false;

    const value = found.split("=")[1];
    console.log(value)
    return value;



}

const THEME_KEY = "theme"

function storeTheme(themeName) {
    // Your code here


    // document.cookie = `themeName=${themeName}`

    console.log(themeName)

    document.cookie = `${THEME_KEY}=${themeName}`

}

// For restoring theme from cookies, if selected by the user in the past
    // ! WILL Break for bonus
function restoreTheme() {
    // Your code here
    // get the thing

    // ! for ONE COOKIE
    let cookie = document.cookie // theme=dragon
    let theme = cookie.split("=")[1]
    if (theme) setTheme(theme)


    // ! FOR BONUS

    const storedTheme = getCookieValue(THEME_KEY)

    if (storedTheme) setTheme(storedTheme)

}

// For clearing theme selection from cookies (reset to default)
function clearTheme() {
    // Your code here
    // we just need to give it a max age.
    // // without the age, it will become a session cookie

    // test if this works by refreshing your cookies, not browser.
    document.cookie = `themeName=;max-age=0`

    // age can only be seen if you give a num greater than 0
    // document.cookie = `${THEME_KEY}=; max-age=15`;
}

/* ================================ PHASE 3 ================================ */

// For storing user's display name in cookies

const NAME_KEY = "display-name"

function storeName(displayName) {
    // Your code here

    // ! This will BREAK the styles
    document.cookie = `${NAME_KEY}=${displayName}`
}

// For restoring user's display name from cookies, if set in the past
function restoreName() {
    // Your code here

    //lets

    // we wanna pass the display name to our helper func
    const storedName = getCookieValue(NAME_KEY)

    if (storedName) setInputValue(NAME_KEY, storedName)

}

// For clearing user's display name from cookies
function clearName() {
    // Your code here
}

/* ========================================================================= */
/* ====================== DO NOT EDIT BELOW THIS LINE ====================== */
/* ========================================================================= */

// ===== THEME CONTROL

// For changing one theme button's styling to indicate which theme is selected

function toggleButtonSelection(themeName, selected) {
    const btn = document.getElementById(`theme-button-${themeName}`);
    if (btn) {
        if (selected) {
            btn.classList.add('selected');
        } else {
            btn.classList.remove('selected');
        }
    }
}

// Use a particular theme

function setTheme(themeName) {
    // Clear previous selection so buttons don't get stuck in selected state
    resetTheme()

    // Remember user's selection by storing it in their browser
    storeTheme(themeName);

    // Apply the theme to the page document
    document.documentElement.className = `theme-${themeName}`;

    // Show which button is selected
    toggleButtonSelection(themeName, true);
}

// Use default theme

function resetTheme() {
    // Remove selection styling from all buttons
    toggleButtonSelection('dragon', false);
    toggleButtonSelection('griffin', false);
    toggleButtonSelection('wizard', false);

    // Set default theme so header and footer are contrast colors
    document.documentElement.className = `theme-none`;
}

// For adding event listeners on the theme buttons

function addThemeEventListeners() {
    const themeNames = ['dragon', 'griffin', 'wizard'];
    themeNames.forEach(themeName => {
        const button = document.getElementById(`theme-button-${themeName}`);
        button.addEventListener('click', () => setTheme(themeName));
    });
}

// ===== NAME CONTROL

// For assigning change event to input field

function assignChangeEvent(inputId, handleChange) {
    const input = document.getElementById(inputId);
    if (input) {
        input.addEventListener('input', (event) => {
            handleChange(event.target.value);
        });
    }
}

// For setting value on input field

function setInputValue(inputId, value) {
    const input = document.getElementById(inputId);
    if (input) {
        input.value = value;
    }
}

// For resetting the display name to empty string

function resetName() {
    setInputValue('display-name', '');
}

// ===== CLEAR ALL

// For the clear/reset button

function clearAll() {
    // Remove from browser storage
    clearTheme();
    clearName();

    // Reset the page
    resetTheme();
    resetName();
}

// For adding click event listener on the Clear All button

function addClearAllEventListener() {
    const button = document.getElementById("clear-all");
    button.addEventListener('click', clearAll);
}

// ===== INITIALIZE PAGE

// For setting a theme when the page loads (called by body's onload event)

function initializePage() {
    // Set default theme so header & footer have dark backgrounds
    resetTheme();

    // Restore user's previous theme selection, if it exists
    restoreTheme();

    // Assign event to name input
    assignChangeEvent('display-name', storeName);

    // Restore user's previous name selection, if it exists
    restoreName();

    // Add event listeners
    addThemeEventListeners();
    addClearAllEventListener();
}

window.addEventListener('DOMContentLoaded', initializePage);
