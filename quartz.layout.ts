import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({ links: {} }),
}

export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Darkmode(),
    Component.Explorer({
      explorerDefaultState: "collapsed",
      folderDefaultState: "collapsed",
      useSavedState: false,
      filterFn: (node) => {
        node.displayName = node.displayName.replace(/^\d+-/, "")
        return true
      },
    }),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({
      explorerDefaultState: "collapsed",
      folderDefaultState: "collapsed",
      useSavedState: false,
      filterFn: (node) => {
        node.displayName = node.displayName.replace(/^\d+-/, "")
        return true
      },
    })),
  ],
  right: [],
}
