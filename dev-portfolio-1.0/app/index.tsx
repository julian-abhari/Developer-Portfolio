import { Text, View } from "react-native";
/**
 * @component Index
 * @description This is the homepage of my developer portfolio.
 It will contain the following sections:
 1. Introduction about myself with an image and a brief about me.
 2. The skills and technologies that I have worked with.
 3. My experience in corporate, research, and leadership settings.
 4. My projects categorized by technology.
 5. A header with my contact information and social media profiles.
 6. A footer with links to my resume, blog, and other resources.
 *
 * @example
 * return (
 *   <Index />
 * )
 *
 * @returns {JSX.Element} A centered view containing welcome text
 */
export default function Index() {
  return (
    <View
      style={{
        flex: 1, // Takes up the full available space
        justifyContent: "center", // Centers the content vertically
        alignItems: "center", // Centers the content horizontally
      }}
    >
      <Text>
        Hello! I'm excited to turn this into a real web-app to explore my
        developer portfolio.
      </Text>
    </View>
  );
}
