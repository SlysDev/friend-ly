import { Dimensions } from "react-native";

// Spacing constants for consistent layout spacing
const _tinySize = 5;
const _smallSize = 10;
const _mediumSize = 25;
const _largeSize = 50;
const _massiveSize = 120;

// Horizontal space components (used for horizontal layout spacing)
export const horizontalSpaceTiny = { width: _tinySize };
export const horizontalSpaceSmall = { width: _smallSize };
export const horizontalSpaceMedium = { width: _mediumSize };
export const horizontalSpaceLarge = { width: _largeSize };

// Vertical space components (used for vertical layout spacing)
export const verticalSpaceTiny = { height: _tinySize };
export const verticalSpaceSmall = { height: _smallSize };
export const verticalSpaceMedium = { height: _mediumSize };
export const verticalSpaceLarge = { height: _largeSize };
export const verticalSpaceMassive = { height: _massiveSize };

// Divider component with spacing and border style
export const spacedDivider = {
    marginVertical: _mediumSize,
    borderBottomWidth: 1,
    borderColor: "grey",
};

// Helper functions for screen dimensions
export const screenWidth = () => Dimensions.get("window").width;
export const screenHeight = () => Dimensions.get("window").height;

// Helper function for calculating responsive height fraction
// Divides screen height by the given factor, with optional offset and max value
export const screenHeightFraction = (dividedBy = 1, offsetBy = 0, max = 3000) =>
    Math.min((screenHeight() - offsetBy) / dividedBy, max);

// Helper function for calculating responsive width fraction
// Divides screen width by the given factor, with optional offset and max value
export const screenWidthFraction = (dividedBy = 1, offsetBy = 0, max = 3000) =>
    Math.min((screenWidth() - offsetBy) / dividedBy, max);

// Functions for specific screen width fractions
export const halfScreenWidth = () => screenWidthFraction(2);
export const thirdScreenWidth = () => screenWidthFraction(3);
export const quarterScreenWidth = () => screenWidthFraction(4);

// Helper for responsive horizontal space based on screen width
export const getResponsiveHorizontalSpaceMedium = () => screenWidthFraction(10);

// Font size helpers for responsiveness based on screen width
// These adjust font size to be proportionate to screen width
export const getResponsiveSmallFontSize = (context) =>
    getResponsiveFontSize(context, 14, 15);
export const getResponsiveMediumFontSize = (context) =>
    getResponsiveFontSize(context, 16, 17);
export const getResponsiveLargeFontSize = (context) =>
    getResponsiveFontSize(context, 21, 31);
export const getResponsiveExtraLargeFontSize = (context) =>
    getResponsiveFontSize(context, 25);
export const getResponsiveMassiveFontSize = (context) =>
    getResponsiveFontSize(context, 30);

// Function to calculate responsive font size based on screen width
// Multiplies the base font size by a fraction of the screen width
// Limits the size to the provided max value
export const getResponsiveFontSize = (fontSize = 14, max = 100) => {
    const responsiveSize = Math.min(
        screenWidthFraction(10) * (fontSize / 100),
        max
    );
    return responsiveSize;
};
