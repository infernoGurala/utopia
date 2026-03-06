import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Utopia",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: false,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "utopia.inferalis.space",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Inter",
        body: "Source Sans Pro",
        code: "JetBrains Mono",
      },
colors: {
  lightMode: {
    light: "#f8f4f3",
    lightgray: "#cac2c6",
    gray: "#7c7579",
    darkgray: "#1f1b1d",
    dark: "#121013",
    secondary: "#57886c",
    tertiary: "#57886c",
    highlight: "rgba(87, 136, 108, 0.16)",
    textHighlight: "#f8c7cc66",
  },
  darkMode: {
    light: "#0e0f19",
    lightgray: "#2d3142",
    gray: "#8b8f9f",
    darkgray: "#e5e7eb",
    dark: "#f4f6fa",
    secondary: "#81a684",
    tertiary: "#57886c",
    highlight: "rgba(129, 166, 132, 0.16)",
    textHighlight: "#81a68452",
  },
},
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
Plugin.ContentIndex({
  enableSiteMap: true,
  enableRSS: false,
  sort: "title",

      }),
      Plugin.Assets(),
      Plugin.Static(),
Plugin.Favicon(),
Plugin.NotFoundPage(),      
    ],
  },
}

export default config
